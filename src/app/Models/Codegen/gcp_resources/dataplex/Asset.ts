import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataplex_AssetDiscoverySpec,
  dataplex_AssetDiscoverySpec_GetTypes,
} from "../types/dataplex_AssetDiscoverySpec";
import {
  dataplex_AssetResourceSpec,
  dataplex_AssetResourceSpec_GetTypes,
} from "../types/dataplex_AssetResourceSpec";
import {
  dataplex_AssetResourceStatus,
  dataplex_AssetResourceStatus_GetTypes,
} from "../types/dataplex_AssetResourceStatus";
import {
  dataplex_AssetDiscoveryStatus,
  dataplex_AssetDiscoveryStatus_GetTypes,
} from "../types/dataplex_AssetDiscoveryStatus";
import {
  dataplex_AssetSecurityStatus,
  dataplex_AssetSecurityStatus_GetTypes,
} from "../types/dataplex_AssetSecurityStatus";

export interface AssetArgs {
  // Required. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone.
  discoverySpec?: dataplex_AssetDiscoverySpec;

  // The lake for the resource
  lake?: string;

  // The project for the resource
  project?: string;

  // Optional. Description of the asset.
  description?: string;

  // Optional. User friendly display name.
  displayName?: string;

  /*
Optional. User defined labels for the asset.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The location for the resource
  location?: string;

  // The name of the asset.
  name?: string;

  // Required. Immutable. Specification of the resource that is referenced by this asset.
  resourceSpec?: dataplex_AssetResourceSpec;

  // The zone for the resource
  dataplexZone?: string;
}
export class Asset extends Resource {
  // The lake for the resource
  public lake?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  // Output only. Status of the resource referenced by this asset.
  public resourceStatuses?: Array<dataplex_AssetResourceStatus>;

  // Output only. Current state of the asset. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  public state?: string;

  // The zone for the resource
  public dataplexZone?: string;

  // Required. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone.
  public discoverySpec?: dataplex_AssetDiscoverySpec;

  // Output only. Status of the discovery feature applied to data referenced by this asset.
  public discoveryStatuses?: Array<dataplex_AssetDiscoveryStatus>;

  // Optional. User friendly display name.
  public displayName?: string;

  // Output only. System generated globally unique ID for the asset. This ID will be different if the asset is deleted and re-created with the same name.
  public uid?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Optional. User defined labels for the asset.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The name of the asset.
  public name?: string;

  // Output only. Status of the security policy applied to resource referenced by this asset.
  public securityStatuses?: Array<dataplex_AssetSecurityStatus>;

  // Output only. The time when the asset was created.
  public createTime?: string;

  // The location for the resource
  public location?: string;

  // Required. Immutable. Specification of the resource that is referenced by this asset.
  public resourceSpec?: dataplex_AssetResourceSpec;

  // Optional. Description of the asset.
  public description?: string;

  // The project for the resource
  public project?: string;

  // Output only. The time when the asset was last updated.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the asset.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataplexZone",
        "The zone for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "discoverySpec",
        "Required. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone.",
        dataplex_AssetDiscoverySpec_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Optional. Description of the asset.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Optional. User friendly display name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Optional. User defined labels for the asset.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "lake",
        "The lake for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "resourceSpec",
        "Required. Immutable. Specification of the resource that is referenced by this asset.",
        dataplex_AssetResourceSpec_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
