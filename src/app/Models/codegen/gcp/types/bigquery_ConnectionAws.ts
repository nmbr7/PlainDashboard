import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bigquery_ConnectionAwsAccessRole,
  bigquery_ConnectionAwsAccessRole_GetTypes,
} from "./bigquery_ConnectionAwsAccessRole";

export interface bigquery_ConnectionAws {
  /*
Authentication using Google owned service account to assume into customer's AWS IAM Role.
Structure is documented below.
*/
  accessRole?: bigquery_ConnectionAwsAccessRole;
}

export function bigquery_ConnectionAws_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "accessRole",
      "Authentication using Google owned service account to assume into customer's AWS IAM Role.\nStructure is documented below.",
      () => bigquery_ConnectionAwsAccessRole_GetTypes(),
      true,
      false,
    ),
  ];
}
