import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificate,
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificate_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificate";
import {
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidation,
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidation_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidation";

export interface appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTl {
  //
  certificates?: Array<appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificate>;

  //
  enforce?: boolean;

  //
  ports?: Array<number>;

  //
  validations?: Array<appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidation>;
}

export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "certificates",
      "",
      () =>
        appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlCertificate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "enforce", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "ports",
      "",
      () => InputType_Number_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "validations",
      "",
      () =>
        appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidation_GetTypes(),
      true,
      false,
    ),
  ];
}
