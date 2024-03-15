import { AiEndpointDeployedModelPrivateEndpoint } from "./AiEndpointDeployedModelPrivateEndpoint";
import { AiEndpointDeployedModelAutomaticResource } from "./AiEndpointDeployedModelAutomaticResource";
import { AiEndpointDeployedModelDedicatedResource } from "./AiEndpointDeployedModelDedicatedResource";

export interface AiEndpointDeployedModel {
  /*
(Output)
The ID of the DeployedModel. If not provided upon deployment, Vertex AI will generate a value for this ID. This value should be 1-10 characters, and valid characters are /[0-9]/.
*/
  Id?: string;

  /*
(Output)
Output only. The version ID of the model that is deployed.
*/
  ModelVersionId?: string;

  /*
(Output)
Output only. Provide paths for users to send predict/explain/health requests directly to the deployed model services running on Cloud via private services access. This field is populated if network is configured.
Structure is documented below.
*/
  PrivateEndpoints?: Array<AiEndpointDeployedModelPrivateEndpoint>;

  /*
(Output)
The service account that the DeployedModel's container runs as. Specify the email address of the service account. If this service account is not specified, the container runs as a service account that doesn't have access to the resource project. Users deploying the Model must have the `iam.serviceAccounts.actAs` permission on this service account.
*/
  ServiceAccount?: string;

  /*
(Output)
A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration.
Structure is documented below.
*/
  AutomaticResources?: Array<AiEndpointDeployedModelAutomaticResource>;

  /*
(Output)
Output only. Timestamp when the DeployedModel was created.
*/
  CreateTime?: string;

  // Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.
  DisplayName?: string;

  /*
(Output)
If true, the container of the DeployedModel instances will send `stderr` and `stdout` streams to Stackdriver Logging. Only supported for custom-trained Models and AutoML Tabular Models.
*/
  EnableContainerLogging?: boolean;

  /*
(Output)
A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration.
Structure is documented below.
*/
  DedicatedResources?: Array<AiEndpointDeployedModelDedicatedResource>;

  /*
(Output)
These logs are like standard server access logs, containing information like timestamp and latency for each prediction request. Note that Stackdriver logs may incur a cost, especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option.
*/
  EnableAccessLogging?: boolean;

  /*
(Output)
The name of the Model that this is the deployment of. Note that the Model may be in a different location than the DeployedModel's Endpoint.
*/
  Model?: string;

  /*
(Output)
The resource name of the shared DeploymentResourcePool to deploy on. Format: projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}
*/
  SharedResources?: string;
}
