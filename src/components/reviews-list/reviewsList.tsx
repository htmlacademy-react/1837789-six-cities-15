import Form from '../form/form';
import {Reviews} from '../../types/review';
import ReviewItem from '../review-item/reviewItem';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';

type ReviewsListProps = {
  reviews: Reviews;
  idOffer: string | undefined;
};

function ReviewsList({reviews, idOffer}: ReviewsListProps): JSX.Element {
  const DEFAULT_BEGIN = 0;
  const MAX_REVIEWS_LENGTH = 10;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const maxReviews = reviews.slice(DEFAULT_BEGIN, Math.min(MAX_REVIEWS_LENGTH, reviews.length));
  const sortedMaxReviews = maxReviews.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return (
    <section className="offer__reviews reviews">
      <div>
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{maxReviews.length}</span>
        </h2>
        {sortedMaxReviews.map((review) => {
          const keyValue = review.id;
          return (
            <ReviewItem key = {keyValue} reviewItem = {review} />
          );
        })}
        {authorizationStatus === AuthorizationStatus.Auth && (
          <Form idOffer = {idOffer} />
        )}
      </div>
    </section>
  );
}

export default ReviewsList;
