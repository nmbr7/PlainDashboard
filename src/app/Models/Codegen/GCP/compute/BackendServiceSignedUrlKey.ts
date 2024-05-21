import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface BackendServiceSignedUrlKeyArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The backend service this signed URL key belongs.


- - -
*/
  backendService?: string;

  /*
128-bit key value used for signing the URL. The key value must be a
valid RFC 4648 Section 5 base64url encoded string.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  keyValue?: string;

  // Name of the signed URL key.
  name?: string;
}
export class BackendServiceSignedUrlKey extends Resource {
  /*
The backend service this signed URL key belongs.


- - -
*/
  public backendService?: string;

  /*
128-bit key value used for signing the URL. The key value must be a
valid RFC 4648 Section 5 base64url encoded string.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public keyValue?: string;

  // Name of the signed URL key.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "backendService",
        "The backend service this signed URL key belongs.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "keyValue",
        "128-bit key value used for signing the URL. The key value must be a\nvalid RFC 4648 Section 5 base64url encoded string.\n**Note**: This property is sensitive and will not be displayed in the plan.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the signed URL key.",
        [],
        false,
        true,
      ),
    ];
  }
}
