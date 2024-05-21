import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudbuild_getTriggerBuildAvailableSecretSecretManager,
  cloudbuild_getTriggerBuildAvailableSecretSecretManager_GetTypes,
} from "./cloudbuild_getTriggerBuildAvailableSecretSecretManager";

export interface cloudbuild_getTriggerBuildAvailableSecret {
  // Pairs a secret environment variable with a SecretVersion in Secret Manager.
  secretManagers?: Array<cloudbuild_getTriggerBuildAvailableSecretSecretManager>;
}

export function cloudbuild_getTriggerBuildAvailableSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "secretManagers",
      "Pairs a secret environment variable with a SecretVersion in Secret Manager.",
      cloudbuild_getTriggerBuildAvailableSecretSecretManager_GetTypes(),
      true,
      false,
    ),
  ];
}
