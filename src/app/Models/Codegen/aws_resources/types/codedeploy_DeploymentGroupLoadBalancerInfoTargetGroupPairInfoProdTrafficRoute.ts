import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute {
  // List of Amazon Resource Names (ARNs) of the load balancer listeners. Must contain exactly one listener ARN.
  listenerArns?: Array<string>;
}

export function codedeploy_DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "listenerArns",
      "List of Amazon Resource Names (ARNs) of the load balancer listeners. Must contain exactly one listener ARN.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
