import User from './class/User';
import 'bootstrap/scss/bootstrap.scss';
import './scss/style.scss';
import './css/style.css';


console.log("Hello World!");

const user = new User('Saikou', 'Ba');
console.log(`Bonjour ${user.getFullname ()}`);

const p = document.querySelector('#hello_message');
p.innerText = `Bonjour de : ${user.getFullname()}!`;

fetch('https://jsonplaceholder.typicode.com/user')
.then(response => response.json())
.then(json => console.log(json))




