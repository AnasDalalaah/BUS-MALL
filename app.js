'use strickt';

let maxround=25;
let round =0;

let displaybutton = document.getElementById('button');
let container = document.getElementById('container');


let leftImageElement = document.getElementById('leftImage');
let middleImageElement = document.getElementById('middleImage');
let rightImageElement = document.getElementById('rightImage');

//let arrayobject=[];
let arrayofname=[];
let arrayofclick=[];
let arrayofShows=[];
let arrayofimg=[];

function BussMall(name,source) {

  this.name=name;
  this.source=source;
  this.Shows=0;
  this.click=0;
  BussMall.allImag.push(this);
  arrayofname.push(this.name);
}

BussMall.allImag=[];

new BussMall('bag','images/bag.jpg');
new BussMall('banana','images/banana.jpg');
new BussMall('bathroom','images/bathroom.jpg');
new BussMall('boots','images/boots.jpg');
new BussMall('breakfast','images/breakfast.jpg');
new BussMall('bubblegum','images/bubblegum.jpg');
new BussMall('chair','images/chair.jpg');
new BussMall('cthulhu','images/cthulhu.jpg');
new BussMall('dog-duck','images/dog-duck.jpg');
new BussMall('dragon','images/dragon.jpg');
new BussMall('pen','images/pen.jpg');
new BussMall('pet-sweep','images/pet-sweep.jpg');
new BussMall('scissors','images/scissors.jpg');
new BussMall('shark.','images/shark.jpg');
new BussMall('sweep','images/sweep.png');
new BussMall('tauntaun','images/tauntaun.jpg');
new BussMall('unicorn','images/unicorn.jpg');
new BussMall('usb','images/usb.gif');
new BussMall('water-can','images/water-can.jpg');
new BussMall('wine-glass','images/wine-glass.jpg');

function getRandomNum(){
  let run = Math.floor( Math.random() * BussMall.allImag.length );
  return run;
}
console.log(getRandomNum());

let leftImageIndex;
let middleImageIndex;
let rightImageIndex;



function render(){

  leftImageIndex = getRandomNum();
  rightImageIndex = getRandomNum();
  middleImageIndex = getRandomNum();




  /*
  while(arrayofimg.includes(rightImageIndex) === BussMall.allImag [rightImageIndex] || arrayofimg.includes (leftImageIndex,2) ===BussMall.allImag[leftImageIndex] || arrayofimg.includes(middleImageIndex,2) === BussMall.allImag [middleImageIndex] ){
    rightImageIndex = getRandomNum();
    middleImageIndex = getRandomNum();
    leftImageIndex = getRandomNum();

  }*/

  while(leftImageIndex === middleImageIndex || leftImageIndex === rightImageIndex || middleImageIndex===rightImageIndex || arrayofimg.includes(leftImageIndex) || arrayofimg.includes (middleImageIndex) || arrayofimg.includes(rightImageIndex)){
    leftImageIndex = getRandomNum();
    middleImageIndex = getRandomNum();
    rightImageIndex = getRandomNum();


  }
  arrayofimg=[leftImageIndex,middleImageIndex,rightImageIndex];
  console.log(arrayofimg);

  leftImageElement.src=BussMall.allImag[leftImageIndex].source;
  BussMall.allImag[leftImageIndex].Shows++;

  middleImageElement.src=BussMall.allImag[middleImageIndex].source;
  BussMall.allImag[middleImageIndex].Shows++;

  rightImageElement.src= BussMall.allImag[rightImageIndex].source;
  BussMall.allImag[rightImageIndex].Shows++;


  console.log(leftImageIndex, middleImageIndex, rightImageIndex);

  for(let i=0 ; i<BussMall.allImag.length ; i++){
    arrayofimg.push(BussMall.allImag[rightImageIndex]);
    arrayofimg.push(BussMall.allImag[leftImageElement]);
    arrayofimg.push(BussMall.allImag[middleImageElement]);
  }

}

render();

displaybutton.addEventListener('click',displaylist);
container.addEventListener('click', handleClicking);
//rightImageElement.addEventListener('click', handleClicking);
//middleImageElement.addEventListener('click', handleClicking);
//leftImageElement.addEventListener('click', handleClicking);

function handleClicking(event) {

  round++;

  if(round <= maxround){

    if(event.target.id === 'leftImage'){
      BussMall.allImag[leftImageIndex].click++;

    }
    else if(event.target.id === 'rightImage' ){
      BussMall.allImag[rightImageIndex].click++;

    }
    else if (event.target.id === 'middleImage') {
      BussMall.allImag[middleImageIndex].click++;

    }


    render();
  }
  else{

    container.removeEventListener('click', handleClicking);
  }

}



let button = document.getElementById('button');
button.addEventListener('submit', displaylist);

//datachart() ;

function displaylist () {

  if(round >= 25){

    let unorderdList = document.getElementById('result');
    let li;
    for(let i = 0 ; i < BussMall.allImag.length; i++){
      li = document.createElement('li');
      unorderdList.appendChild(li);
      li.textContent = ` ${BussMall.allImag[i].name} had ${BussMall.allImag[i].click} Votes and was seen ${BussMall.allImag[i].Shows} times..`;

      button.removeEventListener('click', displaylist);

    }
    datachart() ;
  }
}

function datachart(){

  for (let i=0 ; i < BussMall.allImag.length ;i++){

    arrayofclick.push(BussMall.allImag[i].click);
    arrayofShows.push(BussMall.allImag[i].Shows);

  }
  console.log(arrayofclick);
  console.log(arrayofShows);
  let ctx = document.getElementById('mychart').getContext('2d');
  let mychart = new Chart(ctx,{
    type: 'bar',
    data: {
      labels: arrayofname,
      datasets:[{
        label: 'products data',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: arrayofclick,},
      {
        label: 'products data',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: arrayofShows,
      }]
    },

    options: {}
  });

}
