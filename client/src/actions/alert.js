import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert =
  (msg, alertType, timeout = 5000) =>
  (dispatach) => {
    const id = uuidv4();
    dispatach({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    });

    setTimeout(() => dispatach({ type: REMOVE_ALERT, payload: id }), timeout);
  };
