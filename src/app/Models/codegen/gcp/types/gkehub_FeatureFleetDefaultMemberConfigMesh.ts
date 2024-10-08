import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkehub_FeatureFleetDefaultMemberConfigMesh {
  /*
Whether to automatically manage Service Mesh
Possible values are: `MANAGEMENT_UNSPECIFIED`, `MANAGEMENT_AUTOMATIC`, `MANAGEMENT_MANUAL`.
*/
  management?: string;
}

export function gkehub_FeatureFleetDefaultMemberConfigMesh_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "management",
      "Whether to automatically manage Service Mesh\nPossible values are: `MANAGEMENT_UNSPECIFIED`, `MANAGEMENT_AUTOMATIC`, `MANAGEMENT_MANUAL`.",
      () => [],
      true,
      false,
    ),
  ];
}
