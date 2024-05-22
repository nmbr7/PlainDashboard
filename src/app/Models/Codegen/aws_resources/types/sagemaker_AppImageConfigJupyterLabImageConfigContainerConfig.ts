import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sagemaker_AppImageConfigJupyterLabImageConfigContainerConfig {
  // The arguments for the container when you're running the application.
  containerArguments?: Array<string>;

  // The entrypoint used to run the application in the container.
  containerEntrypoints?: Array<string>;

  // The environment variables to set in the container.
  containerEnvironmentVariables?: Map<string, string>;
}

export function sagemaker_AppImageConfigJupyterLabImageConfigContainerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "containerArguments",
      "The arguments for the container when you're running the application.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containerEntrypoints",
      "The entrypoint used to run the application in the container.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "containerEnvironmentVariables",
      "The environment variables to set in the container.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
