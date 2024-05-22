import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ServerlessSecurityPolicyArgs {
  // JSON policy document to use as the content for the new policy
  policy?: string;

  /*
Type of security policy. One of `encryption` or `network`.

The following arguments are optional:
*/
  type?: string;

  // Description of the policy. Typically used to store information about the permissions defined in the policy.
  description?: string;

  // Name of the policy.
  name?: string;
}
export class ServerlessSecurityPolicy extends Resource {
  // Description of the policy. Typically used to store information about the permissions defined in the policy.
  public description?: string;

  // Name of the policy.
  public name?: string;

  // JSON policy document to use as the content for the new policy
  public policy?: string;

  // Version of the policy.
  public policyVersion?: string;

  /*
Type of security policy. One of `encryption` or `network`.

The following arguments are optional:
*/
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policy",
        "JSON policy document to use as the content for the new policy",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of security policy. One of `encryption` or `network`.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the policy. Typically used to store information about the permissions defined in the policy.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the policy.",
        [],
        false,
        false,
      ),
    ];
  }
}
