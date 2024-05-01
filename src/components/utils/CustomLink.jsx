import './CustomLink.css';
import { Link } from 'react-router-dom';

function CustomLink({ path, name }) {
  return (
    <Link to={path} className="relative">
      <li>{name}</li>
    </Link>
  );
}

export default CustomLink;
