import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface EventSubscriptionArgs {
  // The type of source that will be generating the events. Valid options are `db-instance`, `db-cluster`, `db-parameter-group`, `db-security-group`,` db-cluster-snapshot`. If not set, all sources will be subscribed to.
  sourceType?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A boolean flag to enable/disable the subscription. Defaults to true.
  enabled?: boolean;

  // A list of event categories for a SourceType that you want to subscribe to. See https://docs.aws.amazon.com/documentdb/latest/developerguide/API_Event.html or run `aws docdb describe-event-categories`.
  eventCategories?: Array<string>;

  // The name of the DocumentDB event subscription. By default generated by this provider.
  name?: string;

  // The name of the DocumentDB event subscription. Conflicts with `name`.
  namePrefix?: string;

  //
  snsTopicArn?: string;

  // A list of identifiers of the event sources for which events will be returned. If not specified, then all sources are included in the response. If specified, a source_type must also be specified.
  sourceIds?: Array<string>;
}
export class EventSubscription extends DS_Resource {
  // The name of the DocumentDB event subscription. Conflicts with `name`.
  public namePrefix?: string;

  //
  public snsTopicArn?: string;

  // A list of identifiers of the event sources for which events will be returned. If not specified, then all sources are included in the response. If specified, a source_type must also be specified.
  public sourceIds?: Array<string>;

  // The type of source that will be generating the events. Valid options are `db-instance`, `db-cluster`, `db-parameter-group`, `db-security-group`,` db-cluster-snapshot`. If not set, all sources will be subscribed to.
  public sourceType?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The Amazon Resource Name of the DocumentDB event notification subscription
  public arn?: string;

  // The AWS customer account associated with the DocumentDB event notification subscription
  public customerAwsId?: string;

  // A boolean flag to enable/disable the subscription. Defaults to true.
  public enabled?: boolean;

  // A list of event categories for a SourceType that you want to subscribe to. See https://docs.aws.amazon.com/documentdb/latest/developerguide/API_Event.html or run `aws docdb describe-event-categories`.
  public eventCategories?: Array<string>;

  // The name of the DocumentDB event subscription. By default generated by this provider.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "sourceIds",
        "A list of identifiers of the event sources for which events will be returned. If not specified, then all sources are included in the response. If specified, a source_type must also be specified.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceType",
        "The type of source that will be generating the events. Valid options are `db-instance`, `db-cluster`, `db-parameter-group`, `db-security-group`,` db-cluster-snapshot`. If not set, all sources will be subscribed to.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "A boolean flag to enable/disable the subscription. Defaults to true.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "eventCategories",
        "A list of event categories for a SourceType that you want to subscribe to. See https://docs.aws.amazon.com/documentdb/latest/developerguide/API_Event.html or run `aws docdb describe-event-categories`.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the DocumentDB event subscription. By default generated by this provider.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "The name of the DocumentDB event subscription. Conflicts with `name`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "snsTopicArn",
        "",
        () => [],
        true,
        false,
      ),
    ];
  }
}
