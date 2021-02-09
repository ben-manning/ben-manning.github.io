let sampleArr = [0,1,2,3,4,5,6,7,8,9];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}



$(() => {
  // source:  https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript
  // create an 11 x 11 grid of squares
const container = $(".container");

function makeRows(rows, cols) {
  console.log(rows)
  console.log(cols)
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);
  
  
  
  















  // $('#randomizeX').on('click', () => {
  //   let randomArray = shuffle(sampleArr);

  //   for (let number of randomArray) {
  //     // $('.container').append(number);
  //     const $div = $('<div>').addClass('square');
  //     $div.text(number);
  //     $('.row').append($div);
  //     console.log(number);
  //   }
  // });

  // $('#randomizeY').on('click', () => {
  //   let randomArray = shuffle(sampleArr);

  //   for (let number of randomArray) {
  //     // $('.container').append(number);
  //     const $div = $('<div>').addClass('square-y');
  //     $div.text(number);
  //     $('.container').append($div);
  //     console.log(number);
  //   }
  // });
});



