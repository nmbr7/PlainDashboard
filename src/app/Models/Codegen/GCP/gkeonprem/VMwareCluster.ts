import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkeonprem_VMwareClusterValidationCheck,
  gkeonprem_VMwareClusterValidationCheck_GetTypes,
} from "../types/gkeonprem_VMwareClusterValidationCheck";
import {
  gkeonprem_VMwareClusterFleet,
  gkeonprem_VMwareClusterFleet_GetTypes,
} from "../types/gkeonprem_VMwareClusterFleet";
import {
  gkeonprem_VMwareClusterStatus,
  gkeonprem_VMwareClusterStatus_GetTypes,
} from "../types/gkeonprem_VMwareClusterStatus";
import {
  gkeonprem_VMwareClusterLoadBalancer,
  gkeonprem_VMwareClusterLoadBalancer_GetTypes,
} from "../types/gkeonprem_VMwareClusterLoadBalancer";
import {
  gkeonprem_VMwareClusterAuthorization,
  gkeonprem_VMwareClusterAuthorization_GetTypes,
} from "../types/gkeonprem_VMwareClusterAuthorization";
import {
  gkeonprem_VMwareClusterDataplaneV2,
  gkeonprem_VMwareClusterDataplaneV2_GetTypes,
} from "../types/gkeonprem_VMwareClusterDataplaneV2";
import {
  gkeonprem_VMwareClusterAutoRepairConfig,
  gkeonprem_VMwareClusterAutoRepairConfig_GetTypes,
} from "../types/gkeonprem_VMwareClusterAutoRepairConfig";
import {
  gkeonprem_VMwareClusterVcenter,
  gkeonprem_VMwareClusterVcenter_GetTypes,
} from "../types/gkeonprem_VMwareClusterVcenter";
import {
  gkeonprem_VMwareClusterControlPlaneNode,
  gkeonprem_VMwareClusterControlPlaneNode_GetTypes,
} from "../types/gkeonprem_VMwareClusterControlPlaneNode";
import {
  gkeonprem_VMwareClusterStorage,
  gkeonprem_VMwareClusterStorage_GetTypes,
} from "../types/gkeonprem_VMwareClusterStorage";
import {
  gkeonprem_VMwareClusterAntiAffinityGroups,
  gkeonprem_VMwareClusterAntiAffinityGroups_GetTypes,
} from "../types/gkeonprem_VMwareClusterAntiAffinityGroups";
import {
  gkeonprem_VMwareClusterNetworkConfig,
  gkeonprem_VMwareClusterNetworkConfig_GetTypes,
} from "../types/gkeonprem_VMwareClusterNetworkConfig";
import {
  gkeonprem_VMwareClusterUpgradePolicy,
  gkeonprem_VMwareClusterUpgradePolicy_GetTypes,
} from "../types/gkeonprem_VMwareClusterUpgradePolicy";

export interface VMwareClusterArgs {
  /*
The admin cluster this VMware User Cluster belongs to.
This is the full resource name of the admin cluster's hub membership.
In the future, references to other resource types might be allowed if
admin clusters are modeled as their own resources.
*/
  adminClusterMembership?: string;

  /*
VMware User Cluster control plane nodes must have either 1 or 3 replicas.
Structure is documented below.
*/
  controlPlaneNode?: gkeonprem_VMwareClusterControlPlaneNode;

  // Enable control plane V2. Default to false.
  enableControlPlaneV2?: boolean;

  /*
Load Balancer configuration.
Structure is documented below.
*/
  loadBalancer?: gkeonprem_VMwareClusterLoadBalancer;

  // The location of the resource.
  location?: string;

  // Enable VM tracking.
  vmTrackingEnabled?: boolean;

  /*
RBAC policy that will be applied and managed by GKE On-Prem.
Structure is documented below.
*/
  authorization?: gkeonprem_VMwareClusterAuthorization;

  /*
VmwareDataplaneV2Config specifies configuration for Dataplane V2.
Structure is documented below.
*/
  dataplaneV2?: gkeonprem_VMwareClusterDataplaneV2;

  // A human readable description of this VMware User Cluster.
  description?: string;

