function frogit() {
  const searchText = "Trending now";

  // Twitter highjacks a lot of the browser's functon on its page, so listening on events is proving fruitless. An interval was kind of a last resort, but it works.
  // This only works so long as the page does not totally reload at the BOM, or window layer. Currently the Home link is a full BOM load.
  setInterval(function(){
    if(location.href !== frogit.href){
      const theadlines = document.getElementsByTagName("h1");
      let trendingHeadline;
      
      for (let i = 0; i < theadlines.length; i++) {
        if (theadlines[i].textContent == searchText) {
          trendingHeadline = theadlines[i];
          break;
        }
      }

      if(trendingHeadline) {
        // href being the trip wire, we want to wait for the actual trending headline to exist before we cause the interval to short circuit.
        frogit.href = location.href;
        const oldTrending = trendingHeadline.nextSibling;
        const frogs = document.createElement('div');
        frogs.innerHTML = '<p style="color:#1DA1F2; font-family:helvetica; text-align:center;">Have a nice day :)</p>';
        oldTrending.parentNode.replaceChild(frogs, oldTrending);
      }
    }
  }, 10);
};

frogit();