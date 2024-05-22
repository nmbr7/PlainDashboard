import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface neptune_GlobalClusterGlobalClusterMember {
  // Amazon Resource Name (ARN) of member DB Cluster.
  dbClusterArn?: string;

  // Whether the member is the primary DB Cluster.
  isWriter?: boolean;
}

export function neptune_GlobalClusterGlobalClusterMember_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dbClusterArn",
      "Amazon Resource Name (ARN) of member DB Cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isWriter",
      "Whether the member is the primary DB Cluster.",
      [],
      false,
      false,
    ),
  ];
}
