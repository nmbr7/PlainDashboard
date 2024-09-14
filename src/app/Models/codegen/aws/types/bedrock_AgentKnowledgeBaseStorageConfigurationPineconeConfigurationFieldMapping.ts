import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping {
  // Name of the field in which Amazon Bedrock stores metadata about the vector store.
  metadataField?: string;

  // Name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
  textField?: string;
}

export function bedrock_AgentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "metadataField",
      "Name of the field in which Amazon Bedrock stores metadata about the vector store.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "textField",
      "Name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.",
      () => [],
      false,
      false,
    ),
  ];
}