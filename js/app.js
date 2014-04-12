$(function () {
  $(".drop-bar i").on("click", abreMenu);

  function abreMenu() {
    $(".dropdown-menu").slideToggle();
  }
});