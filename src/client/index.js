import { handleSubmit } from './js/app'
import { minDate } from './js/adjustDate'

import './styles/style.scss';


document.getElementById('submittrip').addEventListener('click', handleSubmit);



export{
    handleSubmit,
    minDate
};