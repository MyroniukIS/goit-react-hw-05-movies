import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            exact
            to="/"
            className={s.link}
            activeClassName={s.linkActive}
          >
            HOME
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to="/movie"
            className={s.link}
            activeClassName={s.linkActive}
          >
            MOVIE
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
