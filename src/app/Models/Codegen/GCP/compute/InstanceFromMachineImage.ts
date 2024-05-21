import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_InstanceFromMachineImageShieldedInstanceConfig,
  compute_InstanceFromMachineImageShieldedInstanceConfig_GetTypes,
} from "../types/compute_InstanceFromMachineImageShieldedInstanceConfig";
import {
  compute_InstanceFromMachineImageNetworkInterface,
  compute_InstanceFromMachineImageNetworkInterface_GetTypes,
} from "../types/compute_InstanceFromMachineImageNetworkInterface";
import {
  compute_InstanceFromMachineImageParams,
  compute_InstanceFromMachineImageParams_GetTypes,
} from "../types/compute_InstanceFromMachineImageParams";
import {
  compute_InstanceFromMachineImageNetworkPerformanceConfig,
  compute_InstanceFromMachineImageNetworkPerformanceConfig_GetTypes,
} from "../types/compute_InstanceFromMachineImageNetworkPerformanceConfig";
import {
  compute_InstanceFromMachineImageScratchDisk,
  compute_InstanceFromMachineImageScratchDisk_GetTypes,
} from "../types/compute_InstanceFromMachineImageScratchDisk";
import {
  compute_InstanceFromMachineImageAttachedDisk,
  compute_InstanceFromMachineImageAttachedDisk_GetTypes,
} from "../types/compute_InstanceFromMachineImageAttachedDisk";
import {
  compute_InstanceFromMachineImageAdvancedMachineFeatures,
  compute_InstanceFromMachineImageAdvancedMachineFeatures_GetTypes,
} from "../types/compute_InstanceFromMachineImageAdvancedMachineFeatures";
import {
  compute_InstanceFromMachineImageGuestAccelerator,
  compute_InstanceFromMachineImageGuestAccelerator_GetTypes,
} from "../types/compute_InstanceFromMachineImageGuestAccelerator";
import {
  compute_InstanceFromMachineImageBootDisk,
  compute_InstanceFromMachineImageBootDisk_GetTypes,
} from "../types/compute_InstanceFromMachineImageBootDisk";
import {
  compute_InstanceFromMachineImageConfidentialInstanceConfig,
  compute_InstanceFromMachineImageConfidentialInstanceConfig_GetTypes,
} from "../types/compute_InstanceFromMachineImageConfidentialInstanceConfig";
import {
  compute_InstanceFromMachineImageServiceAccount,
  compute_InstanceFromMachineImageServiceAccount_GetTypes,
} from "../types/compute_InstanceFromMachineImageServiceAccount";
import {
  compute_InstanceFromMachineImageReservationAffinity,
  compute_InstanceFromMachineImageReservationAffinity_GetTypes,
} from "../types/compute_InstanceFromMachineImageReservationAffinity";
import {
  compute_InstanceFromMachineImageScheduling,
  compute_InstanceFromMachineImageScheduling_GetTypes,
} from "../types/compute_InstanceFromMachineImageScheduling";

export interface InstanceFromMachineImageArgs {
  // Controls for advanced machine-related behavior features.
  advancedMachineFeatures?: compute_InstanceFromMachineImageAdvancedMachineFeatures;

  // A brief description of the resource.
  description?: string;

  /*
A set of key/value label pairs assigned to the instance. --Note--: This field is non-authoritative, and will only manage
the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
the resource.
*/
  labels?: Map<string, string>;

  // Specifies the reservations that this instance can consume from.
  reservationAffinity?: compute_InstanceFromMachineImageReservationAffinity;

  /*
The zone that the machine should be created in. If not
set, the provider zone is used.

In addition to these, most- arguments from `gcp.compute.Instance` are supported
as a way to override the properties in the machine image. All exported attributes
from `gcp.compute.Instance` are likewise exported here.

> --Warning:-- -Due to API limitations, disk overrides are currently disabled. This includes the "boot_disk", "attached_disk", and "scratch_disk" fields.
*/
  zone?: string;

  // The machine type to create.
  machineType?: string;

  // Whether the instance has virtual displays enabled.
  enableDisplay?: boolean;

  // List of the type and count of accelerator cards attached to the instance.
  guestAccelerators?: Array<compute_InstanceFromMachineImageGuestAccelerator>;

  // Metadata startup scripts made available within the instance.
  metadataStartupScript?: string;

  // The scheduling strategy being used by the instance.
  scheduling?: compute_InstanceFromMachineImageScheduling;

  // The shielded vm config being used by the instance.
  shieldedInstanceConfig?: compute_InstanceFromMachineImageShieldedInstanceConfig;

  // Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
  canIpForward?: boolean;

