import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface glue_CrawlerDeltaTarget {
  // A list of the Amazon S3 paths to the Delta tables.
  deltaTables?: Array<string>;

  // Specifies whether to write the manifest files to the Delta table path.
  writeManifest?: boolean;

  // The name of the connection to use to connect to the Delta table target.
  connectionName?: string;

  // Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly.
  createNativeDeltaTable?: boolean;
}

export function glue_CrawlerDeltaTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "deltaTables",
      "A list of the Amazon S3 paths to the Delta tables.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "writeManifest",
      "Specifies whether to write the manifest files to the Delta table path.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectionName",
      "The name of the connection to use to connect to the Delta table target.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "createNativeDeltaTable",
      "Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly.",
      [],
      false,
      false,
    ),
  ];
}
