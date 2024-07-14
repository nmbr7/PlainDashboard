import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface index_ProviderAssumeRole {
  // The duration, between 15 minutes and 12 hours, of the role session. Valid time units are ns, us (or µs), ms, s, h, or m.
  duration?: string;

  // A unique identifier that might be required when you assume a role in another account.
  externalId?: string;

  // IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  policy?: string;

  // Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.
  roleArn?: string;

  // An identifier for the assumed role session.
  sessionName?: string;

  // Assume role session tags.
  tags?: Map<string, string>;

  // Assume role session tag keys to pass to any subsequent sessions.
  transitiveTagKeys?: Array<string>;

  // Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  policyArns?: Array<string>;

  // Source identity specified by the principal assuming the role.
  sourceIdentity?: string;
}

export function index_ProviderAssumeRole_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "policy",
      "IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "transitiveTagKeys",
      "Assume role session tag keys to pass to any subsequent sessions.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "policyArns",
      "Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceIdentity",
      "Source identity specified by the principal assuming the role.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "duration",
      "The duration, between 15 minutes and 12 hours, of the role session. Valid time units are ns, us (or µs), ms, s, h, or m.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "externalId",
      "A unique identifier that might be required when you assume a role in another account.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sessionName",
      "An identifier for the assumed role session.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Assume role session tags.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
