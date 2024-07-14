import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ecs_ServicePlacementConstraint,
  ecs_ServicePlacementConstraint_GetTypes,
} from "../types/ecs_ServicePlacementConstraint";
import {
  ecs_ServiceAlarms,
  ecs_ServiceAlarms_GetTypes,
} from "../types/ecs_ServiceAlarms";
import {
  ecs_ServiceDeploymentController,
  ecs_ServiceDeploymentController_GetTypes,
} from "../types/ecs_ServiceDeploymentController";
import {
  ecs_ServiceServiceConnectConfiguration,
  ecs_ServiceServiceConnectConfiguration_GetTypes,
} from "../types/ecs_ServiceServiceConnectConfiguration";
import {
  ecs_ServiceCapacityProviderStrategy,
  ecs_ServiceCapacityProviderStrategy_GetTypes,
} from "../types/ecs_ServiceCapacityProviderStrategy";
import {
  ecs_ServiceOrderedPlacementStrategy,
  ecs_ServiceOrderedPlacementStrategy_GetTypes,
} from "../types/ecs_ServiceOrderedPlacementStrategy";
import {
  ecs_ServiceServiceRegistries,
  ecs_ServiceServiceRegistries_GetTypes,
} from "../types/ecs_ServiceServiceRegistries";
import {
  ecs_ServiceDeploymentCircuitBreaker,
  ecs_ServiceDeploymentCircuitBreaker_GetTypes,
} from "../types/ecs_ServiceDeploymentCircuitBreaker";
import {
  ecs_ServiceLoadBalancer,
  ecs_ServiceLoadBalancer_GetTypes,
} from "../types/ecs_ServiceLoadBalancer";
import {
  ecs_ServiceNetworkConfiguration,
  ecs_ServiceNetworkConfiguration_GetTypes,
} from "../types/ecs_ServiceNetworkConfiguration";

export interface ServiceArgs {
  // Capacity provider strategies to use for the service. Can be one or more. These can be updated without destroying and recreating the service only if `force_new_deployment = true` and not changing from 0 `capacity_provider_strategy` blocks to greater than 0, or vice versa. See below. Conflicts with `launch_type`.
  capacityProviderStrategies?: Array<ecs_ServiceCapacityProviderStrategy>;

  // Lower limit (as a percentage of the service's desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment.
  deploymentMinimumHealthyPercent?: number;

  // Number of instances of the task definition to place and keep running. Defaults to 0. Do not specify if using the `DAEMON` scheduling strategy.
  desiredCount?: number;

  // Enable to force a new task deployment of the service. This can be used to update tasks to use a newer Docker image with same image/tag combination (e.g., `myimage:latest`), roll Fargate tasks onto a newer platform version, or immediately deploy `ordered_placement_strategy` and `placement_constraints` updates.
  forceNewDeployment?: boolean;

  // ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the `awsvpc` network mode. If using `awsvpc` network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here.
  iamRole?: string;

  // Launch type on which to run your service. The valid values are `EC2`, `FARGATE`, and `EXTERNAL`. Defaults to `EC2`. Conflicts with `capacity_provider_strategy`.
  launchType?: string;

  // Configuration block for load balancers. See below.
  loadBalancers?: Array<ecs_ServiceLoadBalancer>;

  // Service level strategy rules that are taken into consideration during task placement. List from top to bottom in order of precedence. Updates to this configuration will take effect next task deployment unless `force_new_deployment` is enabled. The maximum number of `ordered_placement_strategy` blocks is `5`. See below.
  orderedPlacementStrategies?: Array<ecs_ServiceOrderedPlacementStrategy>;

  // Rules that are taken into consideration during task placement. Updates to this configuration will take effect next task deployment unless `force_new_deployment` is enabled. Maximum number of `placement_constraints` is `10`. See below.
  placementConstraints?: Array<ecs_ServicePlacementConstraint>;

