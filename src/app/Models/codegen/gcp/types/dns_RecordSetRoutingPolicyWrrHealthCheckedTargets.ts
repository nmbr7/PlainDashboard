import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dns_RecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancer,
  dns_RecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancer_GetTypes,
} from "./dns_RecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancer";

export interface dns_RecordSetRoutingPolicyWrrHealthCheckedTargets {
  /*
The list of internal load balancers to health check.
Structure is document below.
*/
  internalLoadBalancers?: Array<dns_RecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancer>;
}

export function dns_RecordSetRoutingPolicyWrrHealthCheckedTargets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "internalLoadBalancers",
      "The list of internal load balancers to health check.\nStructure is document below.",
      () =>
        dns_RecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancer_GetTypes(),
      true,
      false,
    ),
  ];
}
