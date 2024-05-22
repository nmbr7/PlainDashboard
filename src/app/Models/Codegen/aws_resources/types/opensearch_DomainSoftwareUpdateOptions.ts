import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface opensearch_DomainSoftwareUpdateOptions {
  // Whether automatic service software updates are enabled for the domain. Defaults to `false`.
  autoSoftwareUpdateEnabled?: boolean;
}

export function opensearch_DomainSoftwareUpdateOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "autoSoftwareUpdateEnabled",
      "Whether automatic service software updates are enabled for the domain. Defaults to `false`.",
      [],
      false,
      false,
    ),
  ];
}
