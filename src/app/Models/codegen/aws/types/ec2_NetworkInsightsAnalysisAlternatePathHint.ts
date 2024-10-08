import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_NetworkInsightsAnalysisAlternatePathHint {
  // The Amazon Resource Name (ARN) of the component.
  componentArn?: string;

  // The ID of the component.
  componentId?: string;
}

export function ec2_NetworkInsightsAnalysisAlternatePathHint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "componentArn",
      "The Amazon Resource Name (ARN) of the component.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "componentId",
      "The ID of the component.",
      () => [],
      false,
      false,
    ),
  ];
}
