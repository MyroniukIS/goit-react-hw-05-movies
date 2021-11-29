import PropTypes from 'prop-types';
import s from './MovieCast.module.scss';

export default function MovieCastDetails({ cast }) {
  return (
    <ul className={s.list}>
      {cast.map(item => {
        return (
          <li key={item.id} className={s.item}>
            <div className={s.imgThumb}>
              <img
                src={
                  item.profile_path &&
                  `https://image.tmdb.org/t/p/w500${item.profile_path}`
                }
                alt={item.original_name}
                width="130px"
              ></img>
            </div>
            <p className={s.text}>{item.original_name}</p>
            <p className={s.textCharacter}>Character: {item.character}</p>
          </li>
        );
      })}
    </ul>
  );
}

MovieCastDetails.propTypes = {
  cast: PropTypes.array,
};
