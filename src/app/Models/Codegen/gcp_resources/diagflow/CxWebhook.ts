import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  diagflow_CxWebhookGenericWebService,
  diagflow_CxWebhookGenericWebService_GetTypes,
} from "../types/diagflow_CxWebhookGenericWebService";
import {
  diagflow_CxWebhookServiceDirectory,
  diagflow_CxWebhookServiceDirectory_GetTypes,
} from "../types/diagflow_CxWebhookServiceDirectory";

export interface CxWebhookArgs {
  // Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  securitySettings?: string;

  // Indicates if automatic spell correction is enabled in detect intent requests.
  enableSpellCorrection?: boolean;

  /*
Configuration for a generic web service.
Structure is documented below.
*/
  genericWebService?: diagflow_CxWebhookGenericWebService;

  // Determines whether this agent should log conversation queries.
  enableStackdriverLogging?: boolean;

  /*
The agent to create a webhook for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  parent?: string;

  /*
Configuration for a Service Directory service.
Structure is documented below.
*/
  serviceDirectory?: diagflow_CxWebhookServiceDirectory;

  // Webhook execution timeout.
  timeout?: string;

  // Indicates whether the webhook is disabled.
  disabled?: boolean;

  /*
The human-readable name of the webhook, unique within the agent.


- - -
*/
  displayName?: string;
}
export class CxWebhook extends Resource {
  /*
Configuration for a generic web service.
Structure is documented below.
*/
  public genericWebService?: diagflow_CxWebhookGenericWebService;

  /*
The unique identifier of the webhook.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
*/
  public name?: string;

  /*
Configuration for a Service Directory service.
Structure is documented below.
*/
  public serviceDirectory?: diagflow_CxWebhookServiceDirectory;

  // Name of the start flow in this agent. A start flow will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  public startFlow?: string;

  // Indicates whether the webhook is disabled.
  public disabled?: boolean;

  /*
The human-readable name of the webhook, unique within the agent.


- - -
*/
  public displayName?: string;

  /*
The agent to create a webhook for.
Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
*/
  public parent?: string;

  // Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  public securitySettings?: string;

  // Webhook execution timeout.
  public timeout?: string;

  // Indicates if automatic spell correction is enabled in detect intent requests.
  public enableSpellCorrection?: boolean;

  // Determines whether this agent should log conversation queries.
  public enableStackdriverLogging?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enableStackdriverLogging",
        "Determines whether this agent should log conversation queries.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The agent to create a webhook for.\nFormat: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The human-readable name of the webhook, unique within the agent.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "securitySettings",
        "Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableSpellCorrection",
        "Indicates if automatic spell correction is enabled in detect intent requests.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "timeout",
        "Webhook execution timeout.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disabled",
        "Indicates whether the webhook is disabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "genericWebService",
        "Configuration for a generic web service.\nStructure is documented below.",
        diagflow_CxWebhookGenericWebService_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceDirectory",
        "Configuration for a Service Directory service.\nStructure is documented below.",
        diagflow_CxWebhookServiceDirectory_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
