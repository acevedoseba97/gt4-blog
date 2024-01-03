// Get the modal
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const img = document.querySelectorAll(".thumbnail");

for (let i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
  };
}

// When the user clicks again, close the modal
modal.onclick = function () {
  modalImg.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    modalImg.className = "modal-content";
  }, 400);
};
