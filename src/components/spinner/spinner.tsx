import styled from './spinner.module.css';

function Spinner(): JSX.Element {
  return (
    <div className={styled.spinner} data-testid='spinner-container'></div>
  );
}

export default Spinner;

