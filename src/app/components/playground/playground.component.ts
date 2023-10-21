import { ChangeDetectorRef, Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import {
  faTrash,
  faGear,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {
  CloudResource,
  Resource,
  lineCoordinates,
} from 'src/app/Models/CloudResource';
import {
  GCP_ComputeEngine,
  GCP_StorageBucket,
  ResourceProperties,
} from 'src/app/Models/ResourceProperties';
import { InputType } from 'src/app/enum/InputType';
import { ProviderType, ResourceType } from 'src/app/enum/ResourceType';
import { AddComponentService } from 'src/app/services/add-component.service';
import { DrawLineService } from 'src/app/services/draw-line.service';
import { take } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ApplicationStateService } from 'src/app/services/application-state.service';
import { LineOptions } from '../line/line.component';
import { StackService } from 'src/app/services/stack.service';
import * as _ from 'lodash';
import { DataService } from 'src/app/services/data.service';
import { RESOURCE_LIST_WIDTH } from 'src/app/constants/board-constants';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit {
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    if(this.currentOutput){
      this.edgeObserver.next({
        isNew: true,
        selected: false,
        position: {
          x1: this.currentOutput.x,
          y1: this.currentOutput.y,
          x2: e.clientX - RESOURCE_LIST_WIDTH,
          y2: e.clientY
        }
      })
      this.newLine = true;
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e: any) {
    if(this.currentInput != null && this.currentOutput){
      let inputItem = this.items.find((x) => x.id == this.currentInput?.id);
      let outputItem = this.items.find((x) => x.id == this.currentOutput?.id);
      inputItem?.inlets.push(outputItem?.id as string);
      outputItem?.outlets.push(inputItem?.id as string);
      inputItem?.inletMap.set(outputItem?.id as string, {
        x1: this.currentOutput.x,
        y1: this.currentOutput.y,
        x2: this.currentInput.x,
        y2: this.currentInput.y
      });
      outputItem?.outletMap.set(inputItem?.id as string, {
        x1: this.currentInput.x,
        y1: this.currentInput.y,
        x2: this.currentOutput.x,
        y2: this.currentOutput.y
      })
    }
    this.currentOutput = null;
    this.currentInput = null;
    this.newLine = false;
  }
  public newLine: boolean = false;
  public showSideBar: boolean = false;
  public currentIndex: number = 0;
  public currentConfig: Map<string, { type: InputType; val: any }> = new Map<
    string,
    { type: InputType; val: any }
  >();
  public currentResourceType: ResourceType | undefined;
  public items: CloudResource[] = [];
  public resourceType = ResourceType;
  public hideline: boolean = true;
  public lineOptions: LineOptions;

  // Initializing font awesome icons
  public faTrash: IconDefinition = faTrash;
  public faGear: IconDefinition = faGear;
  public currentOutput: { x: number, y: number, id: string} | null = null;
  public currentInput: { x: number, y: number, id: string} | null = null;
  public edgeObserver: Subject<LineOptions> = new Subject<LineOptions>();
  private currentInlet: number;

  constructor(
    private _applicationStateService: ApplicationStateService,
    private _addComponentService: AddComponentService,
    private _lineService: DrawLineService,
    private _renderer: Renderer2,
    private _localStorageService: LocalStorageService,
    private _stackService: StackService,
    private _dataService: DataService
  ) {}

  ngOnInit(): void {
    this._getState();
    // Subcribe for component addition
    this._addComponentService.components.subscribe(
      (componentName: ResourceType) => {
        const item = new CloudResource();
        item.id = _.uniqueId('Resource');
        item.resourceType = componentName;
        item.name = ResourceType[componentName];
        item.title = item.name.toString();
        item.providerType = ProviderType.GCP;
        item.resourceConfig = undefined;
        this.items.push(item);
        this._saveState();
      }
    );
  }

  public onEnter(value: string, id: number): void {
    this.items[id].title = value;
    this._saveState();
  }

  public deploy(): void {
    this._stackService
      .deploy(this.items)
      .pipe(take(1))
      .subscribe((res) => this._processResponse(res));
  }

  public destroy(): void {
    this._stackService
      .getStack()
      .pipe(take(1))
      .subscribe((res) => console.log(res));
  }

  public trashShit(id: number): void {
    console.log(id);
    let currentItem = this.items[id];
    // currentItem.outlets.forEach((element) => {
    //   if (this.items[element]?.inletMap) {
    //     this.items[element].inletMap?.delete(id);
    //     this.items[element].inlets?.splice(
    //       this.items[element].inlets?.indexOf(id),
    //       1
    //     );
    //   }
    // });
    // currentItem.inlets.forEach((element) => {
    //   if (this.items[element]?.outletMap) {
    //     this.items[element].outletMap?.delete(id);
    //     this.items[element].outlets?.splice(
    //       this.items[element].outlets?.indexOf(id),
    //       1
    //     );
    //   }
    // });

    this.items.splice(id, 1);
    this._saveState();
  }

  public toggleSidebar(i: number, item: CloudResource): void {
    if (!this.showSideBar) {
      if (item.resourceConfig != undefined) {
        switch (item.resourceType) {
          case ResourceType.Simple_Storage_Service: {
            let res = item.resourceConfig as GCP_StorageBucket;
            let objMap = new Map(Object.entries(res));
            ResourceProperties.propertiesMap
              .get(item.resourceType)
              ?.forEach((k, v) => {
                this.currentConfig.set(v, { type: k, val: objMap.get(v) });
              });
            break;
          }
          case ResourceType.EC2: {
            let res = item.resourceConfig as GCP_ComputeEngine;
            let objMap = new Map(Object.entries(res));
            ResourceProperties.propertiesMap
              .get(item.resourceType)
              ?.forEach((k, v) => {
                this.currentConfig.set(v, { type: k, val: objMap.get(v) });
              });
            break;
          }
          default: {
            ResourceProperties.propertiesMap
              .get(item.resourceType)
              ?.forEach((k, v) => {
                this.currentConfig.set(v, { type: k, val: '' });
              });
            break;
          }
        }
      } else {
        ResourceProperties.propertiesMap
          .get(item.resourceType)
          ?.forEach((k, v) => {
            this.currentConfig.set(v, { type: k, val: '' });
          });
      }
      this.currentResourceType = item.resourceType;
      this.currentIndex = i;
    } else {
      this.currentResourceType = undefined;
      this.currentIndex = -1;
      this.currentConfig = new Map<string, { type: InputType; val: string }>();
    }
    this.showSideBar = !this.showSideBar;
  }

  public startConnection(
    startPosition: {
      outputPositionX: number;
      outputPositionY: number;
    },
    outPutId: string
  ): void {
this.currentOutput = {
  id: outPutId,
  x: startPosition.outputPositionX - RESOURCE_LIST_WIDTH,
  y: startPosition.outputPositionY
};
  }

  public mouseEntered(endPosition: {
    inputPositionX: number;
    inputPositionY: number;
  },
  inputId: string): void {
    this.currentInput = {
      id: inputId,
      x: endPosition.inputPositionX - RESOURCE_LIST_WIDTH,
      y: endPosition.inputPositionY
    };
  }

  public mouseLeft(): void {

  }

  public dragEnd($event: CdkDragEnd, id: number): void {
    let pos = $event.source.getFreeDragPosition();
    let currentItem = this.items[id];

    // TODO: VPC group drag logic
    // if (currentItem.resourceType == ResourceType.Virtual_Private_Cloud) {
    //   let x = pos.x - currentItem.position.x;
    //   let y = pos.y - currentItem.position.y;

    //   let index = 0;
    //   this.items.forEach((element) => {
    //     this._updateLine(element, index, pos);
    //     let nx = element.position.x + x;
    //     let ny = element.position.y + y;
    //     element.position = { x: nx, y: ny };
    //     index += 1;
    //   });
    // }

    // this._updateLine(currentItem, id, pos);

    currentItem.position.x = pos.x;
    currentItem.position.y = pos.y;
    console.log(pos);
    this._saveState();
    this.items = _.cloneDeep(this.items);
  }

  public onResize(ev: ResizeObserverEntry, id: number): void {
    this._renderer.setStyle(ev.target, 'width', ev.contentRect.width);
    this._renderer.setStyle(ev.target, 'height', ev.contentRect.height);
    this.items[id].shape.width = ev.contentRect.width;
    this.items[id].shape.height = ev.contentRect.height;
    this._saveState();
  }

  public updateConfig(id: number, res: Resource): void {
    this.items[id].resourceConfig = res;
    this._saveState();
  }

  public getLineOptions(item: CloudResource, outlet: string): LineOptions {
    return {
      selected: false,
      isNew: false,
      position: {
        x1: item.outletMap.get(outlet)?.x2 as number,
        y1: item.outletMap.get(outlet)?.y2 as number,
        x2: item.outletMap.get(outlet)?.x1 as number,
        y2: item.outletMap.get(outlet)?.y1 as number,
      },
    };
  }

  private _getState(): void {
    this._applicationStateService
      .getState()
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          this.items = JSON.parse(JSON.stringify(res));
          this._dataService.currentList = this.items;
        },
        error: (_) => {
          let data = this._localStorageService.getLocalState();
          if (data != null) {
            this.items = JSON.parse(data);
            this.items.forEach((item) => {
              item.inletMap = new Map<string, lineCoordinates>(
                JSON.parse(item.inletMapString)
              );
              item.outletMap = new Map<string, lineCoordinates>(
                JSON.parse(item.outletMapString)
              );
            });
            this._dataService.currentList = this.items;
          }
        },
        complete: () => console.info('GetState completed'),
      });
  }

  private _saveState(): void {
    this._dataService.currentList = this.items;
    this._applicationStateService
      .saveState(this.items)
      .pipe(take(1))
      .subscribe({
        next: (data) => this._processResponse(data),
        error: (_) => {
          this.items.forEach((item) => {
            item.inletMapString = JSON.stringify([...item.inletMap]);
            item.outletMapString = JSON.stringify([...item.outletMap]);
          });
          this._localStorageService.setLocalState(this.items);
        },
        complete: () => console.info('SaveState Completed'),
      });
  }

  private _processResponse(val: string): void {
    var data = JSON.parse(val);
    console.log(data['message']);
  }

  // private _updateLine(currentItem: CloudResource, id: number, pos: any) {
  //   let translateX = pos.x - currentItem.position.x;
  //   let translateY = pos.y - currentItem.position.y;
  //   if (currentItem.inlets.length > 0) {
  //     currentItem.inlets.forEach((element) => {
  //       let inlet = currentItem.inletMap.get(element);
  //       currentItem.inletMap.set(element, {
  //         x1: (inlet?.x1 as number) + translateX,
  //         y1: (inlet?.y1 as number) + translateY,
  //         x2: inlet?.x2 as number,
  //         y2: inlet?.y2 as number,
  //       });
  //       let outlet = this.items[element].outletMap.get(id);
  //       this.items[element].outletMap.set(id, {
  //         x1: outlet?.x1 as number,
  //         y1: outlet?.y1 as number,
  //         x2: (inlet?.x1 as number) + translateX,
  //         y2: (inlet?.y1 as number) + translateY,
  //       });
  //     });
  //   }

  //   if (currentItem.outlets.length > 0) {
  //     currentItem.outlets.forEach((element) => {
  //       let outlet = currentItem.outletMap.get(element);
  //       currentItem.outletMap.set(element, {
  //         x1: (outlet?.x1 as number) + translateX,
  //         y1: (outlet?.y1 as number) + translateY,
  //         x2: outlet?.x2 as number,
  //         y2: outlet?.y2 as number,
  //       });
  //       let inlet = this.items[element].inletMap.get(id);
  //       this.items[element].inletMap.set(id, {
  //         x1: inlet?.x1 as number,
  //         y1: inlet?.y1 as number,
  //         x2: (inlet?.x1 as number) + translateX,
  //         y2: (inlet?.y1 as number) + translateY,
  //       });
  //     });
  //   }
  // }

  // private _updateLineState(id: number): void {
  //   let outLetItem = this.items[this.currentInlet];
  //   let inLetItem = this.items[id];
  //   outLetItem.outlets.push(id);
  //   inLetItem.inlets.push(this.currentInlet);
  //   let coordinates = this._lineService.getCoordinates();
  //   outLetItem.outletMap.set(id, {
  //     x1: coordinates.startx,
  //     y1: coordinates.starty,
  //     x2: coordinates.endx,
  //     y2: coordinates.endy,
  //   });
  //   inLetItem.inletMap.set(this.currentInlet, {
  //     x1: coordinates.endx,
  //     y1: coordinates.endy,
  //     x2: coordinates.startx,
  //     y2: coordinates.starty,
  //   });
  //   console.log(this.items);
  // }
}
