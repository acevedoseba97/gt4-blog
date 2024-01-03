const d = document;

const $bodyColor = d.querySelector("[data-extreme-bg]"),
  $animButton = d.getElementById("toggle"),
  $headers = d.querySelectorAll("[data-header]"),
  $extremeHeaders = d.querySelectorAll("[data-ex-header]"),
  $logo = d.querySelector(".logo"),
  $banners = d.querySelectorAll(".banner"),
  $carHeader = d.querySelectorAll(".car-header"),
  $trackHeader = d.querySelectorAll(".track-header"),
  $impressionsHeader = d.querySelectorAll(".impressions-header");

d.addEventListener("click", (e) => {
  if ($animButton.checked) {
    $bodyColor.classList.add("extreme-bg");
    $logo.classList.add("gt-ex-logo");
    $headers.forEach((element) => {
      element.style.color = "#f00";
    });
    $extremeHeaders.forEach((element) => {
      element.classList.add("extreme-headers");
    });
    $banners.forEach((element) => {
      element.classList.add("shaky-anim");
    });
    $carHeader.forEach((element) => {
      element.classList.add("extreme");
    });
    $trackHeader.forEach((element) => {
      element.classList.add("extreme");
    });
    $impressionsHeader.forEach((element) => {
      element.classList.add("extreme");
    });
  } else {
    $bodyColor.classList.remove("extreme-bg");
    $logo.classList.remove("gt-ex-logo");
    $headers.forEach((element) => {
      element.style.color = "#000";
    });
    $extremeHeaders.forEach((element) => {
      element.classList.remove("extreme-headers");
    });
    $banners.forEach((element) => {
      element.classList.remove("shaky-anim");
    });
    $carHeader.forEach((element) => {
      element.classList.remove("extreme");
    });
    $trackHeader.forEach((element) => {
      element.classList.remove("extreme");
    });
    $impressionsHeader.forEach((element) => {
      element.classList.remove("extreme");
    });
  }
});
