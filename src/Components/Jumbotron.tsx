import Button from './Button'
import { getOAuthLink } from '../Util';
import imgUrl from '../../static/undraw_audio_player.svg'

function Jumbotron() {
  return (
    <div className="bg-gray-100 flex flex-col justify-around py-12 md:flex-row">
      <div className="container mx-auto flex flex-col justify-space-evenly items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
            Explore your spotify <span className="text-green-600 underline">Playlists</span>.
          </h1>
          <p className="mt-5 lg:w-10/12 text-gray-400 font-normal text-center text-lg">Know what type of songs you listen to, Log in with spotify and get your playlist summary today!</p>
        </div>
        <Button to={getOAuthLink()} className='text-xl px-5'>Log in</Button>
      </div>
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <img src={imgUrl} className='px-12 h-3/4 w-3/4 md:h-5/6 md:w-5/6'/>
      </div>
    </div>

  );
}

export default Jumbotron;
