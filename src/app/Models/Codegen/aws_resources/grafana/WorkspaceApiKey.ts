import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface WorkspaceApiKeyArgs {
  // Specifies the permission level of the API key. Valid values are `VIEWER`, `EDITOR`, or `ADMIN`.
  keyRole?: string;

  // Specifies the time in seconds until the API key expires. Keys can be valid for up to 30 days.
  secondsToLive?: number;

  // The ID of the workspace that the API key is valid for.
  workspaceId?: string;

  // Specifies the name of the API key. Key names must be unique to the workspace.
  keyName?: string;
}
export class WorkspaceApiKey extends Resource {
  // The key token in JSON format. Use this value as a bearer token to authenticate HTTP requests to the workspace.
  public key?: string;

  // Specifies the name of the API key. Key names must be unique to the workspace.
  public keyName?: string;

  // Specifies the permission level of the API key. Valid values are `VIEWER`, `EDITOR`, or `ADMIN`.
  public keyRole?: string;

  // Specifies the time in seconds until the API key expires. Keys can be valid for up to 30 days.
  public secondsToLive?: number;

  // The ID of the workspace that the API key is valid for.
  public workspaceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "keyName",
        "Specifies the name of the API key. Key names must be unique to the workspace.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "keyRole",
        "Specifies the permission level of the API key. Valid values are `VIEWER`, `EDITOR`, or `ADMIN`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "secondsToLive",
        "Specifies the time in seconds until the API key expires. Keys can be valid for up to 30 days.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "workspaceId",
        "The ID of the workspace that the API key is valid for.",
        [],
        true,
        true,
      ),
    ];
  }
}
