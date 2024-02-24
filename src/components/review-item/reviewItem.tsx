import {Review} from '../../types/review';
import {handleStars} from '../../const';

type ReviewProps = {
  reviewItem: Review;
}

function ReviewItem({reviewItem}: ReviewProps): JSX.Element {
  const {id, comment, user, rating} = reviewItem;
  const {name, avatarUrl} = user;

  return (
    <div>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{id}</span>
      </h2>
      <ul className="reviews__list">
        <li className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img
                className="reviews__avatar user__avatar"
                src={avatarUrl}
                width={54}
                height={54}
                alt="Reviews avatar"
              />
            </div>
            <span className="reviews__user-name">{name}</span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{ width: `${handleStars(rating)}` }} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {comment}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">
              April 2019
            </time>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ReviewItem;