  // Scheduling strategy to use for the service. The valid values are `REPLICA` and `DAEMON`. Defaults to `REPLICA`. Note that [-Tasks using the Fargate launch type or the `CODE_DEPLOY` or `EXTERNAL` deployment controller types don't support the `DAEMON` scheduling strategy-](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html).
  schedulingStrategy?: string;

  // ARN of an ECS cluster.
  cluster?: string;

  // Upper limit (as a percentage of the service's desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
  deploymentMaximumPercent?: number;

  // Specifies whether to enable Amazon ECS Exec for the tasks within the service.
  enableExecuteCommand?: boolean;

  // Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 2147483647. Only valid for services configured to use load balancers.
  healthCheckGracePeriodSeconds?: number;

  /*
Name of the service (up to 255 letters, numbers, hyphens, and underscores)

The following arguments are optional:
*/
  name?: string;

  // Network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes. See below.
  networkConfiguration?: ecs_ServiceNetworkConfiguration;

  // Specifies whether to propagate the tags from the task definition or the service to the tasks. The valid values are `SERVICE` and `TASK_DEFINITION`.
  propagateTags?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Information about the CloudWatch alarms. See below.
  alarms?: ecs_ServiceAlarms;

  // Family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service. Required unless using the `EXTERNAL` deployment controller. If a revision is not specified, the latest `ACTIVE` revision is used.
  taskDefinition?: string;

  // If `true`, this provider will wait for the service to reach a steady state (like [`aws ecs wait services-stable`](https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html)) before continuing. Default `false`.
  waitForSteadyState?: boolean;

  // Configuration block for deployment controller configuration. See below.
  deploymentController?: ecs_ServiceDeploymentController;

  // Specifies whether to enable Amazon ECS managed tags for the tasks within the service.
  enableEcsManagedTags?: boolean;

  // Platform version on which to run your service. Only applicable for `launch_type` set to `FARGATE`. Defaults to `LATEST`. More information about Fargate platform versions can be found in the [AWS ECS User Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html).
  platformVersion?: string;

  // Service discovery registries for the service. The maximum number of `service_registries` blocks is `1`. See below.
  serviceRegistries?: ecs_ServiceServiceRegistries;

  // Map of arbitrary keys and values that, when changed, will trigger an in-place update (redeployment). Useful with `plantimestamp()`. See example above.
  triggers?: Map<string, string>;

  // Configuration block for deployment circuit breaker. See below.
  deploymentCircuitBreaker?: ecs_ServiceDeploymentCircuitBreaker;

  // The ECS Service Connect configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace. See below.
  serviceConnectConfiguration?: ecs_ServiceServiceConnectConfiguration;
}
export class Service extends Resource {
  // ARN of an ECS cluster.
  public cluster?: string;

  // ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the `awsvpc` network mode. If using `awsvpc` network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here.
  public iamRole?: string;

  // Configuration block for load balancers. See below.
  public loadBalancers?: Array<ecs_ServiceLoadBalancer>;

  // Service level strategy rules that are taken into consideration during task placement. List from top to bottom in order of precedence. Updates to this configuration will take effect next task deployment unless `force_new_deployment` is enabled. The maximum number of `ordered_placement_strategy` blocks is `5`. See below.
  public orderedPlacementStrategies?: Array<ecs_ServiceOrderedPlacementStrategy>;

  // Rules that are taken into consideration during task placement. Updates to this configuration will take effect next task deployment unless `force_new_deployment` is enabled. Maximum number of `placement_constraints` is `10`. See below.
  public placementConstraints?: Array<ecs_ServicePlacementConstraint>;

  // Map of arbitrary keys and values that, when changed, will trigger an in-place update (redeployment). Useful with `plantimestamp()`. See example above.
  public triggers?: Map<string, string>;

  // Lower limit (as a percentage of the service's desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment.
  public deploymentMinimumHealthyPercent?: number;

  // Network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes. See below.
  public networkConfiguration?: ecs_ServiceNetworkConfiguration;

