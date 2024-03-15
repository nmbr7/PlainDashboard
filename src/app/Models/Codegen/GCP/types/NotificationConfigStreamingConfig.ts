export interface NotificationConfigStreamingConfig {
  /*
Expression that defines the filter to apply across create/update
events of assets or findings as specified by the event type. The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.
Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.
The supported operators are:
- = for all value types.
- >, <, >=, <= for integer values.
- :, meaning substring matching, for strings.
The supported value types are:
- string literals in quotes.
- integer literals without quotes.
- boolean literals true and false without quotes.
See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

- - -
*/
  Filter?: string;
}
