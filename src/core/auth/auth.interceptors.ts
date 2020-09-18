import { AuthInterceptors, OauthGithubAccount, OauthGithubProfile, OauthGithubUser } from '@/core/auth/types';
import { allowedUsers } from '@/config/users.config';
import is from '@sindresorhus/is';

export class GithubAuthInterceptors implements AuthInterceptors {
  private userDb: typeof allowedUsers;
  constructor() {
    this.userDb = allowedUsers;
  }

  onSignin = async (
    user: OauthGithubUser,
    account: OauthGithubAccount,
    profile: OauthGithubProfile
  ): Promise<boolean> => {
    const provider = account.provider.toLowerCase();
    if (provider !== 'github') {
      console.log(`Error: Provider ${profile} not supported`);
      return false;
    }
    const users = this.userDb.github;
    if (!is.array(users)) {
      console.log(`Error: Invalid configuration, users must be an array`);
      return false;
    }
    const githubUsername = profile.login;

    if (users.includes(githubUsername)) {
      return true;
    }
    return false;
  };
}
