import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  storage_ObjectAccessControlProjectTeam,
  storage_ObjectAccessControlProjectTeam_GetTypes,
} from "../types/storage_ObjectAccessControlProjectTeam";

export interface ObjectAccessControlArgs {
  /*
The access permission for the entity.
Possible values are: `OWNER`, `READER`.


- - -
*/
  role?: string;

  // The name of the bucket.
  bucket?: string;

  /*
The entity holding the permission, in one of the following forms:
- user-{{userId}}
- user-{{email}} (such as "user-liz@example.com")
- group-{{groupId}}
- group-{{email}} (such as "group-example@googlegroups.com")
- domain-{{domain}} (such as "domain-example.com")
- project-team-{{projectId}}
- allUsers
- allAuthenticatedUsers
*/
  entity?: string;

  // The name of the object to apply the access control to.
  object?: string;
}
export class ObjectAccessControl extends Resource {
  // The name of the bucket.
  public bucket?: string;

  /*
The entity holding the permission, in one of the following forms:
- user-{{userId}}
- user-{{email}} (such as "user-liz@example.com")
- group-{{groupId}}
- group-{{email}} (such as "group-example@googlegroups.com")
- domain-{{domain}} (such as "domain-example.com")
- project-team-{{projectId}}
- allUsers
- allAuthenticatedUsers
*/
  public entity?: string;

  // The ID for the entity
  public entityId?: string;

  // The content generation of the object, if applied to an object.
  public generation?: number;

  /*
The project team associated with the entity
Structure is documented below.
*/
  public projectTeams?: Array<storage_ObjectAccessControlProjectTeam>;

  /*
The access permission for the entity.
Possible values are: `OWNER`, `READER`.


- - -
*/
  public role?: string;

  // The domain associated with the entity.
  public domain?: string;

  // The email address associated with the entity.
  public email?: string;

  // The name of the object to apply the access control to.
  public object?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "role",
        "The access permission for the entity.\nPossible values are: `OWNER`, `READER`.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "The name of the bucket.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "entity",
        'The entity holding the permission, in one of the following forms:\n* user-{{userId}}\n* user-{{email}} (such as "user-liz@example.com")\n* group-{{groupId}}\n* group-{{email}} (such as "group-example@googlegroups.com")\n* domain-{{domain}} (such as "domain-example.com")\n* project-team-{{projectId}}\n* allUsers\n* allAuthenticatedUsers',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "object",
        "The name of the object to apply the access control to.",
        [],
        true,
        false,
      ),
    ];
  }
}
