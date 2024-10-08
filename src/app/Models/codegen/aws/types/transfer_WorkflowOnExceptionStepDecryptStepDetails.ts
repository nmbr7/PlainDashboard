import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocation,
  transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocation_GetTypes,
} from "./transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocation";

export interface transfer_WorkflowOnExceptionStepDecryptStepDetails {
  // Specifies the location for the file being copied. Use ${Transfer:username} in this field to parametrize the destination prefix by username.
  destinationFileLocation?: transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocation;

  // The name of the step, used as an identifier.
  name?: string;

  // A flag that indicates whether or not to overwrite an existing file of the same name. The default is `FALSE`. Valid values are `TRUE` and `FALSE`.
  overwriteExisting?: string;

  // Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow. Enter ${previous.file} to use the previous file as the input. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value. Enter ${original.file} to use the originally-uploaded file location as input for this step.
  sourceFileLocation?: string;

  // The type of encryption used. Currently, this value must be `"PGP"`.
  type?: string;
}

export function transfer_WorkflowOnExceptionStepDecryptStepDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "destinationFileLocation",
      "Specifies the location for the file being copied. Use ${Transfer:username} in this field to parametrize the destination prefix by username.",
      () =>
        transfer_WorkflowOnExceptionStepDecryptStepDetailsDestinationFileLocation_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the step, used as an identifier.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "overwriteExisting",
      "A flag that indicates whether or not to overwrite an existing file of the same name. The default is `FALSE`. Valid values are `TRUE` and `FALSE`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceFileLocation",
      "Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow. Enter ${previous.file} to use the previous file as the input. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value. Enter ${original.file} to use the originally-uploaded file location as input for this step.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      'The type of encryption used. Currently, this value must be `"PGP"`.',
      () => [],
      true,
      true,
    ),
  ];
}
