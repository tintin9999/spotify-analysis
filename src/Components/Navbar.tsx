import Button from './Button'
import { getOAuthLink } from '../Util';

const Navbar = () => {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-md">
      <div className="w-full flex flex-wrap items-center justify-between px-6">
        <div className="text-xl text-black font-bold cursor-pointer">Spotify Analysis</div>
        <Button to={getOAuthLink()} >Log me in</Button>
      </div>
    </nav>
  )
}

export default Navbar