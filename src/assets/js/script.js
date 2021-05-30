// import {header} from './modules/header';
// header();

// scroll to position
$('#page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr("href"); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  if (window.matchMedia("(min-width: 769px)").matches) {
    var pos = $(elmHash).offset().top - 80; //idの上部の距離からHeaderの高さを引いた値を取得
  } else {
    var pos = $(elmHash).offset().top - 60; //idの上部の距離からHeaderの高さを引いた値を取得
  }
  $("body,html").animate({ scrollTop: pos }, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});

// open header toggle
$(".j-header_btn").click(function () {
  $(".l-header").toggleClass("active");
});

// close header toggle
$("#page-link a").click(function () {
  $(".l-header").removeClass("active");
});

// initialize
$(function () {
  new WOW().init();
});