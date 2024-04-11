import Form from '../form/form';
import ReviewItem from '../review-item/review-item';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {useMemo, memo} from 'react';
import {Reviews} from '../../types/review.ts';

type ReviewsListProps = {
  offerId?: string;
  reviews: Reviews;
};

function ReviewsList({offerId, reviews}: ReviewsListProps): JSX.Element {
  const DEFAULT_BEGIN = 0;
  const MAX_REVIEWS_LENGTH = 10;
  const reviewsActive = useMemo(() => [...reviews].sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(DEFAULT_BEGIN, Math.min(MAX_REVIEWS_LENGTH, reviews.length)), [reviews]);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="offer__reviews reviews" data-testid="reviews-container">
      <div>
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{reviews.length}</span>
        </h2>
        <ul className="reviews__list">
          {reviewsActive.map((review) => {
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

const MemorizedReviewList = memo(ReviewsList);
export default MemorizedReviewList;
