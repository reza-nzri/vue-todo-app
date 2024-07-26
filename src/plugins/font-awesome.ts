import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faTasks,
  faSort,
  faPlus,
  faCalendarDays,
  faTrash,
  faWindowClose,
} from '@fortawesome/free-solid-svg-icons';

library.add(faTasks, faSort, faPlus, faCalendarDays, faTrash, faWindowClose);

export default FontAwesomeIcon;
