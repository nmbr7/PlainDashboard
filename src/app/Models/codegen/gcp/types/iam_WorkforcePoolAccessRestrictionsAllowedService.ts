import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface iam_WorkforcePoolAccessRestrictionsAllowedService {
  /*
Domain name of the service.
Example: console.cloud.google
*/
  domain?: string;
}

export function iam_WorkforcePoolAccessRestrictionsAllowedService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domain",
      "Domain name of the service.\nExample: console.cloud.google",
      () => [],
      false,
      false,
    ),
  ];
}
