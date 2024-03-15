import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SchemaArgs {
  /*
The type of the schema definition
Default value is `TYPE_UNSPECIFIED`.
Possible values are: `TYPE_UNSPECIFIED`, `PROTOCOL_BUFFER`, `AVRO`.
*/
  Type?: string;

  /*
The definition of the schema.
This should contain a string representing the full definition of the schema
that is a valid schema definition of the type specified in type. Changes
to the definition commit new [schema revisions](https://cloud.google.com/pubsub/docs/commit-schema-revision).
A schema can only have up to 20 revisions, so updates that fail with an
error indicating that the limit has been reached require manually
[deleting old revisions](https://cloud.google.com/pubsub/docs/delete-schema-revision).
*/
  Definition?: string;

  /*
The ID to use for the schema, which will become the final component of the schema's resource name.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Schema extends Resource {
  /*
The definition of the schema.
This should contain a string representing the full definition of the schema
that is a valid schema definition of the type specified in type. Changes
to the definition commit new [schema revisions](https://cloud.google.com/pubsub/docs/commit-schema-revision).
A schema can only have up to 20 revisions, so updates that fail with an
error indicating that the limit has been reached require manually
[deleting old revisions](https://cloud.google.com/pubsub/docs/delete-schema-revision).
*/
  public Definition?: string;

  /*
The ID to use for the schema, which will become the final component of the schema's resource name.


- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The type of the schema definition
Default value is `TYPE_UNSPECIFIED`.
Possible values are: `TYPE_UNSPECIFIED`, `PROTOCOL_BUFFER`, `AVRO`.
*/
  public Type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID to use for the schema, which will become the final component of the schema's resource name.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type of the schema definition\nDefault value is `TYPE_UNSPECIFIED`.\nPossible values are: `TYPE_UNSPECIFIED`, `PROTOCOL_BUFFER`, `AVRO`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Definition",
        "The definition of the schema.\nThis should contain a string representing the full definition of the schema\nthat is a valid schema definition of the type specified in type. Changes\nto the definition commit new [schema revisions](https://cloud.google.com/pubsub/docs/commit-schema-revision).\nA schema can only have up to 20 revisions, so updates that fail with an\nerror indicating that the limit has been reached require manually\n[deleting old revisions](https://cloud.google.com/pubsub/docs/delete-schema-revision).",
      ),
    ];
  }
}
