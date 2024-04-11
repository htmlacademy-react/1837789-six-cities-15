import OfferPage from './offer-page';
import {NameSpace} from '../../const';
import {withStoreAndHistory} from '../../utils/mock-component';
import {
  makeFakeOffer,
  makeFakeStore,
} from '../../utils/fake-mock-by-test';
import { render } from '@testing-library/react';

describe('Component: <OfferPage />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render a loading spinner if there is no current offer', () => {
    const spinnerTestId = 'spinner-container';
    const initialState = {
      [NameSpace.Offer]: {
        offer: null,
        offerIsLoading: true,
        offerIsNotFound: false
      },
    };
    const {withStoreComponent: offerPageWrappedComponent} =
      withStoreAndHistory(<OfferPage />, makeFakeStore(initialState));

    const {getByTestId} = render(offerPageWrappedComponent);

    const spinnerElement = getByTestId(spinnerTestId);
    expect(spinnerElement).toBeInTheDocument();
  });

  it('should render the offer and nearby places if there is a current offer', () => {
    const EXPECTED_ID = {
      OFFER_PAGE_CONTAINER: 'offer-page-container',
      NEARBY_OFFER_PAGE_CONTAINER: 'nearby-page-container',
      OFFER_CONTAINER: 'offer-container',
      SPINNER_CONTAINER: 'spinner-container',
    };
    const fakeOffer = makeFakeOffer();
    const initialState = {
      [NameSpace.Offer]: {
        offer: fakeOffer,
        offerIsLoading: false,
        offerIsNotFound: false
      },
    };
    const {withStoreComponent: offerPageWrappedComponent} =
      withStoreAndHistory(<OfferPage />, makeFakeStore(initialState));

    const {getByTestId, queryByTestId} = render(offerPageWrappedComponent);

    const ElementList = {
      PageContainer: getByTestId(EXPECTED_ID.OFFER_PAGE_CONTAINER),
      NearbyContainer: getByTestId(EXPECTED_ID.NEARBY_OFFER_PAGE_CONTAINER),
      OfferContainer: getByTestId(EXPECTED_ID.OFFER_CONTAINER),
      SpinnerContainer: queryByTestId(EXPECTED_ID.SPINNER_CONTAINER),
    } as const;

    expect(ElementList.SpinnerContainer).toBeNull();
    expect(ElementList.PageContainer).toBeInTheDocument();
    expect(ElementList.NearbyContainer).toBeInTheDocument();
    expect(ElementList.OfferContainer).toBeInTheDocument();
  });
});
