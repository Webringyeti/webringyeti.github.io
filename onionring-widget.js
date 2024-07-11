var tag = document.getElementById(ringID);
thisSite = window.location.href;
thisIndex = null;
for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) {
    thisIndex = i;
    break;
  }
}
function randomSite() {
  otherSites = sites.slice();
  otherSites.splice(thisIndex, 1);
  randomIndex = Math.floor(Math.random() * otherSites.length);
  location.href = otherSites[randomIndex];
}
if (thisIndex == null) {
  tag.insertAdjacentHTML('afterbegin', `
<table>
  <tr>
    <td>This site isn't part of the ${ringName} webring yet. Visit <a href="https://webring.yetiuard.wtf">the main page</a> for more information.</td>
  </tr>
</table>
  `);
}
else {
  previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
  nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;
  indexText = "index"
  if (useIndex) {
    indexText = `<a href='${indexPage}'>index</a> | `;
  }
  randomText = "random"
  if (useRandom) {
    randomText = `<a href='javascript:void(0)' onclick='randomSite()'>random</a> | `;
  }
  tag.insertAdjacentHTML('afterbegin', `
  <table>
    <tr>
      <td class='webring-prev'><a href='${sites[previousIndex]}'>← previous</a></td>
      <td class='webring-info'>This site is part of the ${ringName} webring</br>
      <span class='webring-links'>
        ${randomText}
        ${indexText}
        <a href='https://garlic.garden/onionring/'>what is this?</a></span></td>
      <td class='webring-next'><a href='${sites[nextIndex]}'>next →</a></td>
    </tr>
  </table>
  `);
}
