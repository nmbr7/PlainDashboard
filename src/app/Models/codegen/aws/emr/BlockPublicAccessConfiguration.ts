import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  emr_BlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange,
  emr_BlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange_GetTypes,
} from "../types/emr_BlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange";

export interface BlockPublicAccessConfigurationArgs {
  /*
Enable or disable EMR Block Public Access.

The following arguments are optional:
*/
  blockPublicSecurityGroupRules?: boolean;

  // Configuration block for defining permitted public security group rule port ranges. Can be defined multiple times per resource. Only valid if `block_public_security_group_rules` is set to `true`.
  permittedPublicSecurityGroupRuleRanges?: Array<emr_BlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange>;
}
export class BlockPublicAccessConfiguration extends DS_Resource {
  /*
Enable or disable EMR Block Public Access.

The following arguments are optional:
*/
  public blockPublicSecurityGroupRules?: boolean;

  // Configuration block for defining permitted public security group rule port ranges. Can be defined multiple times per resource. Only valid if `block_public_security_group_rules` is set to `true`.
  public permittedPublicSecurityGroupRuleRanges?: Array<emr_BlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "blockPublicSecurityGroupRules",
        "Enable or disable EMR Block Public Access.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "permittedPublicSecurityGroupRuleRanges",
        "Configuration block for defining permitted public security group rule port ranges. Can be defined multiple times per resource. Only valid if `block_public_security_group_rules` is set to `true`.",
        () =>
          emr_BlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
