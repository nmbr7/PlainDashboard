import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  accesscontextmanager_AccessLevelBasicConditionDevicePolicyOsConstraint,
  accesscontextmanager_AccessLevelBasicConditionDevicePolicyOsConstraint_GetTypes,
} from "./accesscontextmanager_AccessLevelBasicConditionDevicePolicyOsConstraint";

export interface accesscontextmanager_AccessLevelBasicConditionDevicePolicy {
  /*
A list of allowed device management levels.
An empty list allows all management levels.
Each value may be one of: `MANAGEMENT_UNSPECIFIED`, `NONE`, `BASIC`, `COMPLETE`.
*/
  allowedDeviceManagementLevels?: Array<string>;

  /*
A list of allowed encryptions statuses.
An empty list allows all statuses.
Each value may be one of: `ENCRYPTION_UNSPECIFIED`, `ENCRYPTION_UNSUPPORTED`, `UNENCRYPTED`, `ENCRYPTED`.
*/
  allowedEncryptionStatuses?: Array<string>;

  /*
A list of allowed OS versions.
An empty list allows all types and all versions.
Structure is documented below.
*/
  osConstraints?: Array<accesscontextmanager_AccessLevelBasicConditionDevicePolicyOsConstraint>;

  // Whether the device needs to be approved by the customer admin.
  requireAdminApproval?: boolean;

  // Whether the device needs to be corp owned.
  requireCorpOwned?: boolean;

  /*
Whether or not screenlock is required for the DevicePolicy
to be true. Defaults to false.
*/
  requireScreenLock?: boolean;
}

export function accesscontextmanager_AccessLevelBasicConditionDevicePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "requireCorpOwned",
      "Whether the device needs to be corp owned.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requireScreenLock",
      "Whether or not screenlock is required for the DevicePolicy\nto be true. Defaults to false.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedDeviceManagementLevels",
      "A list of allowed device management levels.\nAn empty list allows all management levels.\nEach value may be one of: `MANAGEMENT_UNSPECIFIED`, `NONE`, `BASIC`, `COMPLETE`.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedEncryptionStatuses",
      "A list of allowed encryptions statuses.\nAn empty list allows all statuses.\nEach value may be one of: `ENCRYPTION_UNSPECIFIED`, `ENCRYPTION_UNSUPPORTED`, `UNENCRYPTED`, `ENCRYPTED`.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "osConstraints",
      "A list of allowed OS versions.\nAn empty list allows all types and all versions.\nStructure is documented below.",
      () =>
        accesscontextmanager_AccessLevelBasicConditionDevicePolicyOsConstraint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requireAdminApproval",
      "Whether the device needs to be approved by the customer admin.",
      () => [],
      false,
      false,
    ),
  ];
}
