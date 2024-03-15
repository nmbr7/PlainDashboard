import { PreventionInspectTemplateInspectConfigCustomInfoTypeInfoTypeSensitivityScore } from "./PreventionInspectTemplateInspectConfigCustomInfoTypeInfoTypeSensitivityScore";

export interface PreventionInspectTemplateInspectConfigCustomInfoTypeInfoType {
  // Version name for this InfoType.
  Version?: string;

  /*
Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names
listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
*/
  Name?: string;

  /*
Optional custom sensitivity for this InfoType. This only applies to data profiling.
Structure is documented below.
*/
  SensitivityScore?: PreventionInspectTemplateInspectConfigCustomInfoTypeInfoTypeSensitivityScore;
}
