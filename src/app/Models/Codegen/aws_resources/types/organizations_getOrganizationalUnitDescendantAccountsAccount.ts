import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface organizations_getOrganizationalUnitDescendantAccountsAccount {
  // The email address associated with the AWS account.
  email?: string;

  // Parent identifier of the organizational units.
  id?: string;

  // The friendly name of the account.
  name?: string;

  // The status of the account in the organization.
  status?: string;

  // The Amazon Resource Name (ARN) of the account.
  arn?: string;
}

export function organizations_getOrganizationalUnitDescendantAccountsAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The friendly name of the account.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "The status of the account in the organization.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The Amazon Resource Name (ARN) of the account.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "email",
      "The email address associated with the AWS account.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Parent identifier of the organizational units.",
      [],
      true,
      false,
    ),
  ];
}
