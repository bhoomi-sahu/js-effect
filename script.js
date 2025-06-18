const statusText = document.querySelector("#status");
const addButton = document.querySelector("#add");
const likeIcon = document.querySelector("#like-icon");
const bigHeart = document.querySelector("#big-heart");
const photoContainer = document.querySelector("#photo-container");

let isFriend = false;
let isLiked = false;

addButton.addEventListener("click", () => {
  isFriend = !isFriend;
  statusText.textContent = isFriend ? "Friends" : "Stranger";
  statusText.style.color = isFriend ? "green" : "red";
  addButton.textContent = isFriend ? "Remove Friend" : "Add Friend";
});

likeIcon.addEventListener("click", () => {
  isLiked = !isLiked;
  likeIcon.classList.toggle("liked", isLiked);
});

photoContainer.addEventListener("dblclick", () => {
  isLiked = true;
  likeIcon.classList.add("liked");

  bigHeart.classList.add("show");
  setTimeout(() => {
    bigHeart.classList.remove("show");
  }, 800);
});
