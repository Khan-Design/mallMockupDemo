
export function translate(word) {
    let lang = localStorage.getItem("lang") || "tr";
    return Dictionary?.[word]?.[lang] || '';
}

const Dictionary = {
    'campaign' : {tr: 'Kampanyalar', en: 'Campaigns'},
    'search' : {tr: 'Ara', en: 'Search'},
    'floor' : {tr: 'Kat', en: 'Floor'},
    'clothing' : {tr:'Giyim', en:'Clothing'},
    'hardware' : {tr:'Tamirat', en:'Hardware'},
    'food' : {tr:'Yiyecek', en:'Food'},
    'technology' : {tr:'Teknoloji', en:'Technology'},
    'bank' : {tr:'Banka', en:'Bank'},
    'grocery' : {tr:'Market', en:'Grocery'},
    'entertainment' : {tr:'Eğlence', en:'Entertainment'}
}