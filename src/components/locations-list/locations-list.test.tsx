import { render, screen } from '@testing-library/react';
import {CITIES_LIST} from '../../const';
import LocationsList from './locations-list';
import {withStoreAndHistory} from '../../utils/mock-component';

describe('Component <LocationsList />:', () => {
  it('should render correctly', () => {
    const cityItemId = 'city-tab';
    const {withStoreComponent: wrappedComponent} = withStoreAndHistory(
      <LocationsList />
    );

    render(wrappedComponent);
    const cityItems = screen.getAllByTestId(cityItemId);
    expect(cityItems.length).toBe(CITIES_LIST.length);
  });
});
