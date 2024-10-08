import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codegurureviewer_RepositoryAssociationS3RepositoryDetailCodeArtifact {
  //
  buildArtifactsObjectKey?: string;

  //
  sourceCodeArtifactsObjectKey?: string;
}

export function codegurureviewer_RepositoryAssociationS3RepositoryDetailCodeArtifact_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "buildArtifactsObjectKey",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceCodeArtifactsObjectKey",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
