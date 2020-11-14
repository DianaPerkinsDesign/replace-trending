function frogit() {
  let theadlines = document.getElementsByTagName("h1");
  let searchText = "Trending now";
  let trendingHeadline;

  for (let i = 0; i < theadlines.length; i++) {
    if (theadlines[i].textContent == searchText) {
      trendingHeadline = theadlines[i];
      break;
    }
  }

  let oldTrending = trendingHeadline.nextSibling;
  const frogs = document.createElement('div');
  frogs.innerHTML = '<p style="color:white; font-family:helvetica; text-align:center;">Have a nice day :)</p>';
  oldTrending.parentNode.replaceChild(frogs, oldTrending);
};

frogit();