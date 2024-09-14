import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_InstanceSchedulingNodeAffinity {
  // The key for the node affinity label.
  key?: string;

  /*
The operator. Can be `IN` for node-affinities
or `NOT_IN` for anti-affinities.
*/
  operator?: string;

  // The values for the node affinity label.
  values?: Array<string>;
}

export function compute_InstanceSchedulingNodeAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "The key for the node affinity label.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "operator",
      "The operator. Can be `IN` for node-affinities\nor `NOT_IN` for anti-affinities.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "The values for the node affinity label.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}