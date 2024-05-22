import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  memorydb_getClusterShardNodeEndpoint,
  memorydb_getClusterShardNodeEndpoint_GetTypes,
} from "./memorydb_getClusterShardNodeEndpoint";

export interface memorydb_getClusterShardNode {
  // Name of the cluster.
  name?: string;

  // The Availability Zone in which the node resides.
  availabilityZone?: string;

  // The date and time when the node was created. Example: `2022-01-01T21:00:00Z`.
  createTime?: string;

  //
  endpoints?: Array<memorydb_getClusterShardNodeEndpoint>;
}

export function memorydb_getClusterShardNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "availabilityZone",
      "The Availability Zone in which the node resides.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createTime",
      "The date and time when the node was created. Example: `2022-01-01T21:00:00Z`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "endpoints",
      "",
      memorydb_getClusterShardNodeEndpoint_GetTypes(),
      true,
      false,
    ),
  ];
}
