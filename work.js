const form = document.getElementById('myform');


const getData = (e) => {

e.preventDefault();

let name = document.forms['myform']['song'].value;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c2df4e495amshc9ffeb0168e71adp1b207ejsnd70227b4f165',
		'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
	}
};

fetch(`https://youtube-music1.p.rapidapi.com/v2/search?query=${name}`, options)
	.then(response => response.json())
	.then(response => {

response.result.songs.map( (val) => {


document.getElementById('Display').innerHTML+= `

<div class="row col-md-4 col-lg-6 col-am-2">

<div class="card">
  <img src="${val.thumbnail}" alt="John" style="width:100%">
  <h1>${val.title}</h1>
  <p class="${val.name}</p>
  <p>${val.duration}</p>
  <div style="margin: 24px 0;">
    <a href="#"><i class="fa fa-dribbble"></i></a> 
    <a href="#"><i class="fa fa-twitter"></i></a>  
    <a href="#"><i class="fa fa-linkedin"></i></a>  
    <a href="#"><i class="fa fa-facebook"></i></a> 
  </div>
  <p><button>Download</button></p>

</div>
</div>









`






})








	})
	.catch(err => console.error(err));






}






form.addEventListener('submit', getData)
