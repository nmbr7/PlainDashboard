import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DocumentAiProcessorDefaultVersionArgs {
  /*
The processor to set the version on.


- - -
*/
  processor?: string;

  /*
The version to set. Using `stable` or `rc` will cause the API to return the latest version in that release channel.
Apply `lifecycle.ignore_changes` to the `version` field to suppress this diff.
*/
  version?: string;
}
export class DocumentAiProcessorDefaultVersion extends DS_Resource {
  /*
The processor to set the version on.


- - -
*/
  public processor?: string;

  /*
The version to set. Using `stable` or `rc` will cause the API to return the latest version in that release channel.
Apply `lifecycle.ignore_changes` to the `version` field to suppress this diff.
*/
  public version?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "processor",
        "The processor to set the version on.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "version",
        "The version to set. Using `stable` or `rc` will cause the API to return the latest version in that release channel.\nApply `lifecycle.ignore_changes` to the `version` field to suppress this diff.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