  // The ECS Service Connect configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace. See below.
  public serviceConnectConfiguration?: ecs_ServiceServiceConnectConfiguration;

  // Information about the CloudWatch alarms. See below.
  public alarms?: ecs_ServiceAlarms;

  // Specifies whether to enable Amazon ECS Exec for the tasks within the service.
  public enableExecuteCommand?: boolean;

  // Service discovery registries for the service. The maximum number of `service_registries` blocks is `1`. See below.
  public serviceRegistries?: ecs_ServiceServiceRegistries;

  // Configuration block for deployment controller configuration. See below.
  public deploymentController?: ecs_ServiceDeploymentController;

  // Upper limit (as a percentage of the service's desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
  public deploymentMaximumPercent?: number;

  // Enable to force a new task deployment of the service. This can be used to update tasks to use a newer Docker image with same image/tag combination (e.g., `myimage:latest`), roll Fargate tasks onto a newer platform version, or immediately deploy `ordered_placement_strategy` and `placement_constraints` updates.
  public forceNewDeployment?: boolean;

  // Family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service. Required unless using the `EXTERNAL` deployment controller. If a revision is not specified, the latest `ACTIVE` revision is used.
  public taskDefinition?: string;

  // Capacity provider strategies to use for the service. Can be one or more. These can be updated without destroying and recreating the service only if `force_new_deployment = true` and not changing from 0 `capacity_provider_strategy` blocks to greater than 0, or vice versa. See below. Conflicts with `launch_type`.
  public capacityProviderStrategies?: Array<ecs_ServiceCapacityProviderStrategy>;

  // Configuration block for deployment circuit breaker. See below.
  public deploymentCircuitBreaker?: ecs_ServiceDeploymentCircuitBreaker;

  // Scheduling strategy to use for the service. The valid values are `REPLICA` and `DAEMON`. Defaults to `REPLICA`. Note that [-Tasks using the Fargate launch type or the `CODE_DEPLOY` or `EXTERNAL` deployment controller types don't support the `DAEMON` scheduling strategy-](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html).
  public schedulingStrategy?: string;

  /*
Name of the service (up to 255 letters, numbers, hyphens, and underscores)

The following arguments are optional:
*/
  public name?: string;

  // If `true`, this provider will wait for the service to reach a steady state (like [`aws ecs wait services-stable`](https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html)) before continuing. Default `false`.
  public waitForSteadyState?: boolean;

  // Platform version on which to run your service. Only applicable for `launch_type` set to `FARGATE`. Defaults to `LATEST`. More information about Fargate platform versions can be found in the [AWS ECS User Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html).
  public platformVersion?: string;

  // Specifies whether to propagate the tags from the task definition or the service to the tasks. The valid values are `SERVICE` and `TASK_DEFINITION`.
  public propagateTags?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Number of instances of the task definition to place and keep running. Defaults to 0. Do not specify if using the `DAEMON` scheduling strategy.
  public desiredCount?: number;

  // Specifies whether to enable Amazon ECS managed tags for the tasks within the service.
  public enableEcsManagedTags?: boolean;

  // Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 2147483647. Only valid for services configured to use load balancers.
  public healthCheckGracePeriodSeconds?: number;

