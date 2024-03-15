import { getSupportedDatabaseFlagsSupportedDatabaseFlagIntegerRestrictions } from "./getSupportedDatabaseFlagsSupportedDatabaseFlagIntegerRestrictions";
import { getSupportedDatabaseFlagsSupportedDatabaseFlagStringRestrictions } from "./getSupportedDatabaseFlagsSupportedDatabaseFlagStringRestrictions";

export interface getSupportedDatabaseFlagsSupportedDatabaseFlag {
  // Whether the database flag accepts multiple values. If true, a comma-separated list of stringified values may be specified.
  AcceptsMultipleValues?: boolean;

  // The name of the database flag, e.g. "max_allowed_packets". The is a possibly key for the Instance.database_flags map field.
  FlagName?: string;

  // Restriction on `INTEGER` type value. Specifies the minimum value and the maximum value that can be specified, if applicable.
  IntegerRestrictions?: getSupportedDatabaseFlagsSupportedDatabaseFlagIntegerRestrictions;

  // The name of the flag resource, following Google Cloud conventions, e.g.: - projects/{project}/locations/{location}/flags/{flag} This field currently has no semantic meaning.
  Name?: string;

  // Whether setting or updating this flag on an Instance requires a database restart. If a flag that requires database restart is set, the backend will automatically restart the database (making sure to satisfy any availability SLO's).
  RequiresDbRestart?: boolean;

  // Restriction on `STRING` type value. The list of allowed values, if bounded. This field will be empty if there is a unbounded number of allowed values.
  StringRestrictions?: getSupportedDatabaseFlagsSupportedDatabaseFlagStringRestrictions;

  // Major database engine versions for which this flag is supported. The supported values are `POSTGRES_14` and `DATABASE_VERSION_UNSPECIFIED`.
  SupportedDbVersions?: Array<string>;

  // ValueType describes the semantic type of the value that the flag accepts. Regardless of the ValueType, the Instance.database_flags field accepts the stringified version of the value, i.e. "20" or "3.14". The supported values are `VALUE_TYPE_UNSPECIFIED`, `STRING`, `INTEGER`, `FLOAT` and `NONE`.
  ValueType?: string;
}
