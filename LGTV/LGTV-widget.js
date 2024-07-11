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
    <td>This site isn't part of the ${ringName} webring yet. Check webring.yetiuard.wtf to get connected</td>
  </tr>
</table>
  `);
}
else {
  previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
  nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;
  tag.insertAdjacentHTML('afterbegin', `
  <a href="${sites[previousIndex]}"><img src="https://webring.yetiuard.wtf/LGTVW_L.png"></a>
  <a href="${indexPage}"><img src="https://webring.yetiuard.wtf/LGTVW_TV.png"></a>
  <a href="${sites[nextIndex]}"><img src="https://">webring.yetiuard.wtf/LGTVW_R.png"</a>
  `);

}
