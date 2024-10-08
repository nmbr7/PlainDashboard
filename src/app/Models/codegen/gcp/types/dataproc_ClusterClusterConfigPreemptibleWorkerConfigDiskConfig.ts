import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataproc_ClusterClusterConfigPreemptibleWorkerConfigDiskConfig {
  /*
Size of the primary disk attached to each node, specified
in GB. The primary disk contains the boot volume and system libraries, and the
smallest allowed disk size is 10GB. GCP will default to a predetermined
computed value if not set (currently 500GB). Note: If SSDs are not
attached, it also contains the HDFS data blocks and Hadoop working directories.
*/
  bootDiskSizeGb?: number;

  /*
The disk type of the primary disk attached to each node.
One of `"pd-ssd"` or `"pd-standard"`. Defaults to `"pd-standard"`.
*/
  bootDiskType?: string;

  /*
The amount of local SSD disks that will be attached to each master cluster node. 
Defaults to 0.
*/
  numLocalSsds?: number;
}

export function dataproc_ClusterClusterConfigPreemptibleWorkerConfigDiskConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bootDiskType",
      'The disk type of the primary disk attached to each node.\nOne of `"pd-ssd"` or `"pd-standard"`. Defaults to `"pd-standard"`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numLocalSsds",
      "The amount of local SSD disks that will be attached to each master cluster node. \nDefaults to 0.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bootDiskSizeGb",
      "Size of the primary disk attached to each node, specified\nin GB. The primary disk contains the boot volume and system libraries, and the\nsmallest allowed disk size is 10GB. GCP will default to a predetermined\ncomputed value if not set (currently 500GB). Note: If SSDs are not\nattached, it also contains the HDFS data blocks and Hadoop working directories.",
      () => [],
      false,
      true,
    ),
  ];
}
