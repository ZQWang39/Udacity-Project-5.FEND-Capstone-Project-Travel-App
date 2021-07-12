import { handleSubmit } from './js/app'
import { minDate } from './js/adjustDate'

import './styles/style.scss';


document.getElementById('submittrip').addEventListener('click', handleSubmit);
document.getElementById('startDate').addEventListener('click', minDate);
document.getElementById('returnDate').addEventListener('click', minDate);

//document.getElementById('startDate').setAttribute('min', minDate);
//document.getElementById('returnDate').setAttribute('min', minDate);





export{
    handleSubmit,
    minDate
};