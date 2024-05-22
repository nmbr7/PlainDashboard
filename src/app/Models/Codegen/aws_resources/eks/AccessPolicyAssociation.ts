import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  eks_AccessPolicyAssociationAccessScope,
  eks_AccessPolicyAssociationAccessScope_GetTypes,
} from "../types/eks_AccessPolicyAssociationAccessScope";

export interface AccessPolicyAssociationArgs {
  // The IAM Principal ARN which requires Authentication access to the EKS cluster.
  principalArn?: string;

  // The configuration block to determine the scope of the access. See `access_scope` Block below.
  accessScope?: eks_AccessPolicyAssociationAccessScope;

  // Name of the EKS Cluster.
  clusterName?: string;

  // The ARN of the access policy that you're associating.
  policyArn?: string;
}
export class AccessPolicyAssociation extends Resource {
  // Date and time in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) that the policy was associated.
  public associatedAt?: string;

  // Name of the EKS Cluster.
  public clusterName?: string;

  // Date and time in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) that the policy was updated.
  public modifiedAt?: string;

  // The ARN of the access policy that you're associating.
  public policyArn?: string;

  // The IAM Principal ARN which requires Authentication access to the EKS cluster.
  public principalArn?: string;

  // The configuration block to determine the scope of the access. See `access_scope` Block below.
  public accessScope?: eks_AccessPolicyAssociationAccessScope;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "clusterName",
        "Name of the EKS Cluster.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyArn",
        "The ARN of the access policy that you're associating.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "principalArn",
        "The IAM Principal ARN which requires Authentication access to the EKS cluster.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "accessScope",
        "The configuration block to determine the scope of the access. See `access_scope` Block below.",
        eks_AccessPolicyAssociationAccessScope_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
