import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  endpoints_ConsumersIamMemberCondition,
  endpoints_ConsumersIamMemberCondition_GetTypes,
} from "../types/endpoints_ConsumersIamMemberCondition";

export interface ConsumersIamMemberArgs {
  //
  consumerProject?: string;

  //
  member?: string;

  /*
The role that should be applied. Only one
`gcp.endpoints.ConsumersIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  role?: string;

  //
  serviceName?: string;

  //
  condition?: endpoints_ConsumersIamMemberCondition;
}
export class ConsumersIamMember extends Resource {
  // (Computed) The etag of the IAM policy.
  public etag?: string;

  //
  public member?: string;

  /*
The role that should be applied. Only one
`gcp.endpoints.ConsumersIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public role?: string;

  //
  public serviceName?: string;

  //
  public condition?: endpoints_ConsumersIamMemberCondition;

  //
  public consumerProject?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        endpoints_ConsumersIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "consumerProject",
        "",
        [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "member", "", [], true, true),
      new DynamicUIProps(
        InputType.String,
        "role",
        "The role that should be applied. Only one\n`gcp.endpoints.ConsumersIamBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "serviceName", "", [], true, true),
    ];
  }
}
