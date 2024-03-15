import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { MetricMetricDescriptor } from "../types/MetricMetricDescriptor";
import { MetricBucketOptions } from "../types/MetricBucketOptions";

export interface MetricArgs {
  /*
The optional metric descriptor associated with the logs-based metric.
If unspecified, it uses a default metric descriptor with a DELTA metric kind,
INT64 value type, with no labels and a unit of "1". Such a metric counts the
number of log entries matching the filter expression.
Structure is documented below.
*/
  MetricDescriptor?: MetricMetricDescriptor;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
A valueExtractor is required when using a distribution logs-based metric to extract the values to
record from a log entry. Two functions are supported for value extraction - EXTRACT(field) or
REGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which
the value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax
(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified
log entry field. The value of the field is converted to a string before applying the regex. It is an
error to specify a regex that does not include exactly one capture group.
*/
  ValueExtractor?: string;

  /*
The bucketOptions are required when the logs-based metric is using a DISTRIBUTION value type and it
describes the bucket boundaries used to create a histogram of the extracted values.
Structure is documented below.
*/
  BucketOptions?: MetricBucketOptions;

  /*
A description of this metric, which is used in documentation. The maximum length of the
description is 8000 characters.
*/
  Description?: string;

  // If set to True, then this metric is disabled and it does not generate any points.
  Disabled?: boolean;

  /*
An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which
is used to match log entries.


- - -
*/
  Filter?: string;

  /*
A map from a label key string to an extractor expression which is used to extract data from a log
entry field and assign as the label value. Each label key specified in the LabelDescriptor must
have an associated extractor expression in this map. The syntax of the extractor expression is
the same as for the valueExtractor field.
*/
  LabelExtractors?: Map<string, string>;

  /*
The resource name of the Log Bucket that owns the Log Metric. Only Log Buckets in projects
are supported. The bucket has to be in the same project as the metric.
*/
  BucketName?: string;

  /*
The client-assigned metric identifier. Examples - "error_count", "nginx/requests".
Metric identifiers are limited to 100 characters and can include only the following
characters A-Z, a-z, 0-9, and the special characters _-.,+!-',()%!!(MISSING)/(MISSING). The forward-slash
character (/) denotes a hierarchy of name pieces, and it cannot be the first character
of the name.
*/
  Name?: string;
}
export class Metric extends Resource {
  /*
An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which
is used to match log entries.


- - -
*/
  public Filter?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
A valueExtractor is required when using a distribution logs-based metric to extract the values to
record from a log entry. Two functions are supported for value extraction - EXTRACT(field) or
REGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which
the value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax
(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified
log entry field. The value of the field is converted to a string before applying the regex. It is an
error to specify a regex that does not include exactly one capture group.
*/
  public ValueExtractor?: string;

  /*
The resource name of the Log Bucket that owns the Log Metric. Only Log Buckets in projects
are supported. The bucket has to be in the same project as the metric.
*/
  public BucketName?: string;

  /*
The bucketOptions are required when the logs-based metric is using a DISTRIBUTION value type and it
describes the bucket boundaries used to create a histogram of the extracted values.
Structure is documented below.
*/
  public BucketOptions?: MetricBucketOptions;

  /*
A description of this metric, which is used in documentation. The maximum length of the
description is 8000 characters.
*/
  public Description?: string;

  // If set to True, then this metric is disabled and it does not generate any points.
  public Disabled?: boolean;

  /*
A map from a label key string to an extractor expression which is used to extract data from a log
entry field and assign as the label value. Each label key specified in the LabelDescriptor must
have an associated extractor expression in this map. The syntax of the extractor expression is
the same as for the valueExtractor field.
*/
  public LabelExtractors?: Map<string, string>;

  /*
The optional metric descriptor associated with the logs-based metric.
If unspecified, it uses a default metric descriptor with a DELTA metric kind,
INT64 value type, with no labels and a unit of "1". Such a metric counts the
number of log entries matching the filter expression.
Structure is documented below.
*/
  public MetricDescriptor?: MetricMetricDescriptor;

  /*
The client-assigned metric identifier. Examples - "error_count", "nginx/requests".
Metric identifiers are limited to 100 characters and can include only the following
characters A-Z, a-z, 0-9, and the special characters _-.,+!-',()%!!(MISSING)/(MISSING). The forward-slash
character (/) denotes a hierarchy of name pieces, and it cannot be the first character
of the name.
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ValueExtractor",
        "A valueExtractor is required when using a distribution logs-based metric to extract the values to\nrecord from a log entry. Two functions are supported for value extraction - EXTRACT(field) or\nREGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which\nthe value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax\n(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified\nlog entry field. The value of the field is converted to a string before applying the regex. It is an\nerror to specify a regex that does not include exactly one capture group.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Filter",
        "An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which\nis used to match log entries.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "LabelExtractors",
        "A map from a label key string to an extractor expression which is used to extract data from a log\nentry field and assign as the label value. Each label key specified in the LabelDescriptor must\nhave an associated extractor expression in this map. The syntax of the extractor expression is\nthe same as for the valueExtractor field.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BucketName",
        "The resource name of the Log Bucket that owns the Log Metric. Only Log Buckets in projects\nare supported. The bucket has to be in the same project as the metric.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        'The client-assigned metric identifier. Examples - "error_count", "nginx/requests".\nMetric identifiers are limited to 100 characters and can include only the following\ncharacters A-Z, a-z, 0-9, and the special characters _-.,+!*\',()%!/(MISSING). The forward-slash\ncharacter (/) denotes a hierarchy of name pieces, and it cannot be the first character\nof the name.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BucketOptions",
        "The bucketOptions are required when the logs-based metric is using a DISTRIBUTION value type and it\ndescribes the bucket boundaries used to create a histogram of the extracted values.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of this metric, which is used in documentation. The maximum length of the\ndescription is 8000 characters.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Disabled",
        "If set to True, then this metric is disabled and it does not generate any points.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MetricDescriptor",
        'The optional metric descriptor associated with the logs-based metric.\nIf unspecified, it uses a default metric descriptor with a DELTA metric kind,\nINT64 value type, with no labels and a unit of "1". Such a metric counts the\nnumber of log entries matching the filter expression.\nStructure is documented below.',
      ),
    ];
  }
}
