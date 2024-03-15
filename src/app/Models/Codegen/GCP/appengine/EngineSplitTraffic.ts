import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { EngineSplitTrafficSplit } from "../types/EngineSplitTrafficSplit";

export interface EngineSplitTrafficArgs {
  // If set to true traffic will be migrated to this version.
  MigrateTraffic?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The name of the service these settings apply to.
  Service?: string;

  /*
Mapping that defines fractional HTTP traffic diversion to different versions within the service.
Structure is documented below.
*/
  Split?: EngineSplitTrafficSplit;
}
export class EngineSplitTraffic extends Resource {
  // If set to true traffic will be migrated to this version.
  public MigrateTraffic?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The name of the service these settings apply to.
  public Service?: string;

  /*
Mapping that defines fractional HTTP traffic diversion to different versions within the service.
Structure is documented below.
*/
  public Split?: EngineSplitTrafficSplit;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Service",
        "The name of the service these settings apply to.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Split",
        "Mapping that defines fractional HTTP traffic diversion to different versions within the service.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "MigrateTraffic",
        "If set to true traffic will be migrated to this version.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
