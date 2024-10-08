import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface RedriveAllowPolicyArgs {
  // The URL of the SQS Queue to which to attach the policy
  queueUrl?: string;

  // The JSON redrive allow policy for the SQS queue. Learn more in the [Amazon SQS dead-letter queues documentation](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html).
  redriveAllowPolicy?: string;
}
export class RedriveAllowPolicy extends DS_Resource {
  // The URL of the SQS Queue to which to attach the policy
  public queueUrl?: string;

  // The JSON redrive allow policy for the SQS queue. Learn more in the [Amazon SQS dead-letter queues documentation](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html).
  public redriveAllowPolicy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "queueUrl",
        "The URL of the SQS Queue to which to attach the policy",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "redriveAllowPolicy",
        "The JSON redrive allow policy for the SQS queue. Learn more in the [Amazon SQS dead-letter queues documentation](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html).",
        () => [],
        true,
        false,
      ),
    ];
  }
}
