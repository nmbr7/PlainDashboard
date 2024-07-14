import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudbuild_TriggerRepositoryEventConfigPullRequest,
  cloudbuild_TriggerRepositoryEventConfigPullRequest_GetTypes,
} from "./cloudbuild_TriggerRepositoryEventConfigPullRequest";
import {
  cloudbuild_TriggerRepositoryEventConfigPush,
  cloudbuild_TriggerRepositoryEventConfigPush_GetTypes,
} from "./cloudbuild_TriggerRepositoryEventConfigPush";

export interface cloudbuild_TriggerRepositoryEventConfig {
  /*
Contains filter properties for matching Pull Requests.
Structure is documented below.
*/
  pullRequest?: cloudbuild_TriggerRepositoryEventConfigPullRequest;

  /*
Contains filter properties for matching git pushes.
Structure is documented below.
*/
  push?: cloudbuild_TriggerRepositoryEventConfigPush;

  // The resource name of the Repo API resource.
  repository?: string;
}

export function cloudbuild_TriggerRepositoryEventConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "pullRequest",
      "Contains filter properties for matching Pull Requests.\nStructure is documented below.",
      cloudbuild_TriggerRepositoryEventConfigPullRequest_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "push",
      "Contains filter properties for matching git pushes.\nStructure is documented below.",
      cloudbuild_TriggerRepositoryEventConfigPush_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repository",
      "The resource name of the Repo API resource.",
      [],
      false,
      false,
    ),
  ];
}
