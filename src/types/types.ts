export interface MirrorDetail {
  distro: string;
  description: string;
  logo: string;
  http: string;
  https: string;
  arch: string[];
}

export interface IResponse {
  data: MirrorDetail[];
  admins: string[];
  url: string;
  email: string;
  sponsor: string;
  sponsor_url: string;
}
