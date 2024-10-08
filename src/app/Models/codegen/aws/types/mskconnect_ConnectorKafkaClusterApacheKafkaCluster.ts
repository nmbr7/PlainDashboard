import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  mskconnect_ConnectorKafkaClusterApacheKafkaClusterVpc,
  mskconnect_ConnectorKafkaClusterApacheKafkaClusterVpc_GetTypes,
} from "./mskconnect_ConnectorKafkaClusterApacheKafkaClusterVpc";

export interface mskconnect_ConnectorKafkaClusterApacheKafkaCluster {
  // The bootstrap servers of the cluster.
  bootstrapServers?: string;

  // Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster. See `vpc` Block for details.
  vpc?: mskconnect_ConnectorKafkaClusterApacheKafkaClusterVpc;
}

export function mskconnect_ConnectorKafkaClusterApacheKafkaCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bootstrapServers",
      "The bootstrap servers of the cluster.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vpc",
      "Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster. See `vpc` Block for details.",
      () => mskconnect_ConnectorKafkaClusterApacheKafkaClusterVpc_GetTypes(),
      true,
      true,
    ),
  ];
}
