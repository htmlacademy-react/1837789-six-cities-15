import {useState} from 'react';
import {getSortType, setSorting} from '../../store/action';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {SortType} from '../../const';

function Sort(): JSX.Element {
  const [opened, setOpened] = useState<boolean>(false);
  const activeSortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  function handleToggle() {
    setOpened(!opened);
  }

  function handleChangeSorting(item: SortType) {
    dispatch(getSortType(item));
    dispatch(setSorting());
    setOpened(false);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleToggle}>
        {activeSortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${opened ? 'places__options--opened' : ''}`}>
        {Object.values(SortType).map((item) => (
          <li key={item}
            className={`places__option ${activeSortType === item ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleChangeSorting(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
