import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface elasticsearch_DomainEncryptAtRest {
  // Whether to enable encryption at rest. If the `encrypt_at_rest` block is not provided then this defaults to `false`. Enabling encryption on new domains requires `elasticsearch_version` 5.1 or greater.
  enabled?: boolean;

  // KMS key ARN to encrypt the Elasticsearch domain with. If not specified then it defaults to using the `aws/es` service KMS key. Note that KMS will accept a KMS key ID but will return the key ARN. To prevent the provider detecting unwanted changes, use the key ARN instead.
  kmsKeyId?: string;
}

export function elasticsearch_DomainEncryptAtRest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether to enable encryption at rest. If the `encrypt_at_rest` block is not provided then this defaults to `false`. Enabling encryption on new domains requires `elasticsearch_version` 5.1 or greater.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "KMS key ARN to encrypt the Elasticsearch domain with. If not specified then it defaults to using the `aws/es` service KMS key. Note that KMS will accept a KMS key ID but will return the key ARN. To prevent the provider detecting unwanted changes, use the key ARN instead.",
      [],
      false,
      true,
    ),
  ];
}
