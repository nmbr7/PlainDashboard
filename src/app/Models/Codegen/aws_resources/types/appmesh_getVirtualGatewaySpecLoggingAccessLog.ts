import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getVirtualGatewaySpecLoggingAccessLogFile,
  appmesh_getVirtualGatewaySpecLoggingAccessLogFile_GetTypes,
} from "./appmesh_getVirtualGatewaySpecLoggingAccessLogFile";

export interface appmesh_getVirtualGatewaySpecLoggingAccessLog {
  //
  files?: Array<appmesh_getVirtualGatewaySpecLoggingAccessLogFile>;
}

export function appmesh_getVirtualGatewaySpecLoggingAccessLog_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "files",
      "",
      appmesh_getVirtualGatewaySpecLoggingAccessLogFile_GetTypes(),
      true,
      false,
    ),
  ];
}
