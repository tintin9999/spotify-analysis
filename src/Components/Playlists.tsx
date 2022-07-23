import axios from "axios";
import { Paging, Playlist as PlaylistType } from 'spotify-types';
import { useEffect, useState } from "react"
import { scroller, Element } from "react-scroll";

import Endpoints from "../Constants/Endpoints";
import PlaylistComp from "./Playlist";
import Gallery from "./Gallery";
import Tracks from "./Tracks";

type Props = {
  accessToken: string;
};

function Playlists({ accessToken }: Props) {
  const [playlists, setPlaylists] = useState<PlaylistType[]>([]);
  const [chosenPl, setChosenPl] = useState<PlaylistType | null>(null);

  useEffect(() => {
    if (!accessToken || !chosenPl) {
      return;
    }

    scroller.scrollTo('tracksInfo', {
      duration: 400,
      smooth: true,
    });
  }, [chosenPl])

  if (accessToken === '') {
    return <></>
  }

  const getPlaylists = async () => {
    const response = await axios.get<Paging<PlaylistType>>(Endpoints.GET_PUBLIC_PLAYLISTS, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    if (response.status !== 200) {
      alert('error?');
    }

    setPlaylists(response.data.items);
  }

  if (playlists.length === 0) {
    getPlaylists()
  }

  return (
    <div className="bg-slate-100">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-gray-700 font-semibold mb-5 pt-4">
        Choose a playlist to explore
      </h1>

      <Gallery>
        {playlists.map(pl => <PlaylistComp key={pl.id} playlist={pl} getPlaylist={setChosenPl} />)}
      </Gallery>

      {chosenPl && (
        <Element name='tracksInfo'><h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-gray-700 font-semibold pb-4 pt-4">
          {chosenPl.name}
        </h1>
          <Tracks pl={chosenPl} accessToken={accessToken} />
        </Element>
      )}

    </div>
  )
};

export default Playlists