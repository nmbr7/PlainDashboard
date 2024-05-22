import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterFleet {
  // Short name of the fleet membership, for example "member-1".
  membershipId?: string;

  // Location of the fleet membership, for example "us-central1".
  membershipLocation?: string;

  // Whether the cluster has been registered via the fleet API.
  preRegistered?: boolean;

  // The name of the Fleet host project where this cluster will be registered.
  project?: string;

  // Full resource name of the registered fleet membership of the cluster.
  membership?: string;
}

export function container_ClusterFleet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "membership",
      "Full resource name of the registered fleet membership of the cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "membershipId",
      'Short name of the fleet membership, for example "member-1".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "membershipLocation",
      'Location of the fleet membership, for example "us-central1".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "preRegistered",
      "Whether the cluster has been registered via the fleet API.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "project",
      "The name of the Fleet host project where this cluster will be registered.",
      [],
      false,
      false,
    ),
  ];
}
