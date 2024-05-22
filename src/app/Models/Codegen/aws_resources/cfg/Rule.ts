import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cfg_RuleEvaluationMode,
  cfg_RuleEvaluationMode_GetTypes,
} from "../types/cfg_RuleEvaluationMode";
import { cfg_RuleScope, cfg_RuleScope_GetTypes } from "../types/cfg_RuleScope";
import {
  cfg_RuleSource,
  cfg_RuleSource_GetTypes,
} from "../types/cfg_RuleSource";

export interface RuleArgs {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Description of the rule
  description?: string;

  // The modes the Config rule can be evaluated in. See Evaluation Mode for more details.
  evaluationModes?: Array<cfg_RuleEvaluationMode>;

  // A string in JSON format that is passed to the AWS Config rule Lambda function.
  inputParameters?: string;

  // The maximum frequency with which AWS Config runs evaluations for a rule.
  maximumExecutionFrequency?: string;

  // The name of the rule
  name?: string;

  // Scope defines which resources can trigger an evaluation for the rule. See Scope Below.
  scope?: cfg_RuleScope;

  // Source specifies the rule owner, the rule identifier, and the notifications that cause the function to evaluate your AWS resources. See Source Below.
  source?: cfg_RuleSource;
}
export class Rule extends Resource {
  // The ID of the config rule
  public ruleId?: string;

  // Scope defines which resources can trigger an evaluation for the rule. See Scope Below.
  public scope?: cfg_RuleScope;

  // The modes the Config rule can be evaluated in. See Evaluation Mode for more details.
  public evaluationModes?: Array<cfg_RuleEvaluationMode>;

  // A string in JSON format that is passed to the AWS Config rule Lambda function.
  public inputParameters?: string;

  // The maximum frequency with which AWS Config runs evaluations for a rule.
  public maximumExecutionFrequency?: string;

  // The name of the rule
  public name?: string;

  // Source specifies the rule owner, the rule identifier, and the notifications that cause the function to evaluate your AWS resources. See Source Below.
  public source?: cfg_RuleSource;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The ARN of the config rule
  public arn?: string;

  // Description of the rule
  public description?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the rule",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "evaluationModes",
        "The modes the Config rule can be evaluated in. See Evaluation Mode for more details.",
        cfg_RuleEvaluationMode_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "inputParameters",
        "A string in JSON format that is passed to the AWS Config rule Lambda function.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "maximumExecutionFrequency",
        "The maximum frequency with which AWS Config runs evaluations for a rule.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the rule",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "scope",
        "Scope defines which resources can trigger an evaluation for the rule. See Scope Below.",
        cfg_RuleScope_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "source",
        "Source specifies the rule owner, the rule identifier, and the notifications that cause the function to evaluate your AWS resources. See Source Below.",
        cfg_RuleSource_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
