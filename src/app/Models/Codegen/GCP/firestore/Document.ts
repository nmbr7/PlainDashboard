import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DocumentArgs {
  // The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages.
  collection?: string;

  // The Firestore database id. Defaults to `"(default)"`.
  database?: string;

  /*
The client-assigned document ID to use for this document during creation.


- - -
*/
  documentId?: string;

  // The document's [fields](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents) formated as a json string.
  fields?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class Document extends Resource {
  /*
The client-assigned document ID to use for this document during creation.


- - -
*/
  public documentId?: string;

  // The document's [fields](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents) formated as a json string.
  public fields?: string;

  // A relative path to the collection this document exists within
  public path?: string;

  // Last update timestamp in RFC3339 format.
  public updateTime?: string;

  // The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages.
  public collection?: string;

  // Creation timestamp in RFC3339 format.
  public createTime?: string;

  // The Firestore database id. Defaults to `"(default)"`.
  public database?: string;

  /*
A server defined name for this index. Format:
`projects/{{project_id}}/databases/{{database_id}}/documents/{{path}}/{{document_id}}`
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "collection",
        "The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "database",
        'The Firestore database id. Defaults to `"(default)"`.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "documentId",
        "The client-assigned document ID to use for this document during creation.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "fields",
        "The document's [fields](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents) formated as a json string.",
        [],
        true,
        false,
      ),
    ];
  }
}
