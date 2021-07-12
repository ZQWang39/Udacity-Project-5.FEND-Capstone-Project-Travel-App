

export function minDate(e){
    //e.preventDefault()
   
    let today = new Date();
    
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let year = today.getFullYear();
    let startDate = document.getElementById('startDate').value;
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
   let date =  year + '-' + month + '-' + day ;
 
   document.getElementById('startDate').setAttribute('min', date);
   document.getElementById('returnDate').setAttribute('min', startDate);
   

};





