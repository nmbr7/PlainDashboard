import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent,
  ec2_getNetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent";

export interface ec2_getNetworkInsightsAnalysisReturnPathComponentAdditionalDetail {
  //
  additionalDetailType?: string;

  //
  components?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent>;
}

export function ec2_getNetworkInsightsAnalysisReturnPathComponentAdditionalDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "additionalDetailType",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "components",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent_GetTypes(),
      true,
      false,
    ),
  ];
}
