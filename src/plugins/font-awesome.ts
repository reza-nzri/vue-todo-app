import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faTasks,
  faSort,
  faPlus,
  faCalendarDays,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

library.add(faTasks, faSort, faPlus, faCalendarDays, faTrash);

export default FontAwesomeIcon;
