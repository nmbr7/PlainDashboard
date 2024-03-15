import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DatabaseArgs {
  /*
The name of the database in the Cloud SQL instance.
This does not include the project ID or instance name.
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The charset value. See MySQL's
[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)
and Postgres' [Character Set Support](https://www.postgresql.org/docs/9.6/static/multibyte.html)
for more details and supported values. Postgres databases only support
a value of `UTF8` at creation time.
*/
  Charset?: string;

  /*
The collation value. See MySQL's
[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)
and Postgres' [Collation Support](https://www.postgresql.org/docs/9.6/static/collation.html)
for more details and supported values. Postgres databases only support
a value of `en_US.UTF8` at creation time.
*/
  Collation?: string;

  /*
The deletion policy for the database. Setting ABANDON allows the resource
to be abandoned rather than deleted. This is useful for Postgres, where databases cannot be
deleted from the API if there are users other than cloudsqlsuperuser with access. Possible
values are: "ABANDON", "DELETE". Defaults to "DELETE".
*/
  DeletionPolicy?: string;

  /*
The name of the Cloud SQL instance. This does not include the project
ID.


- - -
*/
  Instance?: string;
}
export class Database extends Resource {
  /*
The collation value. See MySQL's
[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)
and Postgres' [Collation Support](https://www.postgresql.org/docs/9.6/static/collation.html)
for more details and supported values. Postgres databases only support
a value of `en_US.UTF8` at creation time.
*/
  public Collation?: string;

  /*
The deletion policy for the database. Setting ABANDON allows the resource
to be abandoned rather than deleted. This is useful for Postgres, where databases cannot be
deleted from the API if there are users other than cloudsqlsuperuser with access. Possible
values are: "ABANDON", "DELETE". Defaults to "DELETE".
*/
  public DeletionPolicy?: string;

  /*
The name of the Cloud SQL instance. This does not include the project
ID.


- - -
*/
  public Instance?: string;

  /*
The name of the database in the Cloud SQL instance.
This does not include the project ID or instance name.
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
The charset value. See MySQL's
[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)
and Postgres' [Character Set Support](https://www.postgresql.org/docs/9.6/static/multibyte.html)
for more details and supported values. Postgres databases only support
a value of `UTF8` at creation time.
*/
  public Charset?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Instance",
        "The name of the Cloud SQL instance. This does not include the project\nID.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the database in the Cloud SQL instance.\nThis does not include the project ID or instance name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Charset",
        "The charset value. See MySQL's\n[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)\nand Postgres' [Character Set Support](https://www.postgresql.org/docs/9.6/static/multibyte.html)\nfor more details and supported values. Postgres databases only support\na value of `UTF8` at creation time.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Collation",
        "The collation value. See MySQL's\n[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)\nand Postgres' [Collation Support](https://www.postgresql.org/docs/9.6/static/collation.html)\nfor more details and supported values. Postgres databases only support\na value of `en_US.UTF8` at creation time.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        'The deletion policy for the database. Setting ABANDON allows the resource\nto be abandoned rather than deleted. This is useful for Postgres, where databases cannot be\ndeleted from the API if there are users other than cloudsqlsuperuser with access. Possible\nvalues are: "ABANDON", "DELETE". Defaults to "DELETE".',
      ),
    ];
  }
}
