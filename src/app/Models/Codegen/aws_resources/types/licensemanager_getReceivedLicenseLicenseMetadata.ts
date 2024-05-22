import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface licensemanager_getReceivedLicenseLicenseMetadata {
  // The key name.
  name?: string;

  // The value.
  value?: string;
}

export function licensemanager_getReceivedLicenseLicenseMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The key name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value.",
      [],
      true,
      false,
    ),
  ];
}
