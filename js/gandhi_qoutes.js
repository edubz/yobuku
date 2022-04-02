var button = document.getElementById("generate");

var quoteText = document.getElementById("quote-text");

var quotes = {
  featured: [
    {
      id: "0",
      quote:
        "Be the change that you wish to see in the world."
    },
    {
      id: "1",
      quote: "An ounce of patience is worth more than a tonne of preaching."
    },
    {
      id: "2",
      quote:
        "An eye for an eye only ends up making the whole world blind."
    },
    {
      id: "3",
      quote: "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty."
    },
    {
      id: "4",
      quote:
        "See the good in people and help them."
    },
    {
      id: "5",
      quote:
        "In a gentle way, you can shake the world."
    },
    {
      id: "6",
      quote:
        "The weak can never forgive. Forgiveness is the attribute of the strong."
    },
    {
      id: "7",
      quote:
        "The greatness of a nation and its moral progress can be judged by the way its animals are treated."
    },
    {
      id: "8",
      quote:
        "A man is but a product of his thoughts. What he thinks he becomes."
    },
    {
      id: "9",
      quote:
        "Our greatest ability as humans is not to change the world, but to change ourselves."
    }
  ]
};

function random(max) {
  return Math.floor(Math.random() * max);
}

button.onclick = () => {
  quoteText.style.opacity = 0;
  setTimeout(function () {
  quoteText.innerHTML =
    '"' + quotes.featured[random(quotes.featured.length)].quote + '"';
  quoteText.style.opacity = 1;
  }, 500);
};