  // The Anthos clusters on the VMware version for your user cluster.
  onPremVersion?: string;

  /*
Annotations on the VMware User Cluster.
This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  /*
Configuration for auto repairing.
Structure is documented below.
*/
  autoRepairConfig?: gkeonprem_VMwareClusterAutoRepairConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Storage configuration.
Structure is documented below.
*/
  storage?: gkeonprem_VMwareClusterStorage;

  /*
AAGConfig specifies whether to spread VMware User Cluster nodes across at
least three physical hosts in the datacenter.
Structure is documented below.
*/
  antiAffinityGroups?: gkeonprem_VMwareClusterAntiAffinityGroups;

  // The VMware cluster name.
  name?: string;

  /*
The VMware User Cluster network configuration.
Structure is documented below.
*/
  networkConfig?: gkeonprem_VMwareClusterNetworkConfig;

  /*
Specifies upgrade policy for the cluster.
Structure is documented below.
*/
  upgradePolicy?: gkeonprem_VMwareClusterUpgradePolicy;

  /*
VmwareVCenterConfig specifies vCenter config for the user cluster.
Inherited from the admin cluster.
Structure is documented below.
*/
  vcenters?: Array<gkeonprem_VMwareClusterVcenter>;
}
export class VMwareCluster extends Resource {
  // The location of the resource.
  public location?: string;

  /*
(Output)
The lifecycle state of the condition.
*/
  public state?: string;

  /*
Storage configuration.
Structure is documented below.
*/
  public storage?: gkeonprem_VMwareClusterStorage;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Enable VM tracking.
  public vmTrackingEnabled?: boolean;

  // A human readable description of this VMware User Cluster.
  public description?: string;

  // The DNS name of VMware User Cluster's API server.
  public endpoint?: string;

  /*
This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.
Allows clients to perform consistent read-modify-writes
through optimistic concurrency control.
*/
  public etag?: string;

  /*
Load Balancer configuration.
Structure is documented below.
*/
  public loadBalancer?: gkeonprem_VMwareClusterLoadBalancer;

  // The unique identifier of the VMware User Cluster.
  public uid?: string;

  /*
ValidationCheck represents the result of the preflight check job.
Structure is documented below.
*/
  public validationChecks?: Array<gkeonprem_VMwareClusterValidationCheck>;

  /*
RBAC policy that will be applied and managed by GKE On-Prem.
Structure is documented below.
*/
  public authorization?: gkeonprem_VMwareClusterAuthorization;

  // The time at which VMware User Cluster was created.
  public createTime?: string;

  /*
VmwareDataplaneV2Config specifies configuration for Dataplane V2.
Structure is documented below.
*/
  public dataplaneV2?: gkeonprem_VMwareClusterDataplaneV2;

  /*
The object name of the VMware OnPremUserCluster custom resource on the
associated admin cluster. This field is used to support conflicting
names when enrolling existing clusters to the API. When used as a part of
cluster enrollment, this field will differ from the ID in the resource
name. For new clusters, this field will match the user provided cluster ID
and be visible in the last component of the resource name. It is not
modifiable.
All users should use this name to access their cluster using gkectl or
kubectl and should expect to see the local name when viewing admin
cluster controller logs.
*/
  public localName?: string;

  /*
The admin cluster this VMware User Cluster belongs to.
This is the full resource name of the admin cluster's hub membership.
In the future, references to other resource types might be allowed if
admin clusters are modeled as their own resources.
*/
  public adminClusterMembership?: string;

  // Enable control plane V2. Default to false.
  public enableControlPlaneV2?: boolean;

  /*
Specifies upgrade policy for the cluster.
Structure is documented below.
*/
  public upgradePolicy?: gkeonprem_VMwareClusterUpgradePolicy;

  /*
VmwareVCenterConfig specifies vCenter config for the user cluster.
Inherited from the admin cluster.
Structure is documented below.
*/
  public vcenters?: Array<gkeonprem_VMwareClusterVcenter>;

