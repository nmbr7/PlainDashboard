import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface eks_FargateProfileSelector {
  // Key-value map of Kubernetes labels for selection.
  labels?: Map<string, string>;

  /*
Kubernetes namespace for selection.

The following arguments are optional:
*/
  namespace?: string;
}

export function eks_FargateProfileSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "Key-value map of Kubernetes labels for selection.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "Kubernetes namespace for selection.\n\nThe following arguments are optional:",
      [],
      true,
      true,
    ),
  ];
}
