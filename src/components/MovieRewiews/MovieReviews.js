import PropTypes from 'prop-types';
import s from '../MovieRewiews/MovieRewiews.module.scss';

export default function MovieReviews({ reviews }) {
  return (
    <ul className={s.list}>
      {reviews.map(review => {
        return (
          <li className={s.item} key={review.id}>
            <p className={s.author}>{review.author}</p>
            <hr />
            <p className={s.content}>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
}

MovieReviews.propTypes = {
  reviews: PropTypes.array,
};
