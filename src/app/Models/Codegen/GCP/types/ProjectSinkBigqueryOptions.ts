export interface ProjectSinkBigqueryOptions {
  /*
Whether to use [BigQuery's partition tables](https://cloud.google.com/bigquery/docs/partitioned-tables).
By default, Logging creates dated tables based on the log entries' timestamps, e.g. `syslog_20170523`. With partitioned
tables the date suffix is no longer present and [special query syntax](https://cloud.google.com/bigquery/docs/querying-partitioned-tables)
has to be used instead. In both cases, tables are sharded based on UTC timezone.
*/
  UsePartitionedTables?: boolean;
}
