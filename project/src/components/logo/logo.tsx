import {Link} from 'react-router-dom';

function Logo({light}: {light: boolean}): JSX.Element {
  return (
    <div className="logo">
      <Link className={light ? 'logo__link logo__link--light' : 'logo__link'} to="/">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
