import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { EnvironmentStorageConfig } from "../types/EnvironmentStorageConfig";
import { EnvironmentConfig } from "../types/EnvironmentConfig";

export interface EnvironmentArgs {
  // Configuration parameters for this environment.
  Config?: EnvironmentConfig;

  /*
User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map
are UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and
must conform to the following regular expression: [a-z]([-a-z0-9]-[a-z0-9])?. Label values must be between 0 and 63
characters long and must conform to the regular expression ([a-z]([-a-z0-9]-[a-z0-9])?)?. No more than 64 labels can be
associated with a given environment. Both keys and values must be <= 128 bytes in size. --Note--: This field is
non-authoritative, and will only manage the labels present in your configuration. Please refer to the field
'effective_labels' for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Name of the environment.
  Name?: string;

  // The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  Project?: string;

  // The location or Compute Engine region for the environment.
  Region?: string;

  // Configuration options for storage used by Composer environment.
  StorageConfig?: EnvironmentStorageConfig;
}
export class Environment extends Resource {
  // The location or Compute Engine region for the environment.
  public Region?: string;

  // Configuration options for storage used by Composer environment.
  public StorageConfig?: EnvironmentStorageConfig;

  // Configuration parameters for this environment.
  public Config?: EnvironmentConfig;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public EffectiveLabels?: Map<string, string>;

  /*
User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map
are UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and
must conform to the following regular expression: [a-z]([-a-z0-9]-[a-z0-9])?. Label values must be between 0 and 63
characters long and must conform to the regular expression ([a-z]([-a-z0-9]-[a-z0-9])?)?. No more than 64 labels can be
associated with a given environment. Both keys and values must be <= 128 bytes in size. --Note--: This field is
non-authoritative, and will only manage the labels present in your configuration. Please refer to the field
'effective_labels' for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Name of the environment.
  public Name?: string;

  // The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  public Project?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "StorageConfig",
        "Configuration options for storage used by Composer environment.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Config",
        "Configuration parameters for this environment.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map\nare UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and\nmust conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])?. Label values must be between 0 and 63\ncharacters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?. No more than 64 labels can be\nassociated with a given environment. Both keys and values must be <= 128 bytes in size. **Note**: This field is\nnon-authoritative, and will only manage the labels present in your configuration. Please refer to the field\n'effective_labels' for all of the labels present on the resource.",
      ),
      new DynamicUIProps(InputType.String, "Name", "Name of the environment."),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The location or Compute Engine region for the environment.",
      ),
    ];
  }
}
