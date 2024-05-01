import './CustomLink.css';
import { Link, useLocation } from 'react-router-dom';

function CustomLink({ path, name }) {
  let location = useLocation();

  return (
    <Link to={path} className="relative group py-10">
      <li>
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
