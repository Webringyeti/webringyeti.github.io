// === ONIONRING-INDEX ===
//this file builds the list of sites in the ring for displaying on your index page

var tag = document.getElementById('index');
regex = /^https:\/\/|\/$/g; //strips the https:// and trailing slash off the urls for aesthetic purposes

list = "";
for (i = 0; i < sites.length; i++) {
  list += `<li><a href='${sites[i]}'>${sites[i].replace(regex, "")}</a></li>`;
}

tag.insertAdjacentHTML('afterbegin', `
<ul>
${list}
</ul>
`);
