import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  fsx_OntapFileSystemEndpointManagement,
  fsx_OntapFileSystemEndpointManagement_GetTypes,
} from "./fsx_OntapFileSystemEndpointManagement";
import {
  fsx_OntapFileSystemEndpointIntercluster,
  fsx_OntapFileSystemEndpointIntercluster_GetTypes,
} from "./fsx_OntapFileSystemEndpointIntercluster";

export interface fsx_OntapFileSystemEndpoint {
  // An endpoint for managing your file system by setting up NetApp SnapMirror with other ONTAP systems. See Endpoint.
  interclusters?: Array<fsx_OntapFileSystemEndpointIntercluster>;

  // An endpoint for managing your file system using the NetApp ONTAP CLI and NetApp ONTAP API. See Endpoint.
  managements?: Array<fsx_OntapFileSystemEndpointManagement>;
}

export function fsx_OntapFileSystemEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "managements",
      "An endpoint for managing your file system using the NetApp ONTAP CLI and NetApp ONTAP API. See Endpoint.",
      fsx_OntapFileSystemEndpointManagement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "interclusters",
      "An endpoint for managing your file system by setting up NetApp SnapMirror with other ONTAP systems. See Endpoint.",
      fsx_OntapFileSystemEndpointIntercluster_GetTypes(),
      false,
      false,
    ),
  ];
}