  /*
The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail
to create.
*/
  confidentialInstanceConfig?: compute_InstanceFromMachineImageConfidentialInstanceConfig;

  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  name?: string;

  // The networks attached to the instance.
  networkInterfaces?: Array<compute_InstanceFromMachineImageNetworkInterface>;

  // Stores additional params passed with the request, but not persisted as part of resource payload.
  params?: compute_InstanceFromMachineImageParams;

  /*
The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither
self_link nor project are provided, the provider project is used.
*/
  project?: string;

  /*
Name or self link of a machine
image to create the instance based on.

- - -
*/
  sourceMachineImage?: string;

  /*
A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of
labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]-[a-z0-9]), concatenated with periods. The
entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
*/
  hostname?: string;

  // Desired status of the instance. Either "RUNNING" or "TERMINATED".
  desiredStatus?: string;

  // A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
  resourcePolicies?: string;

  // The minimum CPU platform specified for the VM instance.
  minCpuPlatform?: string;

  // The service account to attach to the instance.
  serviceAccount?: compute_InstanceFromMachineImageServiceAccount;

  // The list of tags attached to the instance.
  tags?: Array<string>;

  /*
If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires
stopping the instance without setting this field, the update will fail.
*/
  allowStoppingForUpdate?: boolean;

  // Whether deletion protection is enabled on this instance.
  deletionProtection?: boolean;

  // Metadata key/value pairs made available within the instance.
  metadata?: Map<string, string>;

  /*
Configures network performance settings for the instance. If not specified, the instance will be created with its
default network performance configuration.
*/
  networkPerformanceConfig?: compute_InstanceFromMachineImageNetworkPerformanceConfig;
}
export class InstanceFromMachineImage extends Resource {
  /*
A unique name for the resource, required by GCE.
Changing this forces a new resource to be created.
*/
  public name?: string;

  /*
Configures network performance settings for the instance. If not specified, the instance will be created with its
default network performance configuration.
*/
  public networkPerformanceConfig?: compute_InstanceFromMachineImageNetworkPerformanceConfig;

  /*
If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires
stopping the instance without setting this field, the update will fail.
*/
  public allowStoppingForUpdate?: boolean;

  /*
The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail
to create.
*/
  public confidentialInstanceConfig?: compute_InstanceFromMachineImageConfidentialInstanceConfig;

  // Whether deletion protection is enabled on this instance.
  public deletionProtection?: boolean;

  // A brief description of the resource.
  public description?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // The CPU platform used by this instance.
  public cpuPlatform?: string;

  // The server-assigned unique identifier of this instance.
  public instanceId?: string;

  // Metadata key/value pairs made available within the instance.
  public metadata?: Map<string, string>;

  // The minimum CPU platform specified for the VM instance.
  public minCpuPlatform?: string;

  // The scheduling strategy being used by the instance.
  public scheduling?: compute_InstanceFromMachineImageScheduling;

  /*
Name or self link of a machine
image to create the instance based on.

- - -
*/
  public sourceMachineImage?: string;

  // Controls for advanced machine-related behavior features.
  public advancedMachineFeatures?: compute_InstanceFromMachineImageAdvancedMachineFeatures;

  /*
A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of
labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]-[a-z0-9]), concatenated with periods. The
entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
*/
  public hostname?: string;

  // The unique fingerprint of the metadata.
  public metadataFingerprint?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  // The scratch disks attached to the instance.
  public scratchDisks?: Array<compute_InstanceFromMachineImageScratchDisk>;

  // The list of tags attached to the instance.
  public tags?: Array<string>;

  // The unique fingerprint of the tags.
  public tagsFingerprint?: string;

  // List of disks attached to the instance
  public attachedDisks?: Array<compute_InstanceFromMachineImageAttachedDisk>;

  // Desired status of the instance. Either "RUNNING" or "TERMINATED".
  public desiredStatus?: string;

  // Whether the instance has virtual displays enabled.
  public enableDisplay?: boolean;

  // The networks attached to the instance.
  public networkInterfaces?: Array<compute_InstanceFromMachineImageNetworkInterface>;

  // The boot disk for the instance.
  public bootDisks?: Array<compute_InstanceFromMachineImageBootDisk>;

  // Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
  public canIpForward?: boolean;

  // The service account to attach to the instance.
  public serviceAccount?: compute_InstanceFromMachineImageServiceAccount;

  /*
The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither
self_link nor project are provided, the provider project is used.
*/
  public project?: string;

  /*
The zone that the machine should be created in. If not
set, the provider zone is used.

In addition to these, most- arguments from `gcp.compute.Instance` are supported
as a way to override the properties in the machine image. All exported attributes
from `gcp.compute.Instance` are likewise exported here.

> --Warning:-- -Due to API limitations, disk overrides are currently disabled. This includes the "boot_disk", "attached_disk", and "scratch_disk" fields.
*/
  public zone?: string;

