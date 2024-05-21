import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBinding {
  /*
The relative resource name of the binauthz platform policy to audit. GKE
platform policies have the following format:
`projects/{project_number}/platforms/gke/policies/{policy_id}`.
*/
  name?: string;
}

export function gkehub_FleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBinding_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The relative resource name of the binauthz platform policy to audit. GKE\nplatform policies have the following format:\n`projects/{project_number}/platforms/gke/policies/{policy_id}`.",
      [],
      false,
      false,
    ),
  ];
}
