export interface NodeTemplateServerBinding {
  /*
Type of server binding policy. If `RESTART_NODE_ON_ANY_SERVER`,
nodes using this template will restart on any physical server
following a maintenance event.
If `RESTART_NODE_ON_MINIMAL_SERVER`, nodes using this template
will restart on the same physical server following a maintenance
event, instead of being live migrated to or restarted on a new
physical server. This option may be useful if you are using
software licenses tied to the underlying server characteristics
such as physical sockets or cores, to avoid the need for
additional licenses when maintenance occurs. However, VMs on such
nodes will experience outages while maintenance is applied.
Possible values are: `RESTART_NODE_ON_ANY_SERVER`, `RESTART_NODE_ON_MINIMAL_SERVERS`.
*/
  Type?: string;
}
