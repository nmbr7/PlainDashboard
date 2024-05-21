import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface osconfig_GuestPoliciesRecipeInstallStepDpkgInstallation {
  // The id of the relevant artifact in the recipe.
  artifactId?: string;
}

export function osconfig_GuestPoliciesRecipeInstallStepDpkgInstallation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "artifactId",
      "The id of the relevant artifact in the recipe.",
      [],
      true,
      false,
    ),
  ];
}
