import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  costexplorer_AnomalySubscriptionThresholdExpression,
  costexplorer_AnomalySubscriptionThresholdExpression_GetTypes,
} from "../types/costexplorer_AnomalySubscriptionThresholdExpression";
import {
  costexplorer_AnomalySubscriptionSubscriber,
  costexplorer_AnomalySubscriptionSubscriber_GetTypes,
} from "../types/costexplorer_AnomalySubscriptionSubscriber";

export interface AnomalySubscriptionArgs {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // An Expression object used to specify the anomalies that you want to generate alerts for. See Threshold Expression.
  thresholdExpression?: costexplorer_AnomalySubscriptionThresholdExpression;

  // The unique identifier for the AWS account in which the anomaly subscription ought to be created.
  accountId?: string;

  // The frequency that anomaly reports are sent. Valid Values: `DAILY` | `IMMEDIATE` | `WEEKLY`.
  frequency?: string;

  // A list of cost anomaly monitors.
  monitorArnLists?: Array<string>;

  // The name for the subscription.
  name?: string;

  // A subscriber configuration. Multiple subscribers can be defined.
  subscribers?: Array<costexplorer_AnomalySubscriptionSubscriber>;
}
export class AnomalySubscription extends Resource {
  // ARN of the anomaly subscription.
  public arn?: string;

  // A subscriber configuration. Multiple subscribers can be defined.
  public subscribers?: Array<costexplorer_AnomalySubscriptionSubscriber>;

  // An Expression object used to specify the anomalies that you want to generate alerts for. See Threshold Expression.
  public thresholdExpression?: costexplorer_AnomalySubscriptionThresholdExpression;

  // The unique identifier for the AWS account in which the anomaly subscription ought to be created.
  public accountId?: string;

  // The frequency that anomaly reports are sent. Valid Values: `DAILY` | `IMMEDIATE` | `WEEKLY`.
  public frequency?: string;

  // A list of cost anomaly monitors.
  public monitorArnLists?: Array<string>;

  // The name for the subscription.
  public name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "subscribers",
        "A subscriber configuration. Multiple subscribers can be defined.",
        costexplorer_AnomalySubscriptionSubscriber_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "thresholdExpression",
        "An Expression object used to specify the anomalies that you want to generate alerts for. See Threshold Expression.",
        costexplorer_AnomalySubscriptionThresholdExpression_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "The unique identifier for the AWS account in which the anomaly subscription ought to be created.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "frequency",
        "The frequency that anomaly reports are sent. Valid Values: `DAILY` | `IMMEDIATE` | `WEEKLY`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "monitorArnLists",
        "A list of cost anomaly monitors.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for the subscription.",
        [],
        false,
        true,
      ),
    ];
  }
}
