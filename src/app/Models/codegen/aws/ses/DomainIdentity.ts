import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DomainIdentityArgs {
  // The domain name to assign to SES
  domain?: string;
}
export class DomainIdentity extends DS_Resource {
  // The ARN of the domain identity.
  public arn?: string;

  // The domain name to assign to SES
  public domain?: string;

  // A code which when added to the domain as a TXT record will signal to SES that the owner of the domain has authorized SES to act on their behalf. The domain identity will be in state "verification pending" until this is done. See the With Route53 Record example for how this might be achieved when the domain is hosted in Route 53 and managed by this provider.  Find out more about verifying domains in Amazon SES in the [AWS SES docs](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html).
  public verificationToken?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "domain",
        "The domain name to assign to SES",
        () => [],
        true,
        true,
      ),
    ];
  }
}
