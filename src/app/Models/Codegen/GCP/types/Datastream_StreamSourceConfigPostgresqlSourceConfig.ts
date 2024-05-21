import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjects,
  datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjects_GetTypes,
} from "./datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjects";
import {
  datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjects,
  datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjects_GetTypes,
} from "./datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjects";

export interface datastream_StreamSourceConfigPostgresqlSourceConfig {
  /*
PostgreSQL objects to exclude from the stream.
Structure is documented below.
*/
  excludeObjects?: datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjects;

  /*
PostgreSQL objects to retrieve from the source.
Structure is documented below.
*/
  includeObjects?: datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjects;

  /*
Maximum number of concurrent backfill tasks. The number should be non
negative. If not set (or set to 0), the system's default value will be used.
*/
  maxConcurrentBackfillTasks?: number;

  /*
The name of the publication that includes the set of all tables
that are defined in the stream's include_objects.
*/
  publication?: string;

  /*
The name of the logical replication slot that's configured with
the pgoutput plugin.
*/
  replicationSlot?: string;
}

export function datastream_StreamSourceConfigPostgresqlSourceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxConcurrentBackfillTasks",
      "Maximum number of concurrent backfill tasks. The number should be non\nnegative. If not set (or set to 0), the system's default value will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "publication",
      "The name of the publication that includes the set of all tables\nthat are defined in the stream's include_objects.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "replicationSlot",
      "The name of the logical replication slot that's configured with\nthe pgoutput plugin.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "excludeObjects",
      "PostgreSQL objects to exclude from the stream.\nStructure is documented below.",
      datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjects_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "includeObjects",
      "PostgreSQL objects to retrieve from the source.\nStructure is documented below.",
      datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjects_GetTypes(),
      false,
      false,
    ),
  ];
}
