import { getTriggerBitbucketServerTriggerConfigPullRequest } from "./getTriggerBitbucketServerTriggerConfigPullRequest";
import { getTriggerBitbucketServerTriggerConfigPush } from "./getTriggerBitbucketServerTriggerConfigPush";

export interface getTriggerBitbucketServerTriggerConfig {
  /*
Slug of the repository. A repository slug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL.
For example, if the repository name is 'test repo', in the URL it would become 'test-repo' as in https://mybitbucket.server/projects/TEST/repos/test-repo.
*/
  RepoSlug?: string;

  // The Bitbucket server config resource that this trigger config maps to.
  BitbucketServerConfigResource?: string;

  // Key of the project that the repo is in. For example: The key for https://mybitbucket.server/projects/TEST/repos/test-repo is "TEST".
  ProjectKey?: string;

  // Filter to match changes in pull requests.
  PullRequests?: Array<getTriggerBitbucketServerTriggerConfigPullRequest>;

  // Filter to match changes in refs like branches, tags.
  Pushes?: Array<getTriggerBitbucketServerTriggerConfigPush>;
}
