// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'bda1317ca1mshbd0366a7f236949p1c8021jsne81384f8d8e1',
// 		'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
// 	}
// };

// fetch('https://real-time-finance-data.p.rapidapi.com/search?query=Apple', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


const form = document.getElementById('myForm');


const handelform = (e) => {

  e.preventDefault()

  const stock = document.forms['myForm']['stock'].value

  const options = {
    method: 'GET',
    headers: {
 		'X-RapidAPI-Key': 'bda1317ca1mshbd0366a7f236949p1c8021jsne81384f8d8e1',
 		'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
    }
  };
 fetch(`https://real-time-finance-data.p.rapidapi.com/search?query=${stock}`, options)
    .then(response => response.json())
    .then(response => {
        

      response.data.stock.map((cval) => {
         
      document.getElementById('result').innerHTML+=`
      <div class="col-md-4 text-center"> 
       <div class="card" style="width: 20rem mt-5 ;">
  <img src="https://www.pngitem.com/pimgs/m/751-7517867_buying-shares-in-indian-stock-market-hd-png.png" alt="...">
  <div class="card-body bg-dark text-white">
    <h3 class="card-title">Name:-${cval.name}</h3>
    <p>Price:-${cval.price}</p>
    <p>Change:-${cval.change}</p>
    <p>change_percent:-${cval.change_percent}</p>    
    <p>previous_close:-${cval.previous_close}</p>
    <p>last_update_utc:-${cval.last_update_utc}</p>
    <p>country_code:-${cval.country_code}</p>
    <p>exchange:-${cval.exchange}</p>
    <p>exchange_open:-${cval.exchange_open}</p>
    <p>exchange_close:-${cval.exchange_close}</p>
    <p>currency:-${cval.currency}</p>
    <p>exchange_open:-${cval.exchange_open}</p>
    <p class="card-text"></p>
    
  </div>
</div>
</div>
       
       
       
       
       
       ` 
       


      })


    })
    .catch(err => console.error(err));




}






form.addEventListener('submit', handelform)




/* <h1>${cval.name}</h1> */
