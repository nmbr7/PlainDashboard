import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface LogResourcePolicyArgs {
  // Details of the resource policy, including the identity of the principal that is enabled to put logs to this account. This is formatted as a JSON string. Maximum length of 5120 characters.
  policyDocument?: string;

  // Name of the resource policy.
  policyName?: string;
}
export class LogResourcePolicy extends Resource {
  // Details of the resource policy, including the identity of the principal that is enabled to put logs to this account. This is formatted as a JSON string. Maximum length of 5120 characters.
  public policyDocument?: string;

  // Name of the resource policy.
  public policyName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policyDocument",
        "Details of the resource policy, including the identity of the principal that is enabled to put logs to this account. This is formatted as a JSON string. Maximum length of 5120 characters.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyName",
        "Name of the resource policy.",
        [],
        true,
        true,
      ),
    ];
  }
}
