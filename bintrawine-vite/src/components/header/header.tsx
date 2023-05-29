import { Link } from 'react-router-dom';
import logo from '@/assets/images/BinTraWine.png';
import styles from './header.module.css';

type HeaderProps = {
  /**
   * The current scroll position
   * @default 0
   * @type {number}
   **/
  y: number;
};

const Header = (props: HeaderProps) => {

  return (
    <header className="grid-in-header bg-nord15-light w-full flex h-full z-3 px-4">
      <div className="flex w-full my-0 mx-auto px-0 py-1.5 items-center justify-between">
        <Link to="/" className={`text-inherit rounded-0.25em padding-0.15em-0.5em flex items-center justify-center text-base`}>
          <img src={logo} alt="Logo" className="w-16 h-16 mr-4 rounded-xl" />
          <span className="font-bold text-2xl">BinTraWine</span>
        </Link>
        <nav className="flex">
          <div className="flex justify-between gap-2">
            <Link to="/about" className="hover:bg-nord6-base hover:underline p-2 rounded-xl">About</Link>
            <Link to="/contact" className="hover:bg-nord6-base hover:underline p-2 rounded-xl">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
