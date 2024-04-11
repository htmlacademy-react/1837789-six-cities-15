import {useState, ChangeEvent, Fragment, FormEvent, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {submitReviewAction, fetchReviewsAction} from '../../store/api-actions';
import {getReviewsIsLoading, selectReviewRequestStatus} from '../../store/reviews-process/selectors';
import {assignReviewRequestStatusByDefault} from '../../store/reviews-process/reviews-process';
import {RequestStatus} from '../../const';
type FormProps = {
  offerId?: string;
};

function Form({offerId}: FormProps): JSX.Element {
  const ratingMap = {
    'perfect': '5',
    'good': '4',
    'not bad': '3',
    'badly': '2',
    'terribly': '1'
  };

  const dispatch = useAppDispatch();
  const reviewsIsLoading = useAppSelector(getReviewsIsLoading);
  const reviewRequestStatus = useAppSelector(selectReviewRequestStatus);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('0');

  const isDisabled = ((comment.length < 50 || comment.length > 300) || reviewsIsLoading);
  function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
    setRating(evt.target.value);
  }

  function handleTextAreaChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    setComment(evt.target.value);
  }

  const resetForm = () => {
    setComment('');
    setRating('0');
  };

  useEffect(() => {
    if(reviewRequestStatus === RequestStatus.Success) {
      resetForm();
      dispatch(assignReviewRequestStatusByDefault());
    }
  }, [reviewRequestStatus, dispatch]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (offerId && !isDisabled) {
      dispatch(
        submitReviewAction({
          id: offerId,
          comment: comment,
          rating: Number(rating),
        })
      );
      dispatch(fetchReviewsAction());
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={handleSubmit}
      data-testid="review-form-container"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          Object.entries(ratingMap).map(([title, score]) => (
            <Fragment key={score}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={score}
                id={`${score}-stars`}
                type="radio"
                checked={rating === score}
                onChange={handleInputChange}
                disabled = {reviewsIsLoading}
                data-testid={`rating-form-item-${score}`}
              />
              <label
                htmlFor={`${score}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleTextAreaChange}
        disabled = {reviewsIsLoading}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{''}
          <span className="reviews__star">rating</span> and describe
            your stay with at least{''}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled = {isDisabled}
          data-testid="submit-button"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
