import {useAppSelector} from '../../hooks';
import './error-message.css';
import {getErrorMessage} from '../../store/error-message-process/selectors';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getErrorMessage);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}

export default ErrorMessage;
