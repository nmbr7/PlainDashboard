import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface MailFromArgs {
  // The action that you want Amazon SES to take if it cannot successfully read the required MX record when you send an email. Defaults to `UseDefaultValue`. See the [SES API documentation](https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityMailFromDomain.html) for more information.
  behaviorOnMxFailure?: string;

  // Verified domain name or email identity to generate DKIM tokens for.
  domain?: string;

  /*
Subdomain (of above domain) which is to be used as MAIL FROM address (Required for DMARC validation)

The following arguments are optional:
*/
  mailFromDomain?: string;
}
export class MailFrom extends Resource {
  /*
Subdomain (of above domain) which is to be used as MAIL FROM address (Required for DMARC validation)

The following arguments are optional:
*/
  public mailFromDomain?: string;

  // The action that you want Amazon SES to take if it cannot successfully read the required MX record when you send an email. Defaults to `UseDefaultValue`. See the [SES API documentation](https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityMailFromDomain.html) for more information.
  public behaviorOnMxFailure?: string;

  // Verified domain name or email identity to generate DKIM tokens for.
  public domain?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "behaviorOnMxFailure",
        "The action that you want Amazon SES to take if it cannot successfully read the required MX record when you send an email. Defaults to `UseDefaultValue`. See the [SES API documentation](https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityMailFromDomain.html) for more information.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domain",
        "Verified domain name or email identity to generate DKIM tokens for.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "mailFromDomain",
        "Subdomain (of above domain) which is to be used as MAIL FROM address (Required for DMARC validation)\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
    ];
  }
}
