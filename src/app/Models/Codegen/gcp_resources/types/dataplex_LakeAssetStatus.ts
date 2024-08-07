import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataplex_LakeAssetStatus {
  // Number of active assets.
  activeAssets?: number;

  // Number of assets that are in process of updating the security policy on attached resources.
  securityPolicyApplyingAssets?: number;

  // Output only. The time when the lake was last updated.
  updateTime?: string;
}

export function dataplex_LakeAssetStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "activeAssets",
      "Number of active assets.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "securityPolicyApplyingAssets",
      "Number of assets that are in process of updating the security policy on attached resources.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "updateTime",
      "Output only. The time when the lake was last updated.",
      [],
      false,
      false,
    ),
  ];
}
