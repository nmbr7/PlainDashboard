import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_ThemePermission {
  // List of IAM actions to grant or revoke permissions on.
  actions?: Array<string>;

  // ARN of the principal. See the [ResourcePermission documentation](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ResourcePermission.html) for the applicable ARN values.
  principal?: string;
}

export function quicksight_ThemePermission_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "principal",
      "ARN of the principal. See the [ResourcePermission documentation](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ResourcePermission.html) for the applicable ARN values.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "List of IAM actions to grant or revoke permissions on.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
