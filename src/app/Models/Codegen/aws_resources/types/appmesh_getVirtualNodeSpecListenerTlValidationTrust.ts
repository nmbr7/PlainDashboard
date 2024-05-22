import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualNodeSpecListenerTlValidationTrustSd,
  appmesh_getVirtualNodeSpecListenerTlValidationTrustSd_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTlValidationTrustSd";
import {
  appmesh_getVirtualNodeSpecListenerTlValidationTrustFile,
  appmesh_getVirtualNodeSpecListenerTlValidationTrustFile_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTlValidationTrustFile";

export interface appmesh_getVirtualNodeSpecListenerTlValidationTrust {
  //
  files?: Array<appmesh_getVirtualNodeSpecListenerTlValidationTrustFile>;

  //
  sds?: Array<appmesh_getVirtualNodeSpecListenerTlValidationTrustSd>;
}

export function appmesh_getVirtualNodeSpecListenerTlValidationTrust_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "files",
      "",
      appmesh_getVirtualNodeSpecListenerTlValidationTrustFile_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sds",
      "",
      appmesh_getVirtualNodeSpecListenerTlValidationTrustSd_GetTypes(),
      true,
      false,
    ),
  ];
}
