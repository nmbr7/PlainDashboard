import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface organizations_getOrganizationRootPolicyType {
  // The status of the policy type as it relates to the associated root
  status?: string;

  //
  type?: string;
}

export function organizations_getOrganizationRootPolicyType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "The status of the policy type as it relates to the associated root",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "type", "", [], true, false),
  ];
}
