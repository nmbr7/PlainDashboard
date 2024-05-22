import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_ModelPrimaryContainer,
  sagemaker_ModelPrimaryContainer_GetTypes,
} from "../types/sagemaker_ModelPrimaryContainer";
import {
  sagemaker_ModelVpcConfig,
  sagemaker_ModelVpcConfig_GetTypes,
} from "../types/sagemaker_ModelVpcConfig";
import {
  sagemaker_ModelContainer,
  sagemaker_ModelContainer_GetTypes,
} from "../types/sagemaker_ModelContainer";
import {
  sagemaker_ModelInferenceExecutionConfig,
  sagemaker_ModelInferenceExecutionConfig_GetTypes,
} from "../types/sagemaker_ModelInferenceExecutionConfig";

export interface ModelArgs {
  // The name of the model (must be unique). If omitted, this provider will assign a random, unique name.
  name?: string;

  // The primary docker image containing inference code that is used when the model is deployed for predictions.  If not specified, the `container` argument is required. Fields are documented below.
  primaryContainer?: sagemaker_ModelPrimaryContainer;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The `primary_container` and `container` block both support:
*/
  tags?: Map<string, string>;

  // Specifies the VPC that you want your model to connect to. VpcConfig is used in hosting services and in batch transform.
  vpcConfig?: sagemaker_ModelVpcConfig;

  // Specifies containers in the inference pipeline. If not specified, the `primary_container` argument is required. Fields are documented below.
  containers?: Array<sagemaker_ModelContainer>;

  // Isolates the model container. No inbound or outbound network calls can be made to or from the model container.
  enableNetworkIsolation?: boolean;

  // A role that SageMaker can assume to access model artifacts and docker images for deployment.
  executionRoleArn?: string;

  // Specifies details of how containers in a multi-container endpoint are called. see Inference Execution Config.
  inferenceExecutionConfig?: sagemaker_ModelInferenceExecutionConfig;
}
export class Model extends Resource {
  // A role that SageMaker can assume to access model artifacts and docker images for deployment.
  public executionRoleArn?: string;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The `primary_container` and `container` block both support:
*/
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Specifies the VPC that you want your model to connect to. VpcConfig is used in hosting services and in batch transform.
  public vpcConfig?: sagemaker_ModelVpcConfig;

  // The name of the model (must be unique). If omitted, this provider will assign a random, unique name.
  public name?: string;

  // The primary docker image containing inference code that is used when the model is deployed for predictions.  If not specified, the `container` argument is required. Fields are documented below.
  public primaryContainer?: sagemaker_ModelPrimaryContainer;

  // The Amazon Resource Name (ARN) assigned by AWS to this model.
  public arn?: string;

  // Specifies containers in the inference pipeline. If not specified, the `primary_container` argument is required. Fields are documented below.
  public containers?: Array<sagemaker_ModelContainer>;

  // Isolates the model container. No inbound or outbound network calls can be made to or from the model container.
  public enableNetworkIsolation?: boolean;

  // Specifies details of how containers in a multi-container endpoint are called. see Inference Execution Config.
  public inferenceExecutionConfig?: sagemaker_ModelInferenceExecutionConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\nThe `primary_container` and `container` block both support:",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcConfig",
        "Specifies the VPC that you want your model to connect to. VpcConfig is used in hosting services and in batch transform.",
        sagemaker_ModelVpcConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "containers",
        "Specifies containers in the inference pipeline. If not specified, the `primary_container` argument is required. Fields are documented below.",
        sagemaker_ModelContainer_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableNetworkIsolation",
        "Isolates the model container. No inbound or outbound network calls can be made to or from the model container.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "executionRoleArn",
        "A role that SageMaker can assume to access model artifacts and docker images for deployment.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "inferenceExecutionConfig",
        "Specifies details of how containers in a multi-container endpoint are called. see Inference Execution Config.",
        sagemaker_ModelInferenceExecutionConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the model (must be unique). If omitted, this provider will assign a random, unique name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "primaryContainer",
        "The primary docker image containing inference code that is used when the model is deployed for predictions.  If not specified, the `container` argument is required. Fields are documented below.",
        sagemaker_ModelPrimaryContainer_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
