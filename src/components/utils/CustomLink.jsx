import './CustomLink.css';
import { Link } from 'react-router-dom';

function CustomLink({ path, name }) {
  return (
    <Link to={path} className="relative">
      <li>
        {name}
        <span className={`
        h-[1px] inline-block
        absolute left-0 -bottom-0.5 bg-${background}
        group-hover:w-full transition-[width] ease duration-300
        underline-offset-4
        ${router.asPath === href ? "w-full" : "w-0"}
        `}
        >&nbsp;</span>
      </li>
    </Link>
  );
}

export default CustomLink;
