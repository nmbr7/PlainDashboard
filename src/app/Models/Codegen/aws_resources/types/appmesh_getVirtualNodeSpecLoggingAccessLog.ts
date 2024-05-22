import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualNodeSpecLoggingAccessLogFile,
  appmesh_getVirtualNodeSpecLoggingAccessLogFile_GetTypes,
} from "./appmesh_getVirtualNodeSpecLoggingAccessLogFile";

export interface appmesh_getVirtualNodeSpecLoggingAccessLog {
  //
  files?: Array<appmesh_getVirtualNodeSpecLoggingAccessLogFile>;
}

export function appmesh_getVirtualNodeSpecLoggingAccessLog_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "files",
      "",
      appmesh_getVirtualNodeSpecLoggingAccessLogFile_GetTypes(),
      true,
      false,
    ),
  ];
}