  /*
Current status of the instance. This could be one of the following values: PROVISIONING, STAGING, RUNNING, STOPPING,
SUSPENDING, SUSPENDED, REPAIRING, and TERMINATED. For more information about the status of the instance, see [Instance
life cycle](https://cloud.google.com/compute/docs/instances/instance-life-cycle).
*/
  public currentStatus?: string;

  // The unique fingerprint of the labels.
  public labelFingerprint?: string;

  /*
A set of key/value label pairs assigned to the instance. --Note--: This field is non-authoritative, and will only manage
the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
the resource.
*/
  public labels?: Map<string, string>;

  // Stores additional params passed with the request, but not persisted as part of resource payload.
  public params?: compute_InstanceFromMachineImageParams;

  // List of the type and count of accelerator cards attached to the instance.
  public guestAccelerators?: Array<compute_InstanceFromMachineImageGuestAccelerator>;

  // Specifies the reservations that this instance can consume from.
  public reservationAffinity?: compute_InstanceFromMachineImageReservationAffinity;

  // A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
  public resourcePolicies?: string;

  // The shielded vm config being used by the instance.
  public shieldedInstanceConfig?: compute_InstanceFromMachineImageShieldedInstanceConfig;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public effectiveLabels?: Map<string, string>;

  // The machine type to create.
  public machineType?: string;

  // Metadata startup scripts made available within the instance.
  public metadataStartupScript?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither\nself_link nor project are provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceMachineImage",
        "Name or self link of a machine\nimage to create the instance based on.\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceAccount",
        "The service account to attach to the instance.",
        compute_InstanceFromMachineImageServiceAccount_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "metadata",
        "Metadata key/value pairs made available within the instance.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "advancedMachineFeatures",
        "Controls for advanced machine-related behavior features.",
        compute_InstanceFromMachineImageAdvancedMachineFeatures_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableDisplay",
        "Whether the instance has virtual displays enabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A unique name for the resource, required by GCE.\nChanging this forces a new resource to be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "networkInterfaces",
        "The networks attached to the instance.",
        compute_InstanceFromMachineImageNetworkInterface_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "scheduling",
        "The scheduling strategy being used by the instance.",
        compute_InstanceFromMachineImageScheduling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "params",
        "Stores additional params passed with the request, but not persisted as part of resource payload.",
        compute_InstanceFromMachineImageParams_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "tags",
        "The list of tags attached to the instance.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "zone",
        'The zone that the machine should be created in. If not\nset, the provider zone is used.\n\nIn addition to these, most* arguments from `gcp.compute.Instance` are supported\nas a way to override the properties in the machine image. All exported attributes\nfrom `gcp.compute.Instance` are likewise exported here.\n\n> **Warning:** *Due to API limitations, disk overrides are currently disabled. This includes the "boot_disk", "attached_disk", and "scratch_disk" fields.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "guestAccelerators",
        "List of the type and count of accelerator cards attached to the instance.",
        compute_InstanceFromMachineImageGuestAccelerator_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deletionProtection",
        "Whether deletion protection is enabled on this instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkPerformanceConfig",
        "Configures network performance settings for the instance. If not specified, the instance will be created with its\ndefault network performance configuration.",
        compute_InstanceFromMachineImageNetworkPerformanceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "desiredStatus",
        'Desired status of the instance. Either "RUNNING" or "TERMINATED".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A brief description of the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "reservationAffinity",
        "Specifies the reservations that this instance can consume from.",
        compute_InstanceFromMachineImageReservationAffinity_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "machineType",
        "The machine type to create.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "confidentialInstanceConfig",
        "The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail\nto create.",
        compute_InstanceFromMachineImageConfidentialInstanceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "metadataStartupScript",
        "Metadata startup scripts made available within the instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "canIpForward",
        "Whether sending and receiving of packets with non-matching source or destination IPs is allowed.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourcePolicies",
        "A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "hostname",
        "A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of\nlabels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]*[a-z0-9]), concatenated with periods. The\nentire hostname must not exceed 253 characters. Changing this forces a new resource to be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowStoppingForUpdate",
        "If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires\nstopping the instance without setting this field, the update will fail.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A set of key/value label pairs assigned to the instance. **Note**: This field is non-authoritative, and will only manage\nthe labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on\nthe resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "shieldedInstanceConfig",
        "The shielded vm config being used by the instance.",
        compute_InstanceFromMachineImageShieldedInstanceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "minCpuPlatform",
        "The minimum CPU platform specified for the VM instance.",
        [],
        false,
        false,
      ),
    ];
  }
}
