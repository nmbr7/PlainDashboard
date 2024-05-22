import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appstream_FleetDomainJoinInfo {
  // Fully qualified name of the directory (for example, corp.example.com).
  directoryName?: string;

  // Distinguished name of the organizational unit for computer accounts.
  organizationalUnitDistinguishedName?: string;
}

export function appstream_FleetDomainJoinInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "directoryName",
      "Fully qualified name of the directory (for example, corp.example.com).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "organizationalUnitDistinguishedName",
      "Distinguished name of the organizational unit for computer accounts.",
      [],
      false,
      false,
    ),
  ];
}
