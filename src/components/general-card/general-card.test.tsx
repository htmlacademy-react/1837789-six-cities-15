import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GeneralCard from './general-card';
import {makeFakeOffer} from '../../utils/fake-mock-by-test';
import {withStoreAndHistory} from '../../utils/mock-component';

describe('Component: <GeneralCard />', () => {
  it('should render correctly', () => {
    const fakeOfferPreview = makeFakeOffer();
    const EXPECTED_CARD_TEST_ID = {
      CONTAINER: 'card-container',
      IMG: 'card-lazy-image',
      PRICE: 'card-price-container',
      RATING: 'starline-container',
      NAME: 'card-name-title',
      TYPE: 'card-type-paragraph',
    };
    const { withStoreComponent: wrappedCard } = withStoreAndHistory(
      <GeneralCard offer={fakeOfferPreview} elementType='cities'/>
    );

    const { getByTestId } = render(wrappedCard);

    const RESULT_LIST = {
      CONTAINER: getByTestId(EXPECTED_CARD_TEST_ID.CONTAINER),
      IMG: getByTestId(EXPECTED_CARD_TEST_ID.IMG),
      PRICE: getByTestId(EXPECTED_CARD_TEST_ID.PRICE),
      RATING: getByTestId(EXPECTED_CARD_TEST_ID.RATING),
      NAME: getByTestId(EXPECTED_CARD_TEST_ID.NAME),
      TYPE: getByTestId(EXPECTED_CARD_TEST_ID.TYPE),
    };

    expect(RESULT_LIST.CONTAINER).toBeInTheDocument();
    expect(RESULT_LIST.IMG).toBeInTheDocument();
    expect(RESULT_LIST.PRICE).toBeInTheDocument();
    expect(RESULT_LIST.RATING).toBeInTheDocument();
    expect(RESULT_LIST.NAME).toBeInTheDocument();
    expect(RESULT_LIST.TYPE).toBeInTheDocument();
  });

  it('should correct react setActivePlaceCard', async () => {
    const user = userEvent.setup();
    const fakeOfferPreview = makeFakeOffer();
    const setActivePlaceCard = vi.fn();
    const {withStoreComponent: wrappedCard} = withStoreAndHistory(
      <GeneralCard
        offer={fakeOfferPreview}
        elementType='cities'
        setActivePlaceCard={setActivePlaceCard}
      />
    );

    const {getByTestId: getComponentContainer} = render(wrappedCard);
    const cardContainer = getComponentContainer('card-container');
    await user.hover(cardContainer);
    await user.unhover(cardContainer);
    expect(setActivePlaceCard).toBeCalled();
  });
});
