import Endpoints from "../Constants/Endpoints";

export const getOAuthLink = () => {
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const SCOPE = ['playlist-read-private'].join(' ');

  const url = new URL(Endpoints.OAUTH_AUTHORIZATION);
  url.searchParams.append('client_id', CLIENT_ID);
  url.searchParams.append('redirect_uri', REDIRECT_URI);
  url.searchParams.append('response_type', 'token');
  url.searchParams.append('show_dialog', 'true');
  url.searchParams.append('scope', SCOPE);

  return url;
};
