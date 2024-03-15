import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceReadPoolConfig } from "../types/InstanceReadPoolConfig";
import { InstanceMachineConfig } from "../types/InstanceMachineConfig";
import { InstanceClientConnectionConfig } from "../types/InstanceClientConnectionConfig";
import { InstanceQueryInsightsConfig } from "../types/InstanceQueryInsightsConfig";

export interface InstanceArgs {
  /*
Read pool specific config. If the instance type is READ_POOL, this configuration must be provided.
Structure is documented below.
*/
  ReadPoolConfig?: InstanceReadPoolConfig;

  /*
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  /*
Identifies the alloydb cluster. Must be in the format
'projects/{project}/locations/{location}/clusters/{cluster_id}'
*/
  Cluster?: string;

  // Database flags. Set at instance level. - They are copied from primary instance on read instance creation. - Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.
  DatabaseFlags?: Map<string, string>;

  // User-settable and human-readable display name for the Instance.
  DisplayName?: string;

  /*
The type of the instance. If the instance type is READ_POOL, provide the associated PRIMARY/SECONDARY instance in the
'depends_on' meta-data attribute. If the instance type is SECONDARY, point to the cluster_type of the associated
secondary cluster instead of mentioning SECONDARY. Example: {instance_type =
google_alloydb_cluster.<secondary_cluster_name>.cluster_type} instead of {instance_type = SECONDARY} If the instance
type is SECONDARY, the terraform delete instance operation does not delete the secondary instance but abandons it
instead. Use deletion_policy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete
the secondary cluster as well its associated secondary instance. Users can undo the delete secondary instance action by
importing the deleted secondary instance by calling terraform import. Possible values: ["PRIMARY", "READ_POOL",
"SECONDARY"]
*/
  InstanceType?: string;

  /*
User-defined labels for the alloydb instance.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Configurations for the machines that host the underlying database engine.
Structure is documented below.
*/
  MachineConfig?: InstanceMachineConfig;

  /*
'Availability type of an Instance. Defaults to REGIONAL for both primary and read instances.
Note that primary and read instances can have different availability types.
Only READ_POOL instance supports ZONAL type. Users can't specify the zone for READ_POOL instance.
Zone is automatically chosen from the list of zones in the region specified.
Read pool of size 1 can only have zonal availability. Read pools with node count of 2 or more
can have regional availability (nodes are present in 2 or more zones in a region).'
Possible values are: `AVAILABILITY_TYPE_UNSPECIFIED`, `ZONAL`, `REGIONAL`.
*/
  AvailabilityType?: string;

  /*
Client connection specific configurations.
Structure is documented below.
*/
  ClientConnectionConfig?: InstanceClientConnectionConfig;

  // The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.
  GceZone?: string;

  /*
The ID of the alloydb instance.


- - -
*/
  InstanceId?: string;

  /*
Configuration for query insights.
Structure is documented below.
*/
  QueryInsightsConfig?: InstanceQueryInsightsConfig;
}
export class Instance extends Resource {
  // Database flags. Set at instance level. - They are copied from primary instance on read instance creation. - Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.
  public DatabaseFlags?: Map<string, string>;

  /*
The ID of the alloydb instance.


- - -
*/
  public InstanceId?: string;

  // The IP address for the Instance. This is the connection endpoint for an end-user application.
  public IpAddress?: string;

  /*
Configuration for query insights.
Structure is documented below.
*/
  public QueryInsightsConfig?: InstanceQueryInsightsConfig;

  // The system-generated UID of the resource.
  public Uid?: string;

  // Time the Instance was updated in UTC.
  public UpdateTime?: string;

  /*
Client connection specific configurations.
Structure is documented below.
*/
  public ClientConnectionConfig?: InstanceClientConnectionConfig;

  // The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.
  public GceZone?: string;

