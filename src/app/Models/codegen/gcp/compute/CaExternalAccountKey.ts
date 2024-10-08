import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface CaExternalAccountKeyArgs {
  // Location for the externalAccountKey. Currently only `global` is supported.
  location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class CaExternalAccountKey extends DS_Resource {
  /*
Base64-URL-encoded HS256 key. It is generated by the PublicCertificateAuthorityService
when the ExternalAccountKey is created.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public b64MacKey?: string;

  /*
It is generated by the PublicCertificateAuthorityService when the ExternalAccountKey is created.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public keyId?: string;

  // Location for the externalAccountKey. Currently only `global` is supported.
  public location?: string;

  // Resource name. projects/{project}/locations/{location}/externalAccountKeys/{keyId}.
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
        "location",
        "Location for the externalAccountKey. Currently only `global` is supported.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
