import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getVirtualNodeSpecServiceDiscovery,
  appmesh_getVirtualNodeSpecServiceDiscovery_GetTypes,
} from "./appmesh_getVirtualNodeSpecServiceDiscovery";
import {
  appmesh_getVirtualNodeSpecBackendDefault,
  appmesh_getVirtualNodeSpecBackendDefault_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendDefault";
import {
  appmesh_getVirtualNodeSpecBackend,
  appmesh_getVirtualNodeSpecBackend_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackend";
import {
  appmesh_getVirtualNodeSpecListener,
  appmesh_getVirtualNodeSpecListener_GetTypes,
} from "./appmesh_getVirtualNodeSpecListener";
import {
  appmesh_getVirtualNodeSpecLogging,
  appmesh_getVirtualNodeSpecLogging_GetTypes,
} from "./appmesh_getVirtualNodeSpecLogging";

export interface appmesh_getVirtualNodeSpec {
  //
  serviceDiscoveries?: Array<appmesh_getVirtualNodeSpecServiceDiscovery>;

  //
  backendDefaults?: Array<appmesh_getVirtualNodeSpecBackendDefault>;

  //
  backends?: Array<appmesh_getVirtualNodeSpecBackend>;

  //
  listeners?: Array<appmesh_getVirtualNodeSpecListener>;

  //
  loggings?: Array<appmesh_getVirtualNodeSpecLogging>;
}

export function appmesh_getVirtualNodeSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "loggings",
      "",
      appmesh_getVirtualNodeSpecLogging_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "serviceDiscoveries",
      "",
      appmesh_getVirtualNodeSpecServiceDiscovery_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "backendDefaults",
      "",
      appmesh_getVirtualNodeSpecBackendDefault_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "backends",
      "",
      appmesh_getVirtualNodeSpecBackend_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "listeners",
      "",
      appmesh_getVirtualNodeSpecListener_GetTypes(),
      true,
      false,
    ),
  ];
}
