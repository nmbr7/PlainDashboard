import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface licensemanager_getReceivedLicenseEntitlement {
  // Indicates whether check-ins are allowed.
  allowCheckIn?: boolean;

  // Maximum entitlement count. Use if the unit is not None.
  maxCount?: number;

  // The key name.
  name?: string;

  // Entitlement unit.
  unit?: string;

  // The value.
  value?: string;
}

export function licensemanager_getReceivedLicenseEntitlement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "unit",
      "Entitlement unit.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowCheckIn",
      "Indicates whether check-ins are allowed.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxCount",
      "Maximum entitlement count. Use if the unit is not None.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The key name.",
      () => [],
      true,
      false,
    ),
  ];
}
