import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkeonprem_BareMetalAdminClusterValidationCheckStatusResult {
  /*
(Output)
The category of the validation.
*/
  category?: string;

  // A human readable description of this Bare Metal Admin Cluster.
  description?: string;

  /*
(Output)
Detailed failure information, which might be unformatted.
*/
  details?: string;

  /*
(Output)
Options used for the validation check.
*/
  options?: string;

  /*
(Output)
A human-readable message of the check failure.
*/
  reason?: string;
}

export function gkeonprem_BareMetalAdminClusterValidationCheckStatusResult_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "options",
      "(Output)\nOptions used for the validation check.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "reason",
      "(Output)\nA human-readable message of the check failure.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "category",
      "(Output)\nThe category of the validation.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "A human readable description of this Bare Metal Admin Cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "details",
      "(Output)\nDetailed failure information, which might be unformatted.",
      [],
      false,
      false,
    ),
  ];
}
