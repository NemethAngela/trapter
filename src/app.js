/*
* File: app.js
* Author: Németh Angéla
* Copyright: 2023, Németh Angéla
* Group: Szoft 1-2 E
* Date: 2023-01-26
* Github: https://github.com/NemethAngela/
* Licenc: GNU GPL
*/
//kötések a html-hez:
const asideElem = document.querySelector("#aside");
const bsideElem = document.querySelector("#bside");
const csideElem = document.querySelector("#cside");
const dsideElem = document.querySelector("#dside");
const calcButton = document.querySelector("#calcButton");
const areaElem = document.querySelector("#area"); //nyomógomb

//eseménykezelő, hgy mire reagálunk: klikk
calcButton.addEventListener('click', () => {
    console.log('működik');
    let aside = Number(asideElem.value);
    let bside = Number(bsideElem.value);
    let cside = Number(csideElem.value);
    let dside = Number(dsideElem.value);
    let area = calcArea(aside, bside, cside, dside);
    areaElem.value = area;
    
});

function calcArea(a, b, c, d) {
    let terulet = ( (a + c)/(4*(a - c))) 
    * Math.sqrt(
        (a+b-c+d)*
        (a-b-c+d)*
        (a+b-c-d)*
        (-a+b+c+d)
    )
    return terulet;

}
//+ függvény a számításhoz:
