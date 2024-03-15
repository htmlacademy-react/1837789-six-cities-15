import Form from '../form/form';
import {Reviews} from '../../types/review';
import ReviewItem from '../review-item/reviewItem';

type ReviewsListProps = {
  reviews: Reviews;
  onReview: (rating: string, comment: string) => void;
};

function ReviewsList({reviews, onReview}: ReviewsListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <div>
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{reviews.length}</span>
        </h2>
        {reviews.map((review) => {
          const keyValue = review.id;
          return (
            <ReviewItem key = {keyValue} reviewItem = {review} />
          );
        })}
        <Form onReview = {onReview} />
      </div>
    </section>
  );
}

export default ReviewsList;
