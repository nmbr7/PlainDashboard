import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AuthPolicyArgs {
  // The auth policy. The policy string in JSON must not contain newlines or blank lines.
  policy?: string;

  // The ID or Amazon Resource Name (ARN) of the service network or service for which the policy is created.
  resourceIdentifier?: string;

  // The state of the auth policy. The auth policy is only active when the auth type is set to `AWS_IAM`. If you provide a policy, then authentication and authorization decisions are made based on this policy and the client's IAM policy. If the Auth type is `NONE`, then, any auth policy you provide will remain inactive.
  state?: string;
}
export class AuthPolicy extends Resource {
  // The state of the auth policy. The auth policy is only active when the auth type is set to `AWS_IAM`. If you provide a policy, then authentication and authorization decisions are made based on this policy and the client's IAM policy. If the Auth type is `NONE`, then, any auth policy you provide will remain inactive.
  public state?: string;

  // The auth policy. The policy string in JSON must not contain newlines or blank lines.
  public policy?: string;

  // The ID or Amazon Resource Name (ARN) of the service network or service for which the policy is created.
  public resourceIdentifier?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The auth policy. The policy string in JSON must not contain newlines or blank lines.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceIdentifier",
        "The ID or Amazon Resource Name (ARN) of the service network or service for which the policy is created.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "state",
        "The state of the auth policy. The auth policy is only active when the auth type is set to `AWS_IAM`. If you provide a policy, then authentication and authorization decisions are made based on this policy and the client's IAM policy. If the Auth type is `NONE`, then, any auth policy you provide will remain inactive.",
        [],
        false,
        false,
      ),
    ];
  }
}
