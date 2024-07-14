import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface DiscovererArgs {
  // The description of the discoverer. Maximum of 256 characters.
  description?: string;

  // The ARN of the event bus to discover event schemas on.
  sourceArn?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Discoverer extends Resource {
  // The Amazon Resource Name (ARN) of the discoverer.
  public arn?: string;

  // The description of the discoverer. Maximum of 256 characters.
  public description?: string;

  // The ARN of the event bus to discover event schemas on.
  public sourceArn?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the discoverer. Maximum of 256 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceArn",
        "The ARN of the event bus to discover event schemas on.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
