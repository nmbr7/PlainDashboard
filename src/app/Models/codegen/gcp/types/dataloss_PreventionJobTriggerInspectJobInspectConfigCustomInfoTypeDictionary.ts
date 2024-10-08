import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryWordList,
  dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryWordList_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryWordList";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryCloudStoragePath,
  dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryCloudStoragePath_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryCloudStoragePath";

export interface dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionary {
  /*
List of words or phrases to search for.
Structure is documented below.
*/
  wordList?: dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryWordList;

  /*
Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
Structure is documented below.
*/
  cloudStoragePath?: dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryCloudStoragePath;
}

export function dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "wordList",
      "List of words or phrases to search for.\nStructure is documented below.",
      () =>
        dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryWordList_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudStoragePath",
      "Newline-delimited file of words in Cloud Storage. Only a single file is accepted.\nStructure is documented below.",
      () =>
        dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryCloudStoragePath_GetTypes(),
      false,
      false,
    ),
  ];
}
