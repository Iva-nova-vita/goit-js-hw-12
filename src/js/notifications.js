import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default function showNotification(message) {
  iziToast.show({
    message,
    color: 'red',
    timeout: 2000,
    position: 'topRight',
  });
}
