var ringName = 'The LGTV ring';
var ringID = 'LGTV-ring';
var useIndex = true;
var indexPage = 'https://webring.yetiuard.wtf';
var useRandom = true;
fetch('sites.json')
    .then(response => response.json())
    .then(data => {
        var sites = data.sites;
        console.log(sites);
    })
    .catch(error => console.error('Error loading sites:', error));