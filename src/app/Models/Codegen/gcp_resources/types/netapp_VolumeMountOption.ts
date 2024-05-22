import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface netapp_VolumeMountOption {
  /*
(Output)
Export path of the volume.
*/
  export?: string;

  /*
(Output)
Full export path of the volume.
Format for NFS volumes: `<export_ip>:/<shareName>`
Format for SMB volumes: `\\\\netbios_prefix-four_random_hex_letters.domain_name\\shareName`
*/
  exportFull?: string;

  /*
(Output)
Human-readable mount instructions.
*/
  instructions?: string;

  /*
(Output)
Protocol to mount with.
*/
  protocol?: string;
}

export function netapp_VolumeMountOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "export",
      "(Output)\nExport path of the volume.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "exportFull",
      "(Output)\nFull export path of the volume.\nFormat for NFS volumes: `<export_ip>:/<shareName>`\nFormat for SMB volumes: `\\\\\\\\netbios_prefix-four_random_hex_letters.domain_name\\\\shareName`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instructions",
      "(Output)\nHuman-readable mount instructions.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "(Output)\nProtocol to mount with.",
      [],
      false,
      false,
    ),
  ];
}
