import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securitylake_DataLakeConfigurationLifecycleConfigurationExpiration {
  // Number of days before data transition to a different S3 Storage Class in the Amazon Security Lake object.
  days?: number;
}

export function securitylake_DataLakeConfigurationLifecycleConfigurationExpiration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "days",
      "Number of days before data transition to a different S3 Storage Class in the Amazon Security Lake object.",
      [],
      false,
      false,
    ),
  ];
}
