import axios from 'axios';
import { useEffect, useState } from 'react';
import { Paging, Playlist, PlaylistTrack } from 'spotify-types'
import Endpoints from '../Constants/Endpoints';
import ArtistPie from './ArtistPie';
import Leaderboard from './Leaderboard';
import YearGraph from './YearGraph';

type Props = {
  pl?: Playlist;
  accessToken: string;
}

type SummaryData = {
  yearWise: { [k: number]: number };
  artistWise: { [k: string]: number };
  sortedYearWise: [string, number][];
  sortedArtistWise: [string, number][];
}

const Tracks = ({ pl, accessToken }: Props) => {
  const [tracks, setTracks] = useState<PlaylistTrack[]>([]);
  const [stats, setStats] = useState<SummaryData>();
  const [next, setNext] = useState<string | null>(Endpoints.GET_PLAYLIST_TRACKS(pl?.id));

  const calculateStats = () => {
    const data: SummaryData = {
      artistWise: {},
      yearWise: {},
      sortedArtistWise: [],
      sortedYearWise: []
    }

    tracks.forEach((cur) => {
      if (!cur.track) {
        return;
      }

      if ('album' in cur.track) {
        const releaseYear = new Date(cur.track.album.release_date).getFullYear();
        if (!data.yearWise[releaseYear]) {
          data.yearWise[releaseYear] = 1;
        } else {
          data.yearWise[releaseYear]++;
        }
      }

      if ('artists' in cur.track) {
        cur.track.artists.forEach(artist => {
          if (data.artistWise[artist.name]) {
            data.artistWise[artist.name]++;
          } else {
            data.artistWise[artist.name] = 1;
          }
        })
      }
    })

    data.sortedArtistWise = Object.entries(data.artistWise);
    data.sortedYearWise = Object.entries(data.yearWise);

    data.sortedArtistWise.sort((a, b) => b[1] - a[1]);
    data.sortedYearWise.sort((a, b) => b[1] - a[1]);

    setStats(data);
  }

  useEffect(() => {
    calculateStats();
    if (!next) {
      return;
    }

    axios.get<Paging<PlaylistTrack>>(
      next,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    ).then(resp => {
      setTracks((val) => [...val, ...resp.data.items]);
      setNext(n => n === resp.data.next ? null : resp.data.next);
    })

  }, [next, pl]);

  if (!stats) {
    return <div>Nothing to show here...</div>
  }

  return (
    <div className="bg-slate-100 py-4 pb-8">
      <div className='w-7/8 container mx-auto flex flex-col justify-center align-middle'>
        <div className='flex justify-evenly mb-4 portrait:flex-col'>
          <YearGraph className="w-3/6 portrait:w-full portrait:p-4 flex justify-center" data={stats.yearWise} sort></YearGraph>
          <Leaderboard data={stats.sortedYearWise.slice(0, 5)} title="Year Leaderboard" />
        </div>
        <div className='flex justify-evenly portrait:flex-col'>
          <ArtistPie className="w-1/4 portrait:w-full portrait:p-4 portrait:align-middle" data={stats.sortedArtistWise}></ArtistPie>
          <Leaderboard data={stats.sortedArtistWise.slice(0, 5)} title="Artist Leaderboard" />
        </div>
      </div>
    </div>
  )
}

export default Tracks