import {fireEvent, render, screen} from '@testing-library/react';
import {withStoreAndHistory} from '../../utils/mock-component';
import Form from './form';
import {NameSpace, RequestStatus} from '../../const';

describe('Component <Form />:', () => {
  const fakeOfferId = '123';

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    const starCount = 5;
    const EXPECTED_ID = {
      TEXTAREA: 'Your review',
      INPUTS: 'input[name="rating"]',
      HELP_TEXT: /To submit review/i,
      SUBMIT_BUTTON: 'Submit',
    };

    const { withStoreComponent: reviewFormWrappedComponent } =
      withStoreAndHistory(<Form offerId={fakeOfferId} />);

    render(reviewFormWrappedComponent);

    const RESULT_LIST = {
      TEXTAREA: screen.getByLabelText(EXPECTED_ID.TEXTAREA),
      INPUTS: document.querySelectorAll(EXPECTED_ID.INPUTS),
      HELP_TEXT: screen.getByText(EXPECTED_ID.HELP_TEXT),
      SUBMIT_BUTTON: screen.getByText(EXPECTED_ID.SUBMIT_BUTTON),
    };

    // expect to have all the components in the DOM
    expect(RESULT_LIST.TEXTAREA).toBeInTheDocument();
    expect(RESULT_LIST.INPUTS.length).toBe(starCount);
    expect(RESULT_LIST.HELP_TEXT).toBeInTheDocument();
    expect(RESULT_LIST.SUBMIT_BUTTON).toBeInTheDocument();
    expect(RESULT_LIST.SUBMIT_BUTTON).toBeDisabled();
  });

  it('handles text and rating change correctly', () => {
    const expectedFakeCorrectText =
      'This is a review of more than 50 characters. Now for sure.';
    const expectedFakeIncorrectText = 'This is a review.';
    const EXPECTED_ID = {
      TEXTAREA: 'Your review',
      INPUT: 'rating-form-item-3',
      SUBMIT_BUTTON: 'Submit',
    };

    const { withStoreComponent: reviewFormWrappedComponent } =
      withStoreAndHistory(<Form offerId={fakeOfferId} />);

    render(reviewFormWrappedComponent);

    const RESULT_LIST = {
      TEXTAREA: screen.getByLabelText(EXPECTED_ID.TEXTAREA),
      INPUT: screen.getByTestId(EXPECTED_ID.INPUT),
      SUBMIT_BUTTON: screen.getByText(EXPECTED_ID.SUBMIT_BUTTON),
    };

    // only incorrect text was entered
    fireEvent.change(RESULT_LIST.TEXTAREA, {
      target: { value: expectedFakeIncorrectText },
    });
    expect(RESULT_LIST.TEXTAREA).toHaveValue(expectedFakeIncorrectText);
    expect(RESULT_LIST.SUBMIT_BUTTON).toBeDisabled();

    // entered incorrect text and clicked on the rating
    fireEvent.change(RESULT_LIST.TEXTAREA, {
      target: { value: expectedFakeIncorrectText },
    });
    expect(RESULT_LIST.TEXTAREA).toHaveValue(expectedFakeIncorrectText);
    fireEvent.click(RESULT_LIST.INPUT);
    expect(RESULT_LIST.SUBMIT_BUTTON).toBeDisabled();

    // entered the correct data(text and rating) to send to the server
    fireEvent.change(RESULT_LIST.TEXTAREA, {
      target: { value: expectedFakeCorrectText },
    });
    expect(RESULT_LIST.TEXTAREA).toHaveValue(expectedFakeCorrectText);
    fireEvent.click(RESULT_LIST.INPUT);
    expect(RESULT_LIST.SUBMIT_BUTTON).toBeEnabled();
  });

  it('handles review request "Pending" status correctly', () => {
    const expectedSubmitButtonText = 'Submit';
    const submitButtonTestId = 'submit-button';
    const initialState = {
      [NameSpace.Reviews]: {
        reviews: [],
        reviewsIsLoading: false,
        reviewsIsNotFound: true,
        reviewRequestStatus: RequestStatus.Idle,
      },
    };
    const {withStoreComponent: reviewFormWrappedComponent} =
      withStoreAndHistory(<Form offerId={fakeOfferId} />, initialState);

    const { getByTestId } = render(reviewFormWrappedComponent);
    const submitButtonElement = getByTestId(submitButtonTestId);
    expect(submitButtonElement.textContent).toEqual(expectedSubmitButtonText);
    expect(submitButtonElement).toBeDisabled();
  });
});
