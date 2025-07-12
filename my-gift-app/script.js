function activateGift(answer) {
  const image = document.getElementById("gift-image");
  const message = document.getElementById("response-message");

  if (answer) {
    image.src = "images/klar.jpg";
    message.textContent = "🎉 Geschenk aktiviert!";
  } else {
    message.textContent = "Vielleicht später! 😊";
  }
}