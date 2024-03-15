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
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

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
        {authorizationStatus === AuthorizationStatus.Auth && (
          <Form idOffer = {idOffer} />
        )}
      </div>
    </section>
  );
}

export default ReviewsList;
