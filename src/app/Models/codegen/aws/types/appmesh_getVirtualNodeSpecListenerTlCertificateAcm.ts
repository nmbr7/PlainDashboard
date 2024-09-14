import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_getVirtualNodeSpecListenerTlCertificateAcm {
  //
  certificateArn?: string;
}

export function appmesh_getVirtualNodeSpecListenerTlCertificateAcm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "certificateArn",
      "",
      () => [],
      true,
      false,
    ),
  ];
}