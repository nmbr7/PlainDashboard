import { SubscriptionPushConfigNoWrapper } from "./SubscriptionPushConfigNoWrapper";
import { SubscriptionPushConfigOidcToken } from "./SubscriptionPushConfigOidcToken";

export interface SubscriptionPushConfig {
  /*
Endpoint configuration attributes.
Every endpoint has a set of API supported attributes that can
be used to control different aspects of the message delivery.
The currently supported attribute is x-goog-version, which you
can use to change the format of the pushed message. This
attribute indicates the version of the data expected by
the endpoint. This controls the shape of the pushed message
(i.e., its fields and metadata). The endpoint version is
based on the version of the Pub/Sub API.
If not present during the subscriptions.create call,
it will default to the version of the API used to make
such call. If not present during a subscriptions.modifyPushConfig
call, its value will not be changed. subscriptions.get
calls will always return a valid version, even if the
subscription was created without this attribute.
The possible values for this attribute are:
- v1beta1: uses the push format defined in the v1beta1 Pub/Sub API.
- v1 or v1beta2: uses the push format defined in the v1 Pub/Sub API.
*/
  Attributes?: Map<string, string>;

  /*
When set, the payload to the push endpoint is not wrapped.Sets the
`data` field as the HTTP body for delivery.
Structure is documented below.
*/
  NoWrapper?: SubscriptionPushConfigNoWrapper;

  /*
If specified, Pub/Sub will generate and attach an OIDC JWT token as
an Authorization header in the HTTP request for every pushed message.
Structure is documented below.
*/
  OidcToken?: SubscriptionPushConfigOidcToken;

  /*
A URL locating the endpoint to which messages should be pushed.
For example, a Webhook endpoint might use
"https://example.com/push".
*/
  PushEndpoint?: string;
}
