const cards = document.querySelectorAll(".card");

let removedCards = []; // Para armazenar cards removidos

cards.forEach(card => {
  const likeBtn = card.querySelector(".like");
  const dislikeBtn = card.querySelector(".dislike");
  const superBtn = card.querySelector(".superlike");
  const rewindBtn = card.querySelector(".rewind");

  // LIKE
  likeBtn.addEventListener("click", () => {
    card.style.boxShadow = "0 0 15px #84d0e8";
    alert(`Você gostou de ${card.querySelector("h2").textContent}!`);
  });

  // DISLIKE
  dislikeBtn.addEventListener("click", () => {
    removedCards.push(card);
    card.style.display = "none";
  });

  // SUPERLIKE
  superBtn.addEventListener("click", () => {
    card.classList.add("super-effect");
    setTimeout(() => card.classList.remove("super-effect"), 800);

    alert(`SUPER LIKE em ${card.querySelector("h2").textContent} ⭐`);
  });

  // REWIND
  rewindBtn.addEventListener("click", () => {
    if (removedCards.length > 0) {
      const lastRemoved = removedCards.pop();
      lastRemoved.style.display = "block";
    }
  });
});