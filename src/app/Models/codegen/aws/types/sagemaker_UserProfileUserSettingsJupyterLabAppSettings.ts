import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_UserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec,
  sagemaker_UserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_UserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec";
import {
  sagemaker_UserProfileUserSettingsJupyterLabAppSettingsCodeRepository,
  sagemaker_UserProfileUserSettingsJupyterLabAppSettingsCodeRepository_GetTypes,
} from "./sagemaker_UserProfileUserSettingsJupyterLabAppSettingsCodeRepository";
import {
  sagemaker_UserProfileUserSettingsJupyterLabAppSettingsCustomImage,
  sagemaker_UserProfileUserSettingsJupyterLabAppSettingsCustomImage_GetTypes,
} from "./sagemaker_UserProfileUserSettingsJupyterLabAppSettingsCustomImage";

export interface sagemaker_UserProfileUserSettingsJupyterLabAppSettings {
  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.
  defaultResourceSpec?: sagemaker_UserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec;

  // The Amazon Resource Name (ARN) of the Lifecycle Configurations.
  lifecycleConfigArns?: Array<string>;

  // A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. see Code Repository below.
  codeRepositories?: Array<sagemaker_UserProfileUserSettingsJupyterLabAppSettingsCodeRepository>;

  //
  customImages?: Array<sagemaker_UserProfileUserSettingsJupyterLabAppSettingsCustomImage>;
}

export function sagemaker_UserProfileUserSettingsJupyterLabAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.",
      () =>
        sagemaker_UserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "lifecycleConfigArns",
      "The Amazon Resource Name (ARN) of the Lifecycle Configurations.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "codeRepositories",
      "A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. see Code Repository below.",
      () =>
        sagemaker_UserProfileUserSettingsJupyterLabAppSettingsCodeRepository_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customImages",
      "",
      () =>
        sagemaker_UserProfileUserSettingsJupyterLabAppSettingsCustomImage_GetTypes(),
      false,
      false,
    ),
  ];
}
