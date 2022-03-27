var button = document.getElementById("generate");

var quoteText = document.getElementById("quote-text");

var quotes = {
  featured: [
    {
      id: "0",
      quote:
        "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that."
    },
    {
      id: "1",
      quote: "Injustice anywhere is a threat to justice everywhere."
    },
    {
      id: "2",
      quote:
        "Our lives begin to end the day we become silent about things that matter."
    },
    {
      id: "3",
      quote: "The time is always right to do what is right."
    },
    {
      id: "4",
      quote:
        "Free at last, Free at last, Thank God almighty we are free at last."
    },
    {
      id: "5",
      quote:
        "In the end, we will remember not the words of our enemies, but the silence of our friends."
    },
    {
      id: "6",
      quote:
        "Life's most persistent and urgent question is, 'What are you doing for others?"
    },
    {
      id: "7",
      quote:
        "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy."
    },
    {
      id: "8",
      quote:
        "Faith is taking the first step even when you don't see the whole staircase."
    },
    {
      id: "9",
      quote:
        "Morality cannot be legislated, but behavior can be regulated. Judicial decrees may not change the heart, but they can restrain the heartless."
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
