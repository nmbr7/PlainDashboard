import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface accesscontextmanager_AccessLevelBasicConditionDevicePolicyOsConstraint {
  /*
The minimum allowed OS version. If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".
*/
  minimumVersion?: string;

  /*
The operating system type of the device.
Possible values are: `OS_UNSPECIFIED`, `DESKTOP_MAC`, `DESKTOP_WINDOWS`, `DESKTOP_LINUX`, `DESKTOP_CHROME_OS`, `ANDROID`, `IOS`.
*/
  osType?: string;

  // If you specify DESKTOP_CHROME_OS for osType, you can optionally include requireVerifiedChromeOs to require Chrome Verified Access.
  requireVerifiedChromeOs?: boolean;
}

export function accesscontextmanager_AccessLevelBasicConditionDevicePolicyOsConstraint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "minimumVersion",
      'The minimum allowed OS version. If not set, any version\nof this OS satisfies the constraint.\nFormat: "major.minor.patch" such as "10.5.301", "9.2.1".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "osType",
      "The operating system type of the device.\nPossible values are: `OS_UNSPECIFIED`, `DESKTOP_MAC`, `DESKTOP_WINDOWS`, `DESKTOP_LINUX`, `DESKTOP_CHROME_OS`, `ANDROID`, `IOS`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requireVerifiedChromeOs",
      "If you specify DESKTOP_CHROME_OS for osType, you can optionally include requireVerifiedChromeOs to require Chrome Verified Access.",
      [],
      false,
      false,
    ),
  ];
}
