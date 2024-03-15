import { OrganizationCustomModuleCustomConfigPredicate } from "./OrganizationCustomModuleCustomConfigPredicate";
import { OrganizationCustomModuleCustomConfigResourceSelector } from "./OrganizationCustomModuleCustomConfigResourceSelector";
import { OrganizationCustomModuleCustomConfigCustomOutput } from "./OrganizationCustomModuleCustomConfigCustomOutput";

export interface OrganizationCustomModuleCustomConfig {
  /*
The CEL expression to evaluate to produce findings. When the expression evaluates
to true against a resource, a finding is generated.
Structure is documented below.
*/
  Predicate?: OrganizationCustomModuleCustomConfigPredicate;

  /*
An explanation of the recommended steps that security teams can take to resolve
the detected issue. This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.
*/
  Recommendation?: string;

  /*
The resource types that the custom module operates on. Each custom module
can specify up to 5 resource types.
Structure is documented below.
*/
  ResourceSelector?: OrganizationCustomModuleCustomConfigResourceSelector;

  /*
The severity to assign to findings generated by the module.
Possible values are: `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`.
*/
  Severity?: string;

  /*
Custom output properties.
Structure is documented below.
*/
  CustomOutput?: OrganizationCustomModuleCustomConfigCustomOutput;

  /*
Text that describes the vulnerability or misconfiguration that the custom
module detects. This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.
*/
  Description?: string;
}
