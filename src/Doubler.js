// Doubler.js
import React from 'react';
import './App.css';
import {useParams} from 'react-router-dom'; // импортируем хук

function Doubler() {

    const {numberSelected} = useParams(); // получаем доступ к параметру URL
    console.log('numberSelected', numberSelected)
    if (!isNaN(numberSelected)){
        // если обнаружено число, будет запущен этот код
  return (
    <>
      {/*<p>/!* сюда должно попасть значение number *!/</p>*/}
      <p>Обнаружен числовой URL-адрес. Результат удвоения:{numberSelected*2}</p>
    </>
  )} else {
  // если значение не числовое, будет запущен этот код
        return(
            <p>Укажите число, которое хотите удвоить</p>
        );
    }
}

export default Doubler;
//
// import React from 'react';
// import './App.css';
// import { useParams } from 'react-router-dom';
//
// function Doubler() {
//     const { number } = useParams();
//     if (!isNaN(number)){
//         // если обнаружено число, будет запущен этот код
//         return (
//             <p>Обнаружен числовой URL-адрес. Результат удвоения: {number}</p>
//         );
//     } else {
//         // если значение не числовое, будет запущен этот код
//         return(
//             <p></p>
//         );
//     }
//
// }
//
// export default Doubler;