import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_URLMapPathMatcherDefaultRouteActionRequestMirrorPolicy {
  // The full or partial URL to the BackendService resource being mirrored to.
  backendService?: string;
}

export function compute_URLMapPathMatcherDefaultRouteActionRequestMirrorPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "backendService",
      "The full or partial URL to the BackendService resource being mirrored to.",
      () => [],
      true,
      false,
    ),
  ];
}