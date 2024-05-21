import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  bigquery_RoutineRemoteFunctionOptions,
  bigquery_RoutineRemoteFunctionOptions_GetTypes,
} from "../types/bigquery_RoutineRemoteFunctionOptions";
import {
  bigquery_RoutineArgument,
  bigquery_RoutineArgument_GetTypes,
} from "../types/bigquery_RoutineArgument";
import {
  bigquery_RoutineSparkOptions,
  bigquery_RoutineSparkOptions_GetTypes,
} from "../types/bigquery_RoutineSparkOptions";

export interface RoutineArgs {
  // The ID of the dataset containing this routine
  datasetId?: string;

  /*
The determinism level of the JavaScript UDF if defined.
Possible values are: `DETERMINISM_LEVEL_UNSPECIFIED`, `DETERMINISTIC`, `NOT_DETERMINISTIC`.
*/
  determinismLevel?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The ID of the the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
  routineId?: string;

  /*
The body of the routine. For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.


- - -
*/
  definitionBody?: string;

  // The description of the routine if defined.
  description?: string;

  /*
Optional. If language = "JAVASCRIPT", this field stores the path of the
imported JAVASCRIPT libraries.
*/
  importedLibraries?: Array<string>;

  /*
Remote function specific options.
Structure is documented below.
*/
  remoteFunctionOptions?: bigquery_RoutineRemoteFunctionOptions;

  /*
Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".
If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, then the columns in the evaluated table result will
be cast to match the column types specificed in return table type, at query time.
*/
  returnTableType?: string;

  /*
Input/output argument of a function or a stored procedure.
Structure is documented below.
*/
  arguments?: Array<bigquery_RoutineArgument>;

  /*
The language of the routine.
Possible values are: `SQL`, `JAVASCRIPT`, `PYTHON`, `JAVA`, `SCALA`.
*/
  language?: string;

  /*
A JSON schema for the return type. Optional if language = "SQL"; required otherwise.
If absent, the return type is inferred from definitionBody at query time in each query
that references this routine. If present, then the evaluated result will be cast to
the specified returned type at query time. ~>--NOTE--: Because this field expects a JSON
string, any changes to the string will create a diff, even if the JSON itself hasn't
changed. If the API returns a different value for the same schema, e.g. it switche
d the order of values or replaced STRUCT field type with RECORD field type, we currently
cannot suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.
*/
  returnType?: string;

  /*
The type of routine.
Possible values are: `SCALAR_FUNCTION`, `PROCEDURE`, `TABLE_VALUED_FUNCTION`.
*/
  routineType?: string;

  /*
Optional. If language is one of "PYTHON", "JAVA", "SCALA", this field stores the options for spark stored procedure.
Structure is documented below.
*/
  sparkOptions?: bigquery_RoutineSparkOptions;
}
export class Routine extends Resource {
  /*
The determinism level of the JavaScript UDF if defined.
Possible values are: `DETERMINISM_LEVEL_UNSPECIFIED`, `DETERMINISTIC`, `NOT_DETERMINISTIC`.
*/
  public determinismLevel?: string;

  /*
Optional. If language = "JAVASCRIPT", this field stores the path of the
imported JAVASCRIPT libraries.
*/
  public importedLibraries?: Array<string>;

  /*
The language of the routine.
Possible values are: `SQL`, `JAVASCRIPT`, `PYTHON`, `JAVA`, `SCALA`.
*/
  public language?: string;

  /*
Remote function specific options.
Structure is documented below.
*/
  public remoteFunctionOptions?: bigquery_RoutineRemoteFunctionOptions;

  // The ID of the the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
  public routineId?: string;

  /*
The time when this routine was created, in milliseconds since the
epoch.
*/
  public creationTime?: number;

  /*
Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".
If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, then the columns in the evaluated table result will
be cast to match the column types specificed in return table type, at query time.
*/
  public returnTableType?: string;

  /*
A JSON schema for the return type. Optional if language = "SQL"; required otherwise.
If absent, the return type is inferred from definitionBody at query time in each query
that references this routine. If present, then the evaluated result will be cast to
the specified returned type at query time. ~>--NOTE--: Because this field expects a JSON
string, any changes to the string will create a diff, even if the JSON itself hasn't
changed. If the API returns a different value for the same schema, e.g. it switche
d the order of values or replaced STRUCT field type with RECORD field type, we currently
cannot suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.
*/
  public returnType?: string;

  /*
The time when this routine was modified, in milliseconds since the
epoch.
*/
  public lastModifiedTime?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The type of routine.
Possible values are: `SCALAR_FUNCTION`, `PROCEDURE`, `TABLE_VALUED_FUNCTION`.
*/
  public routineType?: string;

  /*
Optional. If language is one of "PYTHON", "JAVA", "SCALA", this field stores the options for spark stored procedure.
Structure is documented below.
*/
  public sparkOptions?: bigquery_RoutineSparkOptions;

  /*
Input/output argument of a function or a stored procedure.
Structure is documented below.
*/
  public arguments?: Array<bigquery_RoutineArgument>;

  /*
The body of the routine. For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.


- - -
*/
  public definitionBody?: string;

  // The description of the routine if defined.
  public description?: string;

  // The ID of the dataset containing this routine
  public datasetId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "routineId",
        "The ID of the the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the routine if defined.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "language",
        "The language of the routine.\nPossible values are: `SQL`, `JAVASCRIPT`, `PYTHON`, `JAVA`, `SCALA`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "remoteFunctionOptions",
        "Remote function specific options.\nStructure is documented below.",
        bigquery_RoutineRemoteFunctionOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "returnTableType",
        'Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".\nIf absent, the return table type is inferred from definitionBody at query time in each query\nthat references this routine. If present, then the columns in the evaluated table result will\nbe cast to match the column types specificed in return table type, at query time.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "arguments",
        "Input/output argument of a function or a stored procedure.\nStructure is documented below.",
        bigquery_RoutineArgument_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sparkOptions",
        'Optional. If language is one of "PYTHON", "JAVA", "SCALA", this field stores the options for spark stored procedure.\nStructure is documented below.',
        bigquery_RoutineSparkOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "datasetId",
        "The ID of the dataset containing this routine",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "importedLibraries",
        'Optional. If language = "JAVASCRIPT", this field stores the path of the\nimported JAVASCRIPT libraries.',
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "returnType",
        'A JSON schema for the return type. Optional if language = "SQL"; required otherwise.\nIf absent, the return type is inferred from definitionBody at query time in each query\nthat references this routine. If present, then the evaluated result will be cast to\nthe specified returned type at query time. ~>**NOTE**: Because this field expects a JSON\nstring, any changes to the string will create a diff, even if the JSON itself hasn\'t\nchanged. If the API returns a different value for the same schema, e.g. it switche\nd the order of values or replaced STRUCT field type with RECORD field type, we currently\ncannot suppress the recurring diff this causes. As a workaround, we recommend using\nthe schema as returned by the API.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "routineType",
        "The type of routine.\nPossible values are: `SCALAR_FUNCTION`, `PROCEDURE`, `TABLE_VALUED_FUNCTION`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "determinismLevel",
        "The determinism level of the JavaScript UDF if defined.\nPossible values are: `DETERMINISM_LEVEL_UNSPECIFIED`, `DETERMINISTIC`, `NOT_DETERMINISTIC`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "definitionBody",
        "The body of the routine. For functions, this is the expression in the AS clause.\nIf language=SQL, it is the substring inside (but excluding) the parentheses.\n\n\n- - -",
        [],
        true,
        false,
      ),
    ];
  }
}
