import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appconfig_EventIntegrationEventFilter,
  appconfig_EventIntegrationEventFilter_GetTypes,
} from "../types/appconfig_EventIntegrationEventFilter";

export interface EventIntegrationArgs {
  // EventBridge bus.
  eventbridgeBus?: string;

  // Name of the Event Integration.
  name?: string;

  // Tags to apply to the Event Integration. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Description of the Event Integration.
  description?: string;

  // Block that defines the configuration information for the event filter. The Event Filter block is documented below.
  eventFilter?: appconfig_EventIntegrationEventFilter;
}
export class EventIntegration extends Resource {
  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the Event Integration.
  public arn?: string;

  // Description of the Event Integration.
  public description?: string;

  // Block that defines the configuration information for the event filter. The Event Filter block is documented below.
  public eventFilter?: appconfig_EventIntegrationEventFilter;

  // EventBridge bus.
  public eventbridgeBus?: string;

  // Name of the Event Integration.
  public name?: string;

  // Tags to apply to the Event Integration. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "eventbridgeBus",
        "EventBridge bus.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the Event Integration.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the Event Integration. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the Event Integration.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "eventFilter",
        "Block that defines the configuration information for the event filter. The Event Filter block is documented below.",
        appconfig_EventIntegrationEventFilter_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
