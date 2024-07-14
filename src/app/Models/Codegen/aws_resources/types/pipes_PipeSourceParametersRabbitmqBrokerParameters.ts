import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  pipes_PipeSourceParametersRabbitmqBrokerParametersCredentials,
  pipes_PipeSourceParametersRabbitmqBrokerParametersCredentials_GetTypes,
} from "./pipes_PipeSourceParametersRabbitmqBrokerParametersCredentials";

export interface pipes_PipeSourceParametersRabbitmqBrokerParameters {
  // The credentials needed to access the resource. Detailed below.
  credentials?: pipes_PipeSourceParametersRabbitmqBrokerParametersCredentials;

  // The maximum length of a time to wait for events. Maximum value of 300.
  maximumBatchingWindowInSeconds?: number;

  // The name of the destination queue to consume. Maximum length of 1000.
  queueName?: string;

  // The name of the virtual host associated with the source broker. Maximum length of 200.
  virtualHost?: string;

  // The maximum number of records to include in each batch. Maximum value of 10000.
  batchSize?: number;
}

export function pipes_PipeSourceParametersRabbitmqBrokerParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "batchSize",
      "The maximum number of records to include in each batch. Maximum value of 10000.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "credentials",
      "The credentials needed to access the resource. Detailed below.",
      pipes_PipeSourceParametersRabbitmqBrokerParametersCredentials_GetTypes(),
      true,
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
      "queueName",
      "The name of the destination queue to consume. Maximum length of 1000.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "virtualHost",
      "The name of the virtual host associated with the source broker. Maximum length of 200.",
      [],
      false,
      true,
    ),
  ];
}
