import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudrun_ServiceTemplateMetadata,
  cloudrun_ServiceTemplateMetadata_GetTypes,
} from "./cloudrun_ServiceTemplateMetadata";
import {
  cloudrun_ServiceTemplateSpec,
  cloudrun_ServiceTemplateSpec_GetTypes,
} from "./cloudrun_ServiceTemplateSpec";

export interface cloudrun_ServiceTemplate {
  /*
Optional metadata for this Revision, including labels and annotations.
Name will be generated by the Configuration. To set minimum instances
for this revision, use the "autoscaling.knative.dev/minScale" annotation
key. To set maximum instances for this revision, use the
"autoscaling.knative.dev/maxScale" annotation key. To set Cloud SQL
connections for the revision, use the "run.googleapis.com/cloudsql-instances"
annotation key.
Structure is documented below.
*/
  metadata?: cloudrun_ServiceTemplateMetadata;

  /*
RevisionSpec holds the desired state of the Revision (from the client).
Structure is documented below.
*/
  spec?: cloudrun_ServiceTemplateSpec;
}

export function cloudrun_ServiceTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "metadata",
      'Optional metadata for this Revision, including labels and annotations.\nName will be generated by the Configuration. To set minimum instances\nfor this revision, use the "autoscaling.knative.dev/minScale" annotation\nkey. To set maximum instances for this revision, use the\n"autoscaling.knative.dev/maxScale" annotation key. To set Cloud SQL\nconnections for the revision, use the "run.googleapis.com/cloudsql-instances"\nannotation key.\nStructure is documented below.',
      cloudrun_ServiceTemplateMetadata_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "spec",
      "RevisionSpec holds the desired state of the Revision (from the client).\nStructure is documented below.",
      cloudrun_ServiceTemplateSpec_GetTypes(),
      false,
      false,
    ),
  ];
}
