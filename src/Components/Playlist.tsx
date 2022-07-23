import { Playlist } from "spotify-types"

type Props = {
  playlist: Playlist;
  getPlaylist: (pl: Playlist) => void | null;
}

const PlaylistComp = ({ getPlaylist, playlist }: Props) => {
  return (
    <div
      className="bg-slate-200 p-3 rounded-md flex justify-evenly align-middle flex-col hover:bg-slate-300"
      style={{ maxWidth: 'calc(12px + 12px + 150px)' }}
      onClick={() => getPlaylist(playlist)}
    >
      <div className="mb-4">
        <img src={playlist.images[0].url} alt={playlist.name} height='150px' width='150px' />
      </div>
      <div className="self-star font-bold text-slate-700">{playlist.name}</div>
    </div>
  )
}

export default PlaylistComp;