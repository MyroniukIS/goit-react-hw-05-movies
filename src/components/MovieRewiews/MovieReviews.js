import PropTypes from "prop-types";

export default function MovieReviews({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => {
        return (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
}

MovieReviews.propTypes = {
  reviews: PropTypes.array,
};
