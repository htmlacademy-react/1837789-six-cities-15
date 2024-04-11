import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {SortType} from '../../const';
import {getSortType} from '../../store/offers-process/selectors';
import {setSortType} from '../../store/offers-process/offers-process';
import classNames from 'classnames';

function Sort(): JSX.Element {
  const [opened, setOpened] = useState<boolean>(false);
  const activeSortType = useAppSelector(getSortType);
  const dispatch = useAppDispatch();

  function handleToggle() {
    setOpened(!opened);
  }

  function handleChangeSorting(item: SortType) {
    dispatch(setSortType(item));
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
      <ul
        className={classNames('places__options', 'places__options--custom', {'places__options--opened' : opened})}
      >
        {Object.values(SortType).map((item) => (
          <li key={item}
            className={classNames('places__option', {'places__option--active' : activeSortType === item})}
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
