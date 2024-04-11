import {renderHook} from '@testing-library/react';
import useMap from './use-map';
import {makeFakeCity} from '../utils/fake-mock-by-test';

const fakeCity = makeFakeCity();

describe('Hook: useMap', () => {
  it('should return "null" when Ref === null', () => {
    const mapRef = {current: null};

    const {result} = renderHook(() => useMap(mapRef, fakeCity));

    expect(result.current).toBeNull();
  });

  it('should return the map instance when Ref === HTMLElement', () => {
    const mapRef = {current: document.createElement('div')};

    const {result} = renderHook(() => useMap(mapRef, fakeCity));

    expect(result.current).not.toBeNull();
    expect(result.current).toBeDefined();
  });
});
