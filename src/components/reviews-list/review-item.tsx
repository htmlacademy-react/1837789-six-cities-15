import Form from '../form/form';
import {Reviews} from '../../types/review';
import ReviewItem from '../review-item/review-item';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';


type ReviewsListProps = {
  reviews: Reviews;
  offerId?: string;
};

function ReviewsList({reviews, offerId}: ReviewsListProps): JSX.Element {
  const DEFAULT_BEGIN = 0;
  const MAX_REVIEWS_LENGTH = 10;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const maxReviews = reviews.slice(DEFAULT_BEGIN, Math.min(MAX_REVIEWS_LENGTH, reviews.length));

  return (
    <section className="offer__reviews reviews">
      <div>
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{reviews.length}</span>
        </h2>
        {maxReviews.map((review) => {
          const keyValue = review.id;
          return (
            <ReviewItem key = {keyValue} reviewItem = {review} />
          );
        })}
        {authorizationStatus === AuthorizationStatus.Auth && (
          <Form offerId = {offerId} />
        )}
      </div>
    </section>
  );
}

export default ReviewsList;
