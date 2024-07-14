import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface notebooks_RuntimeSoftwareConfigKernel {
  // The tag of the container image. If not specified, this defaults to the latest tag.
  tag?: string;

  /*
The path to the container image repository.
For example: gcr.io/{project_id}/{imageName}
*/
  repository?: string;
}

export function notebooks_RuntimeSoftwareConfigKernel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tag",
      "The tag of the container image. If not specified, this defaults to the latest tag.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repository",
      "The path to the container image repository.\nFor example: gcr.io/{project_id}/{imageName}",
      [],
      true,
      false,
    ),
  ];
}
