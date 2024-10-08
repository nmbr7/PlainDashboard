import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudasset_OrganizationFeedFeedOutputConfig,
  cloudasset_OrganizationFeedFeedOutputConfig_GetTypes,
} from "../types/cloudasset_OrganizationFeedFeedOutputConfig";
import {
  cloudasset_OrganizationFeedCondition,
  cloudasset_OrganizationFeedCondition_GetTypes,
} from "../types/cloudasset_OrganizationFeedCondition";

export interface OrganizationFeedArgs {
  // This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.
  feedId?: string;

  /*
Output configuration for asset feed destination.
Structure is documented below.
*/
  feedOutputConfig?: cloudasset_OrganizationFeedFeedOutputConfig;

  // The organization this feed should be created in.
  orgId?: string;

  /*
A list of the full names of the assets to receive updates. You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.
*/
  assetNames?: Array<string>;

  /*
A list of types of the assets to receive updates. You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.
*/
  assetTypes?: Array<string>;

  /*
The project whose identity will be used when sending messages to the
destination pubsub topic. It also specifies the project for API
enablement check, quota, and billing.
*/
  billingProject?: string;

  /*
A condition which determines whether an asset update should be published. If specified, an asset
will be returned only when the expression evaluates to true. When set, expression field
must be a valid CEL expression on a TemporalAsset with name temporal_asset. Example: a Feed with
expression "temporal_asset.deleted == true" will only publish Asset deletions. Other fields of
condition are optional.
Structure is documented below.
*/
  condition?: cloudasset_OrganizationFeedCondition;

  /*
Asset content type. If not specified, no content but the asset name and type will be returned.
Possible values are: `CONTENT_TYPE_UNSPECIFIED`, `RESOURCE`, `IAM_POLICY`, `ORG_POLICY`, `OS_INVENTORY`, `ACCESS_POLICY`.
*/
  contentType?: string;
}
export class OrganizationFeed extends DS_Resource {
  // The organization this feed should be created in.
  public orgId?: string;

  /*
A list of the full names of the assets to receive updates. You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.
*/
  public assetNames?: Array<string>;

  /*
Asset content type. If not specified, no content but the asset name and type will be returned.
Possible values are: `CONTENT_TYPE_UNSPECIFIED`, `RESOURCE`, `IAM_POLICY`, `ORG_POLICY`, `OS_INVENTORY`, `ACCESS_POLICY`.
*/
  public contentType?: string;

  // This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.
  public feedId?: string;

  /*
Output configuration for asset feed destination.
Structure is documented below.
*/
  public feedOutputConfig?: cloudasset_OrganizationFeedFeedOutputConfig;

  // The format will be organizations/{organization_number}/feeds/{client-assigned_feed_identifier}.
  public name?: string;

  /*
A list of types of the assets to receive updates. You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.
*/
  public assetTypes?: Array<string>;

  /*
The project whose identity will be used when sending messages to the
destination pubsub topic. It also specifies the project for API
enablement check, quota, and billing.
*/
  public billingProject?: string;

  /*
A condition which determines whether an asset update should be published. If specified, an asset
will be returned only when the expression evaluates to true. When set, expression field
must be a valid CEL expression on a TemporalAsset with name temporal_asset. Example: a Feed with
expression "temporal_asset.deleted == true" will only publish Asset deletions. Other fields of
condition are optional.
Structure is documented below.
*/
  public condition?: cloudasset_OrganizationFeedCondition;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "contentType",
        "Asset content type. If not specified, no content but the asset name and type will be returned.\nPossible values are: `CONTENT_TYPE_UNSPECIFIED`, `RESOURCE`, `IAM_POLICY`, `ORG_POLICY`, `OS_INVENTORY`, `ACCESS_POLICY`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "feedId",
        "This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "feedOutputConfig",
        "Output configuration for asset feed destination.\nStructure is documented below.",
        () => cloudasset_OrganizationFeedFeedOutputConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "orgId",
        "The organization this feed should be created in.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "assetNames",
        "A list of the full names of the assets to receive updates. You must specify either or both of\nassetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are\nexported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.\nSee https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "assetTypes",
        'A list of types of the assets to receive updates. You must specify either or both of assetNames\nand assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to\nthe feed. For example: "compute.googleapis.com/Disk"\nSee https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all\nsupported asset types.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "billingProject",
        "The project whose identity will be used when sending messages to the\ndestination pubsub topic. It also specifies the project for API\nenablement check, quota, and billing.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        'A condition which determines whether an asset update should be published. If specified, an asset\nwill be returned only when the expression evaluates to true. When set, expression field\nmust be a valid CEL expression on a TemporalAsset with name temporal_asset. Example: a Feed with\nexpression "temporal_asset.deleted == true" will only publish Asset deletions. Other fields of\ncondition are optional.\nStructure is documented below.',
        () => cloudasset_OrganizationFeedCondition_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
