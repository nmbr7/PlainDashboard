import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface OrganizationManagedRuleArgs {
  // The maximum frequency with which AWS Config runs evaluations for a rule, if the rule is triggered at a periodic frequency. Defaults to `TwentyFour_Hours` for periodic frequency triggered rules. Valid values: `One_Hour`, `Three_Hours`, `Six_Hours`, `Twelve_Hours`, or `TwentyFour_Hours`.
  maximumExecutionFrequency?: string;

  // List of types of AWS resources to evaluate
  resourceTypesScopes?: Array<string>;

  // Identifier of an available AWS Config Managed Rule to call. For available values, see the [List of AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html) documentation
  ruleIdentifier?: string;

  // Tag key of AWS resources to evaluate
  tagKeyScope?: string;

  // Description of the rule
  description?: string;

  // List of AWS account identifiers to exclude from the rule
  excludedAccounts?: Array<string>;

  // A string in JSON format that is passed to the AWS Config Rule Lambda Function
  inputParameters?: string;

  // The name of the rule
  name?: string;

  // Identifier of the AWS resource to evaluate
  resourceIdScope?: string;

  // Tag value of AWS resources to evaluate
  tagValueScope?: string;
}
export class OrganizationManagedRule extends Resource {
  // The maximum frequency with which AWS Config runs evaluations for a rule, if the rule is triggered at a periodic frequency. Defaults to `TwentyFour_Hours` for periodic frequency triggered rules. Valid values: `One_Hour`, `Three_Hours`, `Six_Hours`, `Twelve_Hours`, or `TwentyFour_Hours`.
  public maximumExecutionFrequency?: string;

  // The name of the rule
  public name?: string;

  // Tag key of AWS resources to evaluate
  public tagKeyScope?: string;

  // Amazon Resource Name (ARN) of the rule
  public arn?: string;

  // Description of the rule
  public description?: string;

  // List of AWS account identifiers to exclude from the rule
  public excludedAccounts?: Array<string>;

  // A string in JSON format that is passed to the AWS Config Rule Lambda Function
  public inputParameters?: string;

  // Identifier of the AWS resource to evaluate
  public resourceIdScope?: string;

  // List of types of AWS resources to evaluate
  public resourceTypesScopes?: Array<string>;

  // Identifier of an available AWS Config Managed Rule to call. For available values, see the [List of AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html) documentation
  public ruleIdentifier?: string;

  // Tag value of AWS resources to evaluate
  public tagValueScope?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "maximumExecutionFrequency",
        "The maximum frequency with which AWS Config runs evaluations for a rule, if the rule is triggered at a periodic frequency. Defaults to `TwentyFour_Hours` for periodic frequency triggered rules. Valid values: `One_Hour`, `Three_Hours`, `Six_Hours`, `Twelve_Hours`, or `TwentyFour_Hours`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ruleIdentifier",
        "Identifier of an available AWS Config Managed Rule to call. For available values, see the [List of AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html) documentation",
        [],
        true,
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
        InputType.String,
        "tagValueScope",
        "Tag value of AWS resources to evaluate",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "resourceTypesScopes",
        "List of types of AWS resources to evaluate",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tagKeyScope",
        "Tag key of AWS resources to evaluate",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "excludedAccounts",
        "List of AWS account identifiers to exclude from the rule",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "inputParameters",
        "A string in JSON format that is passed to the AWS Config Rule Lambda Function",
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
        InputType.String,
        "resourceIdScope",
        "Identifier of the AWS resource to evaluate",
        [],
        false,
        false,
      ),
    ];
  }
}
