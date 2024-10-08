import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudrun_getServiceTemplateMetadata,
  cloudrun_getServiceTemplateMetadata_GetTypes,
} from "./cloudrun_getServiceTemplateMetadata";
import {
  cloudrun_getServiceTemplateSpec,
  cloudrun_getServiceTemplateSpec_GetTypes,
} from "./cloudrun_getServiceTemplateSpec";

export interface cloudrun_getServiceTemplate {
  /*
Optional metadata for this Revision, including labels and annotations.
Name will be generated by the Configuration. To set minimum instances
for this revision, use the "autoscaling.knative.dev/minScale" annotation
key. To set maximum instances for this revision, use the
"autoscaling.knative.dev/maxScale" annotation key. To set Cloud SQL
connections for the revision, use the "run.googleapis.com/cloudsql-instances"
annotation key.
*/
  metadatas?: Array<cloudrun_getServiceTemplateMetadata>;

  // RevisionSpec holds the desired state of the Revision (from the client).
  specs?: Array<cloudrun_getServiceTemplateSpec>;
}

export function cloudrun_getServiceTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "metadatas",
      'Optional metadata for this Revision, including labels and annotations.\nName will be generated by the Configuration. To set minimum instances\nfor this revision, use the "autoscaling.knative.dev/minScale" annotation\nkey. To set maximum instances for this revision, use the\n"autoscaling.knative.dev/maxScale" annotation key. To set Cloud SQL\nconnections for the revision, use the "run.googleapis.com/cloudsql-instances"\nannotation key.',
      () => cloudrun_getServiceTemplateMetadata_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "specs",
      "RevisionSpec holds the desired state of the Revision (from the client).",
      () => cloudrun_getServiceTemplateSpec_GetTypes(),
      true,
      false,
    ),
  ];
}
