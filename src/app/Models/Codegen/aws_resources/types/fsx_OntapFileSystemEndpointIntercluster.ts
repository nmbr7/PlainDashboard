import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface fsx_OntapFileSystemEndpointIntercluster {
  // IP addresses of the file system endpoint.
  ipAddresses?: Array<string>;

  // The Domain Name Service (DNS) name for the file system. You can mount your file system using its DNS name.
  dnsName?: string;
}

export function fsx_OntapFileSystemEndpointIntercluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ipAddresses",
      "IP addresses of the file system endpoint.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dnsName",
      "The Domain Name Service (DNS) name for the file system. You can mount your file system using its DNS name.",
      [],
      false,
      false,
    ),
  ];
}
