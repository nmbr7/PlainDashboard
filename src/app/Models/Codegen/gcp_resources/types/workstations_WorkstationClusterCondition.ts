import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface workstations_WorkstationClusterCondition {
  /*
(Output)
A list of messages that carry the error details.
*/
  details?: Array<Map<string, string>>;

  /*
(Output)
Human readable message indicating details about the current status.
*/
  message?: string;

  /*
(Output)
The status code, which should be an enum value of google.rpc.Code.
*/
  code?: number;
}

export function workstations_WorkstationClusterCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "details",
      "(Output)\nA list of messages that carry the error details.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "message",
      "(Output)\nHuman readable message indicating details about the current status.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "code",
      "(Output)\nThe status code, which should be an enum value of google.rpc.Code.",
      [],
      false,
      false,
    ),
  ];
}
