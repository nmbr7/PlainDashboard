import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sagemaker_FeatureGroupFeatureDefinition {
  // The name of a feature. `feature_name` cannot be any of the following: `is_deleted`, `write_time`, `api_invocation_time`.
  featureName?: string;

  // The value type of a feature. Valid values are `Integral`, `Fractional`, or `String`.
  featureType?: string;
}

export function sagemaker_FeatureGroupFeatureDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "featureName",
      "The name of a feature. `feature_name` cannot be any of the following: `is_deleted`, `write_time`, `api_invocation_time`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "featureType",
      "The value type of a feature. Valid values are `Integral`, `Fractional`, or `String`.",
      [],
      false,
      true,
    ),
  ];
}
