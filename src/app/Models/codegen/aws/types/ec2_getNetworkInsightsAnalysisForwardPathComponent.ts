import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentAttachedTo,
  ec2_getNetworkInsightsAnalysisForwardPathComponentAttachedTo_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentAttachedTo";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeader,
  ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeader_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeader";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetail,
  ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetail_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetail";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentRouteTableRoute,
  ec2_getNetworkInsightsAnalysisForwardPathComponentRouteTableRoute_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentRouteTableRoute";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentVpc,
  ec2_getNetworkInsightsAnalysisForwardPathComponentVpc_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentVpc";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentAclRule,
  ec2_getNetworkInsightsAnalysisForwardPathComponentAclRule_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentAclRule";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRule,
  ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRule_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRule";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentSourceVpc,
  ec2_getNetworkInsightsAnalysisForwardPathComponentSourceVpc_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentSourceVpc";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentDestinationVpc,
  ec2_getNetworkInsightsAnalysisForwardPathComponentDestinationVpc_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentDestinationVpc";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentSubnet,
  ec2_getNetworkInsightsAnalysisForwardPathComponentSubnet_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentSubnet";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute,
  ec2_getNetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentTransitGateway,
  ec2_getNetworkInsightsAnalysisForwardPathComponentTransitGateway_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentTransitGateway";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeader,
  ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeader_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeader";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentComponent,
  ec2_getNetworkInsightsAnalysisForwardPathComponentComponent_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentComponent";

export interface ec2_getNetworkInsightsAnalysisForwardPathComponent {
  //
  routeTableRoutes?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentRouteTableRoute>;

  //
  vpcs?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentVpc>;

  //
  aclRules?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentAclRule>;

  //
  attachedTos?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentAttachedTo>;

  //
  outboundHeaders?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeader>;

  //
  sequenceNumber?: number;

  //
  transitGateways?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentTransitGateway>;

  //
  additionalDetails?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetail>;

  //
  inboundHeaders?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeader>;

  //
  securityGroupRules?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRule>;

  //
  sourceVpcs?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentSourceVpc>;

  //
  components?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentComponent>;

  //
  destinationVpcs?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentDestinationVpc>;

  //
  subnets?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentSubnet>;

  //
  transitGatewayRouteTableRoutes?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute>;
}

export function ec2_getNetworkInsightsAnalysisForwardPathComponent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "outboundHeaders",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "vpcs",
      "",
      () => ec2_getNetworkInsightsAnalysisForwardPathComponentVpc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "aclRules",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisForwardPathComponentAclRule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inboundHeaders",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourceVpcs",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisForwardPathComponentSourceVpc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnets",
      "",
      () => ec2_getNetworkInsightsAnalysisForwardPathComponentSubnet_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "routeTableRoutes",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisForwardPathComponentRouteTableRoute_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalDetails",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetail_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupRules",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisForwardPathComponentSecurityGroupRule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destinationVpcs",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisForwardPathComponentDestinationVpc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "transitGatewayRouteTableRoutes",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "attachedTos",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisForwardPathComponentAttachedTo_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "transitGateways",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisForwardPathComponentTransitGateway_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sequenceNumber",
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
        ec2_getNetworkInsightsAnalysisForwardPathComponentComponent_GetTypes(),
      true,
      false,
    ),
  ];
}
