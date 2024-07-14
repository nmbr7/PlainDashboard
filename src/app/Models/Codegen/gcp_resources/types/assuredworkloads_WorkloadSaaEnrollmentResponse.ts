import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface assuredworkloads_WorkloadSaaEnrollmentResponse {
  // Indicates SAA enrollment status of a given workload. Possible values: SETUP_STATE_UNSPECIFIED, STATUS_PENDING, STATUS_COMPLETE
  setupStatus?: string;

  // Indicates SAA enrollment setup error if any.
  setupErrors?: Array<string>;
}

export function assuredworkloads_WorkloadSaaEnrollmentResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "setupStatus",
      "Indicates SAA enrollment status of a given workload. Possible values: SETUP_STATE_UNSPECIFIED, STATUS_PENDING, STATUS_COMPLETE",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "setupErrors",
      "Indicates SAA enrollment setup error if any.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