  /*
VMware User Cluster control plane nodes must have either 1 or 3 replicas.
Structure is documented below.
*/
  public controlPlaneNode?: gkeonprem_VMwareClusterControlPlaneNode;

  // The time at which VMware User Cluster was deleted.
  public deleteTime?: string;

  // If set, there are currently changes in flight to the VMware User Cluster.
  public reconciling?: boolean;

  // The time at which VMware User Cluster was last updated.
  public updateTime?: string;

  /*
Configuration for auto repairing.
Structure is documented below.
*/
  public autoRepairConfig?: gkeonprem_VMwareClusterAutoRepairConfig;

  /*
Fleet configuration for the cluster.
Structure is documented below.
*/
  public fleets?: Array<gkeonprem_VMwareClusterFleet>;

  // The Anthos clusters on the VMware version for your user cluster.
  public onPremVersion?: string;

  /*
(Output)
Specifies the detailed validation check status
Structure is documented below.
*/
  public statuses?: Array<gkeonprem_VMwareClusterStatus>;

  /*
The VMware User Cluster network configuration.
Structure is documented below.
*/
  public networkConfig?: gkeonprem_VMwareClusterNetworkConfig;

  /*
Annotations on the VMware User Cluster.
This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  /*
AAGConfig specifies whether to spread VMware User Cluster nodes across at
least three physical hosts in the datacenter.
Structure is documented below.
*/
  public antiAffinityGroups?: gkeonprem_VMwareClusterAntiAffinityGroups;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  // The VMware cluster name.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enableControlPlaneV2",
        "Enable control plane V2. Default to false.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The VMware cluster name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkConfig",
        "The VMware User Cluster network configuration.\nStructure is documented below.",
        gkeonprem_VMwareClusterNetworkConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "controlPlaneNode",
        "VMware User Cluster control plane nodes must have either 1 or 3 replicas.\nStructure is documented below.",
        gkeonprem_VMwareClusterControlPlaneNode_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "vmTrackingEnabled",
        "Enable VM tracking.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "authorization",
        "RBAC policy that will be applied and managed by GKE On-Prem.\nStructure is documented below.",
        gkeonprem_VMwareClusterAuthorization_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A human readable description of this VMware User Cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "upgradePolicy",
        "Specifies upgrade policy for the cluster.\nStructure is documented below.",
        gkeonprem_VMwareClusterUpgradePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the resource.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "storage",
        "Storage configuration.\nStructure is documented below.",
        gkeonprem_VMwareClusterStorage_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "vcenters",
        "VmwareVCenterConfig specifies vCenter config for the user cluster.\nInherited from the admin cluster.\nStructure is documented below.",
        gkeonprem_VMwareClusterVcenter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dataplaneV2",
        "VmwareDataplaneV2Config specifies configuration for Dataplane V2.\nStructure is documented below.",
        gkeonprem_VMwareClusterDataplaneV2_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loadBalancer",
        "Load Balancer configuration.\nStructure is documented below.",
        gkeonprem_VMwareClusterLoadBalancer_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "onPremVersion",
        "The Anthos clusters on the VMware version for your user cluster.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "annotations",
        "Annotations on the VMware User Cluster.\nThis field has the same restrictions as Kubernetes annotations.\nThe total size of all keys and values combined is limited to 256k.\nKey can have 2 segments: prefix (optional) and name (required),\nseparated by a slash (/).\nPrefix must be a DNS subdomain.\nName must be 63 characters or less, begin and end with alphanumerics,\nwith dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "autoRepairConfig",
        "Configuration for auto repairing.\nStructure is documented below.",
        gkeonprem_VMwareClusterAutoRepairConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "antiAffinityGroups",
        "AAGConfig specifies whether to spread VMware User Cluster nodes across at\nleast three physical hosts in the datacenter.\nStructure is documented below.",
        gkeonprem_VMwareClusterAntiAffinityGroups_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "adminClusterMembership",
        "The admin cluster this VMware User Cluster belongs to.\nThis is the full resource name of the admin cluster's hub membership.\nIn the future, references to other resource types might be allowed if\nadmin clusters are modeled as their own resources.",
        [],
        true,
        true,
      ),
    ];
  }
}
