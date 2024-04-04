import Form from '../form/form';
import ReviewItem from '../review-item/review-item';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getReviews} from '../../store/reviews-process/selectors.ts';

type ReviewsListProps = {
  offerId?: string;
};

function ReviewsList({offerId}: ReviewsListProps): JSX.Element {
  const reviewsActive = useAppSelector(getReviews);
  const DEFAULT_BEGIN = 0;
  const MAX_REVIEWS_LENGTH = 10;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const maxReviews = reviewsActive.slice(DEFAULT_BEGIN, Math.min(MAX_REVIEWS_LENGTH, reviewsActive.length));

  return (
    <section className="offer__reviews reviews">
      <div>
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{reviewsActive.length}</span>
        </h2>
        <ul className="reviews__list">
          {maxReviews.map((review) => {
            const keyValue = review.id;
            return (
              <ReviewItem key = {keyValue} reviewItem = {review} />
            );
          })}
          {authorizationStatus === AuthorizationStatus.Auth && (
            <Form offerId = {offerId} />
          )}
        </ul>
      </div>
    </section>
  );
}

export default ReviewsList;