  /*
User-defined labels for the alloydb instance.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The current state of the alloydb instance.
  public State?: string;

  /*
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  /*
'Availability type of an Instance. Defaults to REGIONAL for both primary and read instances.
Note that primary and read instances can have different availability types.
Only READ_POOL instance supports ZONAL type. Users can't specify the zone for READ_POOL instance.
Zone is automatically chosen from the list of zones in the region specified.
Read pool of size 1 can only have zonal availability. Read pools with node count of 2 or more
can have regional availability (nodes are present in 2 or more zones in a region).'
Possible values are: `AVAILABILITY_TYPE_UNSPECIFIED`, `ZONAL`, `REGIONAL`.
*/
  public AvailabilityType?: string;

  /*
Identifies the alloydb cluster. Must be in the format
'projects/{project}/locations/{location}/clusters/{cluster_id}'
*/
  public Cluster?: string;

  // Time the Instance was created in UTC.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Read pool specific config. If the instance type is READ_POOL, this configuration must be provided.
Structure is documented below.
*/
  public ReadPoolConfig?: InstanceReadPoolConfig;

  // Set to true if the current state of Instance does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance.
  public Reconciling?: boolean;

  // User-settable and human-readable display name for the Instance.
  public DisplayName?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  /*
The type of the instance. If the instance type is READ_POOL, provide the associated PRIMARY/SECONDARY instance in the
'depends_on' meta-data attribute. If the instance type is SECONDARY, point to the cluster_type of the associated
secondary cluster instead of mentioning SECONDARY. Example: {instance_type =
google_alloydb_cluster.<secondary_cluster_name>.cluster_type} instead of {instance_type = SECONDARY} If the instance
type is SECONDARY, the terraform delete instance operation does not delete the secondary instance but abandons it
instead. Use deletion_policy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete
the secondary cluster as well its associated secondary instance. Users can undo the delete secondary instance action by
importing the deleted secondary instance by calling terraform import. Possible values: ["PRIMARY", "READ_POOL",
"SECONDARY"]
*/
  public InstanceType?: string;

  /*
Configurations for the machines that host the underlying database engine.
Structure is documented below.
*/
  public MachineConfig?: InstanceMachineConfig;

  // The name of the instance resource.
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "User-defined labels for the alloydb instance.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GceZone",
        "The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.",
      ),
      new DynamicUIProps(
        InputType.String,
        "QueryInsightsConfig",
        "Configuration for query insights.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Cluster",
        "Identifies the alloydb cluster. Must be in the format\n'projects/{project}/locations/{location}/clusters/{cluster_id}'",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User-settable and human-readable display name for the Instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceType",
        'The type of the instance. If the instance type is READ_POOL, provide the associated PRIMARY/SECONDARY instance in the\n\'depends_on\' meta-data attribute. If the instance type is SECONDARY, point to the cluster_type of the associated\nsecondary cluster instead of mentioning SECONDARY. Example: {instance_type =\ngoogle_alloydb_cluster.<secondary_cluster_name>.cluster_type} instead of {instance_type = SECONDARY} If the instance\ntype is SECONDARY, the terraform delete instance operation does not delete the secondary instance but abandons it\ninstead. Use deletion_policy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete\nthe secondary cluster as well its associated secondary instance. Users can undo the delete secondary instance action by\nimporting the deleted secondary instance by calling terraform import. Possible values: ["PRIMARY", "READ_POOL",\n"SECONDARY"]',
      ),
      new DynamicUIProps(
        InputType.String,
        "MachineConfig",
        "Configurations for the machines that host the underlying database engine.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AvailabilityType",
        "'Availability type of an Instance. Defaults to REGIONAL for both primary and read instances.\nNote that primary and read instances can have different availability types.\nOnly READ_POOL instance supports ZONAL type. Users can't specify the zone for READ_POOL instance.\nZone is automatically chosen from the list of zones in the region specified.\nRead pool of size 1 can only have zonal availability. Read pools with node count of 2 or more\ncan have regional availability (nodes are present in 2 or more zones in a region).'\nPossible values are: `AVAILABILITY_TYPE_UNSPECIFIED`, `ZONAL`, `REGIONAL`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ClientConnectionConfig",
        "Client connection specific configurations.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceId",
        "The ID of the alloydb instance.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "ReadPoolConfig",
        "Read pool specific config. If the instance type is READ_POOL, this configuration must be provided.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DatabaseFlags",
        "Database flags. Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.",
      ),
    ];
  }
}
