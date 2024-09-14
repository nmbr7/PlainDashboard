import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_NetworkInsightsAnalysisReturnPathComponentVpc {
  //
  name?: string;

  // ARN of the Network Insights Analysis.
  arn?: string;

  // ID of the Network Insights Analysis.
  id?: string;
}

export function ec2_NetworkInsightsAnalysisReturnPathComponentVpc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "name", "", () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the Network Insights Analysis.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "ID of the Network Insights Analysis.",
      () => [],
      false,
      false,
    ),
  ];
}