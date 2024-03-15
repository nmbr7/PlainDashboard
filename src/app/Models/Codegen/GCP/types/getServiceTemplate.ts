import { getServiceTemplateMetadata } from "./getServiceTemplateMetadata";
import { getServiceTemplateSpec } from "./getServiceTemplateSpec";

export interface getServiceTemplate {
  /*
Optional metadata for this Revision, including labels and annotations.
Name will be generated by the Configuration. To set minimum instances
for this revision, use the "autoscaling.knative.dev/minScale" annotation
key. To set maximum instances for this revision, use the
"autoscaling.knative.dev/maxScale" annotation key. To set Cloud SQL
connections for the revision, use the "run.googleapis.com/cloudsql-instances"
annotation key.
*/
  Metadatas?: Array<getServiceTemplateMetadata>;

  // RevisionSpec holds the desired state of the Revision (from the client).
  Specs?: Array<getServiceTemplateSpec>;
}
