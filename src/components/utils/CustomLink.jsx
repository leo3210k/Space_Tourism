import './CustomLink.css';
import { Link, useLocation } from 'react-router-dom';

function CustomLink({ path, name, number='00' }) {
  let location = useLocation();

  return (
    <Link to={path} className="relative group py-10">
      <li className='lg:flex lg:gap-3 lg:text-base'>
        <span className='hidden lg:inline'>{number}</span>
        {name}
        <span className={`
          h-[3px] inline-block
          absolute left-0 bottom-0 bg-white
          group-hover:w-full transition-[width] ease duration-300
          underline-offset-4 
          ${location.pathname === path ? "w-full" : "w-0"}
          `}
        >&nbsp;</span>
      </li>
    </Link>
  );
}

export default CustomLink;
