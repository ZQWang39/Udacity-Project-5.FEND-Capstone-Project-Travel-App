

export function minDate(e){
    e.preventDefault()
   
    let today = new Date();
    
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let year = today.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
   let minDate =  year + '-' + month + '-' + day ;
   
   
document.getElementById('startDate').setAttribute('min', minDate);
document.getElementById('returnDate').setAttribute('min', minDate);

};