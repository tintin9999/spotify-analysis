export default {
  OAUTH_AUTHORIZATION: 'https://accounts.spotify.com/authorize',
  GET_PUBLIC_PLAYLISTS: 'https://api.spotify.com/v1/me/playlists',
  GET_PLAYLIST_TRACKS: (plID?: string) => `https://api.spotify.com/v1/playlists/${plID}/tracks?offset=0&limit=50`
} as const;