import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  pipes_PipeSourceParametersSelfManagedKafkaParametersVpc,
  pipes_PipeSourceParametersSelfManagedKafkaParametersVpc_GetTypes,
} from "./pipes_PipeSourceParametersSelfManagedKafkaParametersVpc";
import {
  pipes_PipeSourceParametersSelfManagedKafkaParametersCredentials,
  pipes_PipeSourceParametersSelfManagedKafkaParametersCredentials_GetTypes,
} from "./pipes_PipeSourceParametersSelfManagedKafkaParametersCredentials";

export interface pipes_PipeSourceParametersSelfManagedKafkaParameters {
  // The maximum number of records to include in each batch. Maximum value of 10000.
  batchSize?: number;

  // The ARN of the Secrets Manager secret used for certification.
  serverRootCaCertificate?: string;

  // The name of the topic that the pipe will read from. Maximum length of 249.
  topicName?: string;

  // The position in a stream from which to start reading. Valid values: TRIM_HORIZON, LATEST.
  startingPosition?: string;

  // This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used. Detailed below.
  vpc?: pipes_PipeSourceParametersSelfManagedKafkaParametersVpc;

  // An array of server URLs. Maximum number of 2 items, each of maximum length 300.
  additionalBootstrapServers?: Array<string>;

  // The name of the destination queue to consume. Maximum value of 200.
  consumerGroupId?: string;

  // The credentials needed to access the resource. Detailed below.
  credentials?: pipes_PipeSourceParametersSelfManagedKafkaParametersCredentials;

  // The maximum length of a time to wait for events. Maximum value of 300.
  maximumBatchingWindowInSeconds?: number;
}

export function pipes_PipeSourceParametersSelfManagedKafkaParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "startingPosition",
      "The position in a stream from which to start reading. Valid values: TRIM_HORIZON, LATEST.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vpc",
      "This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used. Detailed below.",
      pipes_PipeSourceParametersSelfManagedKafkaParametersVpc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalBootstrapServers",
      "An array of server URLs. Maximum number of 2 items, each of maximum length 300.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "batchSize",
      "The maximum number of records to include in each batch. Maximum value of 10000.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "topicName",
      "The name of the topic that the pipe will read from. Maximum length of 249.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "consumerGroupId",
      "The name of the destination queue to consume. Maximum value of 200.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "credentials",
      "The credentials needed to access the resource. Detailed below.",
      pipes_PipeSourceParametersSelfManagedKafkaParametersCredentials_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumBatchingWindowInSeconds",
      "The maximum length of a time to wait for events. Maximum value of 300.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serverRootCaCertificate",
      "The ARN of the Secrets Manager secret used for certification.",
      [],
      false,
      false,
    ),
  ];
}
