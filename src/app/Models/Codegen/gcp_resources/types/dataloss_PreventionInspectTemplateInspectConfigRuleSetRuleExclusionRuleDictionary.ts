import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryWordList,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryWordList_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryWordList";
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath";

export interface dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary {
  /*
List of words or phrases to search for.
Structure is documented below.
*/
  wordList?: dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryWordList;

  /*
Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
Structure is documented below.
*/
  cloudStoragePath?: dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath;
}

export function dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "wordList",
      "List of words or phrases to search for.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryWordList_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudStoragePath",
      "Newline-delimited file of words in Cloud Storage. Only a single file is accepted.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionaryCloudStoragePath_GetTypes(),
      false,
      false,
    ),
  ];
}
