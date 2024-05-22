import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ecr_ReplicationConfigurationReplicationConfigurationRule,
  ecr_ReplicationConfigurationReplicationConfigurationRule_GetTypes,
} from "./ecr_ReplicationConfigurationReplicationConfigurationRule";

export interface ecr_ReplicationConfigurationReplicationConfiguration {
  // The replication rules for a replication configuration. A maximum of 10 are allowed per `replication_configuration`. See Rule
  rules?: Array<ecr_ReplicationConfigurationReplicationConfigurationRule>;
}

export function ecr_ReplicationConfigurationReplicationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "rules",
      "The replication rules for a replication configuration. A maximum of 10 are allowed per `replication_configuration`. See Rule",
      ecr_ReplicationConfigurationReplicationConfigurationRule_GetTypes(),
      true,
      false,
    ),
  ];
}
