import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface EnvGroupAttachmentArgs {
  /*
The Apigee environment group associated with the Apigee environment,
in the format `organizations/{{org_name}}/envgroups/{{envgroup_name}}`.


- - -
*/
  envgroupId?: string;

  // The resource ID of the environment.
  environment?: string;
}
export class EnvGroupAttachment extends Resource {
  /*
The Apigee environment group associated with the Apigee environment,
in the format `organizations/{{org_name}}/envgroups/{{envgroup_name}}`.


- - -
*/
  public envgroupId?: string;

  // The resource ID of the environment.
  public environment?: string;

  // The name of the newly created  attachment (output parameter).
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "environment",
        "The resource ID of the environment.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "envgroupId",
        "The Apigee environment group associated with the Apigee environment,\nin the format `organizations/{{org_name}}/envgroups/{{envgroup_name}}`.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
