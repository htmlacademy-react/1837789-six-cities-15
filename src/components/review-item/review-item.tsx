import {Review} from '../../types/review';
import {handleStars} from '../../const';
import {formatDate} from '../../utils/format-date';

type ReviewProps = {
  reviewItem: Review;
}

function ReviewItem({reviewItem}: ReviewProps): JSX.Element {
  const {comment, user, rating, date} = reviewItem;
  const {name, avatarUrl} = user;

  return (
    <li className="reviews__item"
      data-testid="review-container"
    >
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
            data-testid="review-avatar-image"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating" data-testid="starline-container">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${handleStars(rating)}` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text" data-testid="review-text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date.split('T')[0]}>
          {formatDate(new Date(date))}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
