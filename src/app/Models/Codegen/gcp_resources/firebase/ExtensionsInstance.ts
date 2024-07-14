import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  firebase_ExtensionsInstanceRuntimeData,
  firebase_ExtensionsInstanceRuntimeData_GetTypes,
} from "../types/firebase_ExtensionsInstanceRuntimeData";
import {
  firebase_ExtensionsInstanceErrorStatus,
  firebase_ExtensionsInstanceErrorStatus_GetTypes,
} from "../types/firebase_ExtensionsInstanceErrorStatus";
import {
  firebase_ExtensionsInstanceConfig,
  firebase_ExtensionsInstanceConfig_GetTypes,
} from "../types/firebase_ExtensionsInstanceConfig";

export interface ExtensionsInstanceArgs {
  /*
The ID to use for the Extension Instance, which will become the final
component of the instance's name.
*/
  instanceId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The current Config of the Extension Instance.
Structure is documented below.
*/
  config?: firebase_ExtensionsInstanceConfig;
}
export class ExtensionsInstance extends Resource {
  /*
(Output)
The unique identifier for this configuration.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The email of the service account to be used at runtime by compute resources
created for the operation of the Extension instance.
*/
  public serviceAccountEmail?: string;

  // The time at which the Extension Instance was updated.
  public updateTime?: string;

  /*
(Output)
The time at which the Extension Instance Config was created.
*/
  public createTime?: string;

  /*
The name of the last operation that acted on this Extension
Instance
*/
  public lastOperationName?: string;

  // The type of the last operation that acted on the Extension Instance.
  public lastOperationType?: string;

  /*
The ID to use for the Extension Instance, which will become the final
component of the instance's name.
*/
  public instanceId?: string;

  /*
Data set by the extension instance at runtime.
Structure is documented below.
*/
  public runtimeDatas?: Array<firebase_ExtensionsInstanceRuntimeData>;

  // The processing state of the extension instance.
  public state?: string;

  /*
The current Config of the Extension Instance.
Structure is documented below.
*/
  public config?: firebase_ExtensionsInstanceConfig;

  /*
If this Instance has `state: ERRORED`, the error messages
will be found here.
Structure is documented below.
*/
  public errorStatuses?: Array<firebase_ExtensionsInstanceErrorStatus>;

  /*
A weak etag that is computed by the server based on other configuration
values and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
*/
  public etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "The ID to use for the Extension Instance, which will become the final\ncomponent of the instance's name.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "config",
        "The current Config of the Extension Instance.\nStructure is documented below.",
        firebase_ExtensionsInstanceConfig_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
