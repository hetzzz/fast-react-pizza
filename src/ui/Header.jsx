import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/users/UserName';

function Header() {
  return (
    <header
      className="first-letter:border-b-1  
    flex items-center
     justify-between border-stone-200 bg-yellow-500 px-4 py-4 uppercase"
    >
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
export default Header;
