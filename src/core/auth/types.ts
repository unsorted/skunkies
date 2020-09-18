type GenericObject = Record<string, unknown>;

export interface AuthInterceptors {
  onSignin(user: GenericObject, account: GenericObject, profile: GenericObject): Promise<boolean>;
}

export type OauthGithubUser = {
  name: string;
  email: string | null;
  image: string | null;
};

export type OauthGithubAccount = {
  provider: 'github';
  type: 'oauth';
  id: number;
  refreshToken?: string;
  accessToken: string;
  accessTokenExpires: string | null;
};

export type OauthGithubProfile = {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
} & Record<string, unknown>;