  // Launch type on which to run your service. The valid values are `EC2`, `FARGATE`, and `EXTERNAL`. Defaults to `EC2`. Conflicts with `capacity_provider_strategy`.
  public launchType?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "capacityProviderStrategies",
        "Capacity provider strategies to use for the service. Can be one or more. These can be updated without destroying and recreating the service only if `force_new_deployment = true` and not changing from 0 `capacity_provider_strategy` blocks to greater than 0, or vice versa. See below. Conflicts with `launch_type`.",
        ecs_ServiceCapacityProviderStrategy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "desiredCount",
        "Number of instances of the task definition to place and keep running. Defaults to 0. Do not specify if using the `DAEMON` scheduling strategy.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "launchType",
        "Launch type on which to run your service. The valid values are `EC2`, `FARGATE`, and `EXTERNAL`. Defaults to `EC2`. Conflicts with `capacity_provider_strategy`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "loadBalancers",
        "Configuration block for load balancers. See below.",
        ecs_ServiceLoadBalancer_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "deploymentController",
        "Configuration block for deployment controller configuration. See below.",
        ecs_ServiceDeploymentController_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableExecuteCommand",
        "Specifies whether to enable Amazon ECS Exec for the tasks within the service.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceRegistries",
        "Service discovery registries for the service. The maximum number of `service_registries` blocks is `1`. See below.",
        ecs_ServiceServiceRegistries_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "alarms",
        "Information about the CloudWatch alarms. See below.",
        ecs_ServiceAlarms_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "orderedPlacementStrategies",
        "Service level strategy rules that are taken into consideration during task placement. List from top to bottom in order of precedence. Updates to this configuration will take effect next task deployment unless `force_new_deployment` is enabled. The maximum number of `ordered_placement_strategy` blocks is `5`. See below.",
        ecs_ServiceOrderedPlacementStrategy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableEcsManagedTags",
        "Specifies whether to enable Amazon ECS managed tags for the tasks within the service.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "deploymentCircuitBreaker",
        "Configuration block for deployment circuit breaker. See below.",
        ecs_ServiceDeploymentCircuitBreaker_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "waitForSteadyState",
        "If `true`, this provider will wait for the service to reach a steady state (like [`aws ecs wait services-stable`](https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html)) before continuing. Default `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "triggers",
        "Map of arbitrary keys and values that, when changed, will trigger an in-place update (redeployment). Useful with `plantimestamp()`. See example above.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceConnectConfiguration",
        "The ECS Service Connect configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace. See below.",
        ecs_ServiceServiceConnectConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "iamRole",
        "ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the `awsvpc` network mode. If using `awsvpc` network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "deploymentMaximumPercent",
        "Upper limit (as a percentage of the service's desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "healthCheckGracePeriodSeconds",
        "Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 2147483647. Only valid for services configured to use load balancers.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "propagateTags",
        "Specifies whether to propagate the tags from the task definition or the service to the tasks. The valid values are `SERVICE` and `TASK_DEFINITION`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "taskDefinition",
        "Family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service. Required unless using the `EXTERNAL` deployment controller. If a revision is not specified, the latest `ACTIVE` revision is used.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the service (up to 255 letters, numbers, hyphens, and underscores)\n\nThe following arguments are optional:",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkConfiguration",
        "Network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes. See below.",
        ecs_ServiceNetworkConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "platformVersion",
        "Platform version on which to run your service. Only applicable for `launch_type` set to `FARGATE`. Defaults to `LATEST`. More information about Fargate platform versions can be found in the [AWS ECS User Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "deploymentMinimumHealthyPercent",
        "Lower limit (as a percentage of the service's desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceNewDeployment",
        "Enable to force a new task deployment of the service. This can be used to update tasks to use a newer Docker image with same image/tag combination (e.g., `myimage:latest`), roll Fargate tasks onto a newer platform version, or immediately deploy `ordered_placement_strategy` and `placement_constraints` updates.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "placementConstraints",
        "Rules that are taken into consideration during task placement. Updates to this configuration will take effect next task deployment unless `force_new_deployment` is enabled. Maximum number of `placement_constraints` is `10`. See below.",
        ecs_ServicePlacementConstraint_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "schedulingStrategy",
        "Scheduling strategy to use for the service. The valid values are `REPLICA` and `DAEMON`. Defaults to `REPLICA`. Note that [*Tasks using the Fargate launch type or the `CODE_DEPLOY` or `EXTERNAL` deployment controller types don't support the `DAEMON` scheduling strategy*](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cluster",
        "ARN of an ECS cluster.",
        [],
        false,
        true,
      ),
    ];
  }
}
