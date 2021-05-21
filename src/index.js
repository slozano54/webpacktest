//var moment = require('moment');
import date from "./date"

import './styles/index.scss'

document.write("Je débute avec Webpack !");
console.log("Up ! Michto ?");
//console.log(moment().format());
console.log(date());

const SumElements = (arr) => {
    let sum = 0
    for (let element of arr) {
        sum += element
    }
    console.log(sum) // 220
  }
  SumElements([10, 20, 40, 60, 90])
