import {store} from '../store';
import {TIMEOUT_SHOW_ERROR} from '../const';
import {
  removeError,
  setError,
} from '../store/error-message-process/error-mewssage-process';

export const processErrorHandle = (message: string | null): void => {
  store.dispatch(setError({ error: message }));

  setTimeout(() => {
    store.dispatch(removeError());
  }, TIMEOUT_SHOW_ERROR);
};
