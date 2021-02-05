let sampleArr = [0,1,2,3,4,5,6,7,8,9];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}



$(() => {
  $('#randomizeX').on('click', () => {
    let randomArray = shuffle(sampleArr);

    for (let number of randomArray) {
      // $('.container').append(number);
      const $div = $('<div>').addClass('square');
      $div.text(number);
      $('.row').append($div);
      console.log(number);
    }
  });

  $('#randomizeY').on('click', () => {
    let randomArray = shuffle(sampleArr);

    for (let number of randomArray) {
      // $('.container').append(number);
      const $div = $('<div>').addClass('square-y');
      $div.text(number);
      $('.container').append($div);
      console.log(number);
    }
  });
});