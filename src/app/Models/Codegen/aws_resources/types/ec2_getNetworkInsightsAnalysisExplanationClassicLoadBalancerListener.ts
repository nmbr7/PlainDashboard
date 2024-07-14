import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getNetworkInsightsAnalysisExplanationClassicLoadBalancerListener {
  //
  instancePort?: number;

  //
  loadBalancerPort?: number;
}

export function ec2_getNetworkInsightsAnalysisExplanationClassicLoadBalancerListener_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "instancePort", "", [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "loadBalancerPort",
      "",
      [],
      true,
      false,
    ),
  ];
}
