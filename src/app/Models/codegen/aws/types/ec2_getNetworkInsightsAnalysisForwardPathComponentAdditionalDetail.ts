import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent,
  ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent";

export interface ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetail {
  //
  additionalDetailType?: string;

  //
  components?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent>;
}

export function ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetail_GetTypes(): DynamicUIProps[] {
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
        ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent_GetTypes(),
      true,
      false,
    ),
  ];
}
