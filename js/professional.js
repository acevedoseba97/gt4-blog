const d = document;

const $animButton = d.getElementById("toggle"),
  $logo = d.querySelector(".logo"),
  $banners = d.querySelectorAll(".banner"),
  $carHeader = d.querySelectorAll(".car-header"),
  $trackHeader = d.querySelectorAll(".track-header"),
  $impressionsHeader = d.querySelectorAll(".impressions-header"),
  $gtwc = d.querySelector(".gt-anim");

d.addEventListener("click", (e) => {
  if ($animButton.checked) {
    $logo.classList.add("prof-logo-anim");
    $banners.forEach((element) => {
      element.classList.add("shaky-anim");
    });
    $carHeader.forEach((element) => {
      element.classList.add("prof-anim");
    });
    $trackHeader.forEach((element) => {
      element.classList.add("prof-anim");
    });
    $impressionsHeader.forEach((element) => {
      element.classList.add("prof-anim");
    });
    $gtwc.classList.add("gt-world", "gt-wc");
  } else {
    $logo.classList.remove("prof-logo-anim");
    $banners.forEach((element) => {
      element.classList.remove("shaky-anim");
    });
    $carHeader.forEach((element) => {
      element.classList.remove("prof-anim");
    });
    $trackHeader.forEach((element) => {
      element.classList.remove("prof-anim");
    });
    $impressionsHeader.forEach((element) => {
      element.classList.remove("prof-anim");
    });
    $gtwc.classList.remove("gt-world", "gt-wc");
  }
});
