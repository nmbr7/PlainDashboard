import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface eks_NodeGroupRemoteAccess {
  // EC2 Key Pair name that provides access for remote communication with the worker nodes in the EKS Node Group. If you specify this configuration, but do not specify `source_security_group_ids` when you create an EKS Node Group, either port 3389 for Windows, or port 22 for all other operating systems is opened on the worker nodes to the Internet (0.0.0.0/0). For Windows nodes, this will allow you to use RDP, for all others this allows you to SSH into the worker nodes.
  ec2SshKey?: string;

  // Set of EC2 Security Group IDs to allow SSH access (port 22) from on the worker nodes. If you specify `ec2_ssh_key`, but do not specify this configuration when you create an EKS Node Group, port 22 on the worker nodes is opened to the Internet (0.0.0.0/0).
  sourceSecurityGroupIds?: Array<string>;
}

export function eks_NodeGroupRemoteAccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ec2SshKey",
      "EC2 Key Pair name that provides access for remote communication with the worker nodes in the EKS Node Group. If you specify this configuration, but do not specify `source_security_group_ids` when you create an EKS Node Group, either port 3389 for Windows, or port 22 for all other operating systems is opened on the worker nodes to the Internet (0.0.0.0/0). For Windows nodes, this will allow you to use RDP, for all others this allows you to SSH into the worker nodes.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourceSecurityGroupIds",
      "Set of EC2 Security Group IDs to allow SSH access (port 22) from on the worker nodes. If you specify `ec2_ssh_key`, but do not specify this configuration when you create an EKS Node Group, port 22 on the worker nodes is opened to the Internet (0.0.0.0/0).",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
