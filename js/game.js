const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

function round() {
  // FIXME: надо бы убрать "target" прежде чем искать новый

  $(".target").removeClass('target')
  let divSelector = randomDivId();
  $(divSelector).addClass("target")


  // TODO: помечать target текущим номером
  console.log(hits);
  if (hits === 0) {
    $(divSelector).text('1');
  }
    if (hits === 1) {
    $(divSelector).text('2');
  }
    if (hits === 2) {
    $(divSelector).text('3');
  }
    if (hits === 3) {
    $(divSelector).text('4');
  }
    if (hits === 4) {
    $(divSelector).text('5');
  }
    if (hits === 5) {
    $(divSelector).text('6');
  }
    if (hits === 6) {
    $(divSelector).text('7');
  }
    if (hits === 7) {
    $(divSelector).text('8');
  }
    if (hits === 8) {
    $(divSelector).text('9');
  }
    if (hits === 9) {
    $(divSelector).text('10');
  }
    if(hits === 10){
      $(divSelector).removeClass('target')
    }



  // FIXME: тут надо определять при первом клике firstHitTime

 if (hits === 1) {
    firstHitTime = getTimestamp();
    console.log(firstHitTime);
  }




 
  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  // FIXME: спрятать игровое поле сначала
  $('.row').addClass('invis')



  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  // FIXME: убирать текст со старых таргетов. Кажется есть .text?
  $('.target').text('')


  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
         round();
  }
  // TODO: как-то отмечать если мы промахнулись? См CSS класс .miss
}

function init() {
  // TODO: заказчик просил отдельную кнопку, запускающую игру а не просто по загрузке
  round();

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);
