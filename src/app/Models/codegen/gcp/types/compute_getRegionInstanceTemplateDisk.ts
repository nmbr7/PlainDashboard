import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_getRegionInstanceTemplateDiskSourceImageEncryptionKey,
  compute_getRegionInstanceTemplateDiskSourceImageEncryptionKey_GetTypes,
} from "./compute_getRegionInstanceTemplateDiskSourceImageEncryptionKey";
import {
  compute_getRegionInstanceTemplateDiskSourceSnapshotEncryptionKey,
  compute_getRegionInstanceTemplateDiskSourceSnapshotEncryptionKey_GetTypes,
} from "./compute_getRegionInstanceTemplateDiskSourceSnapshotEncryptionKey";
import {
  compute_getRegionInstanceTemplateDiskDiskEncryptionKey,
  compute_getRegionInstanceTemplateDiskDiskEncryptionKey_GetTypes,
} from "./compute_getRegionInstanceTemplateDiskDiskEncryptionKey";

export interface compute_getRegionInstanceTemplateDisk {
  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  resourceManagerTags?: Map<string, string>;

  /*
The customer-supplied encryption key of the source
image. Required if the source image is protected by a
customer-supplied encryption key.

Instance templates do not store customer-supplied
encryption keys, so you cannot create disks for
instances in a managed instance group if the source
images are encrypted with your own keys.
*/
  sourceImageEncryptionKeys?: Array<compute_getRegionInstanceTemplateDiskSourceImageEncryptionKey>;

  /*
A unique device name that is reflected into the
/dev/  tree of a Linux operating system running within the instance. If not
specified, the server chooses a default device name to apply to this disk.
*/
  deviceName?: string;

  /*
Name of the disk. When not provided, this defaults
to the name of the instance.
*/
  diskName?: string;

  /*
The size of the image in gigabytes. If not
specified, it will inherit the size of its base image. For SCRATCH disks,
the size must be exactly 375GB.
*/
  diskSizeGb?: number;

  /*
The mode in which to attach this disk, either READ_WRITE
or READ_ONLY. If you are attaching or creating a boot disk, this must
read-write mode.
*/
  mode?: string;

  // The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.
  type?: string;

  /*
Whether or not the disk should be auto-deleted.
This defaults to true.
*/
  autoDelete?: boolean;

  /*
The GCE disk type. Such as `"pd-ssd"`, `"local-ssd"`,
`"pd-balanced"` or `"pd-standard"`.
*/
  diskType?: string;

  /*
Specifies the disk interface to use for attaching this disk,
which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI
and the request will fail if you attempt to attach a persistent disk in any other format
than SCSI. Local SSDs can use either NVME or SCSI.
*/
  interface?: string;

  /*
(Optional) A set of ket/value label pairs to assign to disk created from
this template
*/
  labels?: Map<string, string>;

  // (Optional) -- A list of short names of resource policies to attach to this disk for automatic snapshot creations. Currently a max of 1 resource policy is supported.
  resourcePolicies?: Array<string>;

  /*
The source snapshot to create this disk. When creating
a new instance, one of initializeParams.sourceSnapshot,
initializeParams.sourceImage, or disks.source is
required except for local SSD.
*/
  sourceSnapshot?: string;

  // The customer-supplied encryption key of the source snapshot.
  sourceSnapshotEncryptionKeys?: Array<compute_getRegionInstanceTemplateDiskSourceSnapshotEncryptionKey>;

  // Indicates that this is a boot disk.
  boot?: boolean;

  // Encrypts or decrypts a disk using a customer-supplied encryption key.
  diskEncryptionKeys?: Array<compute_getRegionInstanceTemplateDiskDiskEncryptionKey>;

  /*
Indicates how many IOPS to provision for the disk. This
sets the number of I/O operations per second that the disk can handle.
Values must be between 10,000 and 120,000. For more details, see the
[Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk).
*/
  provisionedIops?: number;

  /*
The name (--not self_link--)
of the disk (such as those managed by `gcp.compute.Disk`) to attach.
> --Note:-- Either `source` or `source_image` is --required-- in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.
*/
  source?: string;

  /*
The image from which to
initialize this disk. This can be one of: the image's `self_link`,
`projects/{project}/global/images/{image}`,
`projects/{project}/global/images/family/{family}`, `global/images/{image}`,
`global/images/family/{family}`, `family/{family}`, `{project}/{family}`,
`{project}/{image}`, `{family}`, or `{image}`.
> --Note:-- Either `source` or `source_image` is --required-- in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.
*/
  sourceImage?: string;
}

export function compute_getRegionInstanceTemplateDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mode",
      "The mode in which to attach this disk, either READ_WRITE\nor READ_ONLY. If you are attaching or creating a boot disk, this must\nread-write mode.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "boot",
      "Indicates that this is a boot disk.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "provisionedIops",
      "Indicates how many IOPS to provision for the disk. This\nsets the number of I/O operations per second that the disk can handle.\nValues must be between 10,000 and 120,000. For more details, see the\n[Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "source",
      "The name (**not self_link**)\nof the disk (such as those managed by `gcp.compute.Disk`) to attach.\n> **Note:** Either `source` or `source_image` is **required** in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskName",
      "Name of the disk. When not provided, this defaults\nto the name of the instance.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourceImageEncryptionKeys",
      "The customer-supplied encryption key of the source\nimage. Required if the source image is protected by a\ncustomer-supplied encryption key.\n\nInstance templates do not store customer-supplied\nencryption keys, so you cannot create disks for\ninstances in a managed instance group if the source\nimages are encrypted with your own keys.",
      () =>
        compute_getRegionInstanceTemplateDiskSourceImageEncryptionKey_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "diskSizeGb",
      "The size of the image in gigabytes. If not\nspecified, it will inherit the size of its base image. For SCRATCH disks,\nthe size must be exactly 375GB.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskType",
      'The GCE disk type. Such as `"pd-ssd"`, `"local-ssd"`,\n`"pd-balanced"` or `"pd-standard"`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourceSnapshotEncryptionKeys",
      "The customer-supplied encryption key of the source snapshot.",
      () =>
        compute_getRegionInstanceTemplateDiskSourceSnapshotEncryptionKey_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceImage",
      "The image from which to\ninitialize this disk. This can be one of: the image's `self_link`,\n`projects/{project}/global/images/{image}`,\n`projects/{project}/global/images/family/{family}`, `global/images/{image}`,\n`global/images/family/{family}`, `family/{family}`, `{project}/{family}`,\n`{project}/{image}`, `{family}`, or `{image}`.\n> **Note:** Either `source` or `source_image` is **required** in a disk block unless the disk type is `local-ssd`. Check the API [docs](https://cloud.google.com/compute/docs/reference/rest/v1/instanceTemplates/insert) for details.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "resourceManagerTags",
      "A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "interface",
      "Specifies the disk interface to use for attaching this disk,\nwhich is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI\nand the request will fail if you attempt to attach a persistent disk in any other format\nthan SCSI. Local SSDs can use either NVME or SCSI.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "(Optional) A set of ket/value label pairs to assign to disk created from\nthis template",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "A unique device name that is reflected into the\n/dev/  tree of a Linux operating system running within the instance. If not\nspecified, the server chooses a default device name to apply to this disk.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "resourcePolicies",
      "(Optional) -- A list of short names of resource policies to attach to this disk for automatic snapshot creations. Currently a max of 1 resource policy is supported.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceSnapshot",
      "The source snapshot to create this disk. When creating\na new instance, one of initializeParams.sourceSnapshot,\ninitializeParams.sourceImage, or disks.source is\nrequired except for local SSD.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "diskEncryptionKeys",
      "Encrypts or decrypts a disk using a customer-supplied encryption key.",
      () => compute_getRegionInstanceTemplateDiskDiskEncryptionKey_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoDelete",
      "Whether or not the disk should be auto-deleted.\nThis defaults to true.",
      () => [],
      true,
      false,
    ),
  ];
}
