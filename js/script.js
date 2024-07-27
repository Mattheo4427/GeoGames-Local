let scoreFlagGame = 0;
let scoreMapGame = 0;

// Tableau contenant les noms et codes ISO2 de tous les pays
const countries = [
  { nom: "Andorre", code: "ad", capitale: "Andorre-la-Vieille" },
  { nom: "Émirats arabes unis", code: "ae", capitale: "Abou Dabi" },
  { nom: "Afghanistan", code: "af", capitale: "Kaboul" },
  { nom: "Antigua-et-Barbuda", code: "ag", capitale: "Saint John's" },
  { nom: "Anguilla", code: "ai", capitale: "The Valley" },
  { nom: "Albanie", code: "al", capitale: "Tirana" },
  { nom: "Arménie", code: "am", capitale: "Erevan" },
  { nom: "Angola", code: "ao", capitale: "Luanda" },
  { nom: "Antarctique", code: "aq", capitale: null },
  { nom: "Argentine", code: "ar", capitale: "Buenos Aires" },
  { nom: "Samoa américaines", code: "as", capitale: "Pago Pago" },
  { nom: "Autriche", code: "at", capitale: "Vienne" },
  { nom: "Australie", code: "au", capitale: "Canberra" },
  { nom: "Aruba", code: "aw", capitale: "Oranjestad" },
  { nom: "Îles Åland", code: "ax", capitale: "Mariehamn" },
  { nom: "Azerbaïdjan", code: "az", capitale: "Bakou" },
  { nom: "Bosnie-Herzégovine", code: "ba", capitale: "Sarajevo" },
  { nom: "Barbade", code: "bb", capitale: "Bridgetown" },
  { nom: "Bangladesh", code: "bd", capitale: "Dacca" },
  { nom: "Belgique", code: "be", capitale: "Bruxelles" },
  { nom: "Burkina Faso", code: "bf", capitale: "Ouagadougou" },
  { nom: "Bulgarie", code: "bg", capitale: "Sofia" },
  { nom: "Bahreïn", code: "bh", capitale: "Manama" },
  { nom: "Burundi", code: "bi", capitale: "Gitega" },
  { nom: "Bénin", code: "bj", capitale: "Porto-Novo" },
  { nom: "Saint-Barthélemy", code: "bl", capitale: "Gustavia" },
  { nom: "Bermudes", code: "bm", capitale: "Hamilton" },
  { nom: "Brunéi", code: "bn", capitale: "Bandar Seri Begawan" },
  { nom: "Bolivie", code: "bo", capitale: "Sucre" },
  { nom: "Bonaire", code: "bq", capitale: "Kralendijk" },
  { nom: "Brésil", code: "br", capitale: "Brasília" },
  { nom: "Bahamas", code: "bs", capitale: "Nassau" },
  { nom: "Bhoutan", code: "bt", capitale: "Thimphou" },
  { nom: "Île Bouvet", code: "bv", capitale: null },
  { nom: "Botswana", code: "bw", capitale: "Gaborone" },
  { nom: "Biélorussie", code: "by", capitale: "Minsk" },
  { nom: "Belize", code: "bz", capitale: "Belmopan" },
  { nom: "Canada", code: "ca", capitale: "Ottawa" },
  { nom: "Îles Cocos", code: "cc", capitale: "West Island" },
  { nom: "République démocratique du Congo", code: "cd", capitale: "Kinshasa" },
  { nom: "République centrafricaine", code: "cf", capitale: "Bangui" },
  { nom: "Congo", code: "cg", capitale: "Brazzaville" },
  { nom: "Suisse", code: "ch", capitale: "Berne" },
  { nom: "Côte d'Ivoire", code: "ci", capitale: "Yamoussoukro" },
  { nom: "Îles Cook", code: "ck", capitale: "Avarua" },
  { nom: "Chili", code: "cl", capitale: "Santiago" },
  { nom: "Cameroun", code: "cm", capitale: "Yaoundé" },
  { nom: "Chine", code: "cn", capitale: "Pékin" },
  { nom: "Colombie", code: "co", capitale: "Bogotá" },
  { nom: "Costa Rica", code: "cr", capitale: "San José" },
  { nom: "Cuba", code: "cu", capitale: "La Havane" },
  { nom: "Cap-Vert", code: "cv", capitale: "Praia" },
  { nom: "Curaçao", code: "cw", capitale: "Willemstad" },
  { nom: "Île Christmas", code: "cx", capitale: "Flying Fish Cove" },
  { nom: "Chypre", code: "cy", capitale: "Nicosie" },
  { nom: "République tchèque", code: "cz", capitale: "Prague" },
  { nom: "Allemagne", code: "de", capitale: "Berlin" },
  { nom: "Djibouti", code: "dj", capitale: "Djibouti" },
  { nom: "Danemark", code: "dk", capitale: "Copenhague" },
  { nom: "Dominique", code: "dm", capitale: "Roseau" },
  { nom: "République dominicaine", code: "do", capitale: "Saint-Domingue" },
  { nom: "Algérie", code: "dz", capitale: "Alger" },
  { nom: "Équateur", code: "ec", capitale: "Quito" },
  { nom: "Estonie", code: "ee", capitale: "Tallinn" },
  { nom: "Égypte", code: "eg", capitale: "Le Caire" },
  { nom: "Sahara occidental", code: "eh", capitale: "Laâyoune" },
  { nom: "Érythrée", code: "er", capitale: "Asmara" },
  { nom: "Espagne", code: "es", capitale: "Madrid" },
  { nom: "Éthiopie", code: "et", capitale: "Addis-Abeba" },
  { nom: "Finlande", code: "fi", capitale: "Helsinki" },
  { nom: "Fidji", code: "fj", capitale: "Suva" },
  { nom: "Îles Malouines", code: "fk", capitale: "Stanley" },
  { nom: "Micronésie", code: "fm", capitale: "Palikir" },
  { nom: "Îles Féroé", code: "fo", capitale: "Tórshavn" },
  { nom: "France", code: "fr", capitale: "Paris" },
  { nom: "Gabon", code: "ga", capitale: "Libreville" },
  { nom: "Angleterre", code: "gb-eng", capitale: "Londres" },
  { nom: "Irlande du Nord", code: "gb-nir", capitale: "Belfast" },
  { nom: "Écosse", code: "gb-sct", capitale: "Édimbourg" },
  { nom: "Pays de Galles", code: "gb-wls", capitale: "Cardiff" },
  { nom: "Royaume-Uni", code: "gb", capitale: "Londres" },
  { nom: "Grenade", code: "gd", capitale: "Saint-Georges" },
  { nom: "Géorgie", code: "ge", capitale: "Tbilissi" },
  { nom: "Guyane française", code: "gf", capitale: "Cayenne" },
  { nom: "Guernesey", code: "gg", capitale: "Saint-Pierre-Port" },
  { nom: "Ghana", code: "gh", capitale: "Accra" },
  { nom: "Gibraltar", code: "gi", capitale: "Gibraltar" },
  { nom: "Groenland", code: "gl", capitale: "Nuuk" },
  { nom: "Gambie", code: "gm", capitale: "Banjul" },
  { nom: "Guinée", code: "gn", capitale: "Conakry" },
  { nom: "Guadeloupe", code: "gp", capitale: "Basse-Terre" },
  { nom: "Guinée équatoriale", code: "gq", capitale: "Malabo" },
  { nom: "Grèce", code: "gr", capitale: "Athènes" },
  { nom: "Géorgie du Sud-et-les Îles Sandwich du Sud", code: "gs", capitale: "King Edward Point" },
  { nom: "Guatemala", code: "gt", capitale: "Guatemala" },
  { nom: "Guam", code: "gu", capitale: "Hagåtña" },
  { nom: "Guinée-Bissau", code: "gw", capitale: "Bissau" },
  { nom: "Guyana", code: "gy", capitale: "Georgetown" },
  { nom: "Hong Kong", code: "hk", capitale: "Hong Kong" },
  { nom: "Île Heard et îles McDonald", code: "hm", capitale: null },
  { nom: "Honduras", code: "hn", capitale: "Tegucigalpa" },
  { nom: "Croatie", code: "hr", capitale: "Zagreb" },
  { nom: "Haïti", code: "ht", capitale: "Port-au-Prince" },
  { nom: "Hongrie", code: "hu", capitale: "Budapest" },
  { nom: "Indonésie", code: "id", capitale: "Jakarta" },
  { nom: "Irlande", code: "ie", capitale: "Dublin" },
  { nom: "Israël", code: "il", capitale: "Jérusalem" },
  { nom: "Île de Man", code: "im", capitale: "Douglas" },
  { nom: "Inde", code: "in", capitale: "New Delhi" },
  { nom: "Territoire britannique de l'océan Indien", code: "io", capitale: null },
  { nom: "Irak", code: "iq", capitale: "Bagdad" },
  { nom: "Iran", code: "ir", capitale: "Téhéran" },
  { nom: "Islande", code: "is", capitale: "Reykjavik" },
  { nom: "Italie", code: "it", capitale: "Rome" },
  { nom: "Jersey", code: "je", capitale: "Saint-Hélier" },
  { nom: "Jamaïque", code: "jm", capitale: "Kingston" },
  { nom: "Jordanie", code: "jo", capitale: "Amman" },
  { nom: "Japon", code: "jp", capitale: "Tokyo" },
  { nom: "Kenya", code: "ke", capitale: "Nairobi" },
  { nom: "Kirghizistan", code: "kg", capitale: "Bichkek" },
  { nom: "Cambodge", code: "kh", capitale: "Phnom Penh" },
  { nom: "Kiribati", code: "ki", capitale: "Tarawa" },
  { nom: "Comores", code: "km", capitale: "Moroni" },
  { nom: "Saint-Christophe-et-Niévès", code: "kn", capitale: "Basseterre" },
  { nom: "Corée du Nord", code: "kp", capitale: "Pyongyang" },
  { nom: "Corée du Sud", code: "kr", capitale: "Séoul" },
  { nom: "Koweït", code: "kw", capitale: "Koweït" },
  { nom: "Îles Caïmans", code: "ky", capitale: "George Town" },
  { nom: "Kazakhstan", code: "kz", capitale: "Astana" },
  { nom: "Laos", code: "la", capitale: "Vientiane" },
  { nom: "Liban", code: "lb", capitale: "Beyrouth" },
  { nom: "Sainte-Lucie", code: "lc", capitale: "Castries" },
  { nom: "Liechtenstein", code: "li", capitale: "Vaduz" },
  { nom: "Sri Lanka", code: "lk", capitale: "Sri Jayawardenapura Kotte" },
  { nom: "Libéria", code: "lr", capitale: "Monrovia" },
  { nom: "Lesotho", code: "ls", capitale: "Maseru" },
  { nom: "Lituanie", code: "lt", capitale: "Vilnius" },
  { nom: "Luxembourg", code: "lu", capitale: "Luxembourg" },
  { nom: "Lettonie", code: "lv", capitale: "Riga" },
  { nom: "Libye", code: "ly", capitale: "Tripoli" },
  { nom: "Maroc", code: "ma", capitale: "Rabat" },
  { nom: "Monaco", code: "mc", capitale: "Monaco" },
  { nom: "Moldavie", code: "md", capitale: "Chișinău" },
  { nom: "Monténégro", code: "me", capitale: "Podgorica" },
  { nom: "Saint-Martin", code: "mf", capitale: "Marigot" },
  { nom: "Madagascar", code: "mg", capitale: "Antananarivo" },
  { nom: "Îles Marshall", code: "mh", capitale: "Majuro" },
  { nom: "Macédoine du Nord", code: "mk", capitale: "Skopje" },
  { nom: "Mali", code: "ml", capitale: "Bamako" },
  { nom: "Myanmar", code: "mm", capitale: "Naypyidaw" },
  { nom: "Mongolie", code: "mn", capitale: "Oulan-Bator" },
  { nom: "Macao", code: "mo", capitale: "Macao" },
  { nom: "Îles Mariannes du Nord", code: "mp", capitale: "Saipan" },
  { nom: "Martinique", code: "mq", capitale: "Fort-de-France" },
  { nom: "Mauritanie", code: "mr", capitale: "Nouakchott" },
  { nom: "Montserrat", code: "ms", capitale: "Brades" },
  { nom: "Malte", code: "mt", capitale: "La Valette" },
  { nom: "Maurice", code: "mu", capitale: "Port-Louis" },
  { nom: "Maldives", code: "mv", capitale: "Malé" },
  { nom: "Malawi", code: "mw", capitale: "Lilongwe" },
  { nom: "Mexique", code: "mx", capitale: "Mexico" },
  { nom: "Malaisie", code: "my", capitale: "Kuala Lumpur" },
  { nom: "Mozambique", code: "mz", capitale: "Maputo" },
  { nom: "Namibie", code: "na", capitale: "Windhoek" },
  { nom: "Nouvelle-Calédonie", code: "nc", capitale: "Nouméa" },
  { nom: "Niger", code: "ne", capitale: "Niamey" },
  { nom: "Norfolk", code: "nf", capitale: "Kingston" },
  { nom: "Nigeria", code: "ng", capitale: "Abuja" },
  { nom: "Nicaragua", code: "ni", capitale: "Managua" },
  { nom: "Pays-Bas", code: "nl", capitale: "Amsterdam" },
  { nom: "Norvège", code: "no", capitale: "Oslo" },
  { nom: "Népal", code: "np", capitale: "Katmandou" },
  { nom: "Nauru", code: "nr", capitale: "Yaren" },
  { nom: "Niue", code: "nu", capitale: "Alofi" },
  { nom: "Nouvelle-Zélande", code: "nz", capitale: "Wellington" },
  { nom: "Oman", code: "om", capitale: "Mascate" },
  { nom: "Panama", code: "pa", capitale: "Panama" },
  { nom: "Pérou", code: "pe", capitale: "Lima" },
  { nom: "Polynésie française", code: "pf", capitale: "Papeete" },
  { nom: "Papouasie-Nouvelle-Guinée", code: "pg", capitale: "Port Moresby" },
  { nom: "Philippines", code: "ph", capitale: "Manille" },
  { nom: "Pakistan", code: "pk", capitale: "Islamabad" },
  { nom: "Pologne", code: "pl", capitale: "Varsovie" },
  { nom: "Saint-Pierre-et-Miquelon", code: "pm", capitale: "Saint-Pierre" },
  { nom: "Pitcairn", code: "pn", capitale: "Adamstown" },
  { nom: "Porto Rico", code: "pr", capitale: "San Juan" },
  { nom: "Palestine", code: "ps", capitale: "Ramallah" },
  { nom: "Portugal", code: "pt", capitale: "Lisbonne" },
  { nom: "Palaos", code: "pw", capitale: "Ngerulmud" },
  { nom: "Paraguay", code: "py", capitale: "Asunción" },
  { nom: "Qatar", code: "qa", capitale: "Doha" },
  { nom: "Réunion", code: "re", capitale: "Saint-Denis" },
  { nom: "Roumanie", code: "ro", capitale: "Bucarest" },
  { nom: "Serbie", code: "rs", capitale: "Belgrade" },
  { nom: "Russie", code: "ru", capitale: "Moscou" },
  { nom: "Rwanda", code: "rw", capitale: "Kigali" },
  { nom: "Arabie saoudite", code: "sa", capitale: "Riyad" },
  { nom: "Îles Salomon", code: "sb", capitale: "Honiara" },
  { nom: "Seychelles", code: "sc", capitale: "Victoria" },
  { nom: "Soudan", code: "sd", capitale: "Khartoum" },
  { nom: "Suède", code: "se", capitale: "Stockholm" },
  { nom: "Singapour", code: "sg", capitale: "Singapour" },
  { nom: "Sainte-Hélène", code: "sh", capitale: "Jamestown" },
  { nom: "Slovénie", code: "si", capitale: "Ljubljana" },
  { nom: "Slovaquie", code: "sk", capitale: "Bratislava" },
  { nom: "Sierra Leone", code: "sl", capitale: "Freetown" },
  { nom: "Saint-Marin", code: "sm", capitale: "Saint-Marin" },
  { nom: "Sénégal", code: "sn", capitale: "Dakar" },
  { nom: "Somalie", code: "so", capitale: "Mogadiscio" },
  { nom: "Suriname", code: "sr", capitale: "Paramaribo" },
  { nom: "Soudan du Sud", code: "ss", capitale: "Djouba" },
  { nom: "Sao Tomé-et-Principe", code: "st", capitale: "Sao Tomé" },
  { nom: "El Salvador", code: "sv", capitale: "San Salvador" },
  { nom: "Syrie", code: "sy", capitale: "Damas" },
  { nom: "Eswatini", code: "sz", capitale: "Mbabane" },
  { nom: "Îles Turques-et-Caïques", code: "tc", capitale: "Cockburn Town" },
  { nom: "Tchad", code: "td", capitale: "N'Djaména" },
  { nom: "Territoires australiens de l'Antarctique", code: "tf", capitale: null },
  { nom: "Togo", code: "tg", capitale: "Lomé" },
  { nom: "Thaïlande", code: "th", capitale: "Bangkok" },
  { nom: "Tadjikistan", code: "tj", capitale: "Douchanbé" },
  { nom: "Tokelau", code: "tk", capitale: "Fakaofo" },
  { nom: "Timor-Leste", code: "tl", capitale: "Dili" },
  { nom: "Turkménistan", code: "tm", capitale: "Achgabat" },
  { nom: "Tunisie", code: "tn", capitale: "Tunis" },
  { nom: "Tonga", code: "to", capitale: "Nuku'alofa" },
  { nom: "Turquie", code: "tr", capitale: "Ankara" },
  { nom: "Trinité-et-Tobago", code: "tt", capitale: "Port-d'Espagne" },
  { nom: "Tuvalu", code: "tv", capitale: "Funafuti" },
  { nom: "Taïwan", code: "tw", capitale: "Taipei" },
  { nom: "Tanzanie", code: "tz", capitale: "Dodoma" },
  { nom: "Ukraine", code: "ua", capitale: "Kiev" },
  { nom: "Ouganda", code: "ug", capitale: "Kampala" },
  { nom: "Îles mineures éloignées des États-Unis", code: "um", capitale: null },
  { nom: "États-Unis", code: "us", capitale: "Washington" },
  { nom: "Uruguay", code: "uy", capitale: "Montevideo" },
  { nom: "Ouzbékistan", code: "uz", capitale: "Tachkent" },
  { nom: "Vatican", code: "va", capitale: "Cité du Vatican" },
  { nom: "Saint-Vincent-et-les-Grenadines", code: "vc", capitale: "Kingstown" },
  { nom: "Venezuela", code: "ve", capitale: "Caracas" },
  { nom: "Îles Vierges britanniques", code: "vg", capitale: "Road Town" },
  { nom: "Îles Vierges des États-Unis", code: "vi", capitale: "Charlotte-Amélie" },
  { nom: "Viêt Nam", code: "vn", capitale: "Hanoï" },
  { nom: "Vanuatu", code: "vu", capitale: "Port-Vila" },
  { nom: "Wallis-et-Futuna", code: "wf", capitale: "Mata-Utu" },
  { nom: "Samoa", code: "ws", capitale: "Apia" },
  { nom: "Yémen", code: "ye", capitale: "Sanaa" },
  { nom: "Mayotte", code: "yt", capitale: "Mamoudzou" },
  { nom: "Afrique du Sud", code: "za", capitale: "Pretoria" },
  { nom: "Zambie", code: "zm", capitale: "Lusaka" },
  { nom: "Zimbabwe", code: "zw", capitale: "Harare" }
];

// Tableau contenant les pays à ne pax inclure dans le jeu Map Game (car pas présents dans le SVG)
const exclure = [
  { nom: "Antarctique", code: "aq", capitale: null },
  { nom: "Angleterre", code: "gb-eng", capitale: "Londres" },
  { nom: "Irlande du Nord", code: "gb-nir", capitale: "Belfast" },
  { nom: "Écosse", code: "gb-sct", capitale: "Édimbourg" },
  { nom: "Pays de Galles", code: "gb-wls", capitale: "Cardiff" },
  { nom: "Îles mineures éloignées des États-Unis", code: "um", capitale: null }
];


// Fonction qui renvoie :
// - 1 nom de pays aléatoire
// - le code ISO2 de ce pays
// Prend en entrée le tableau de pays, et le tableau des pays à exclure
function getRandomInfos(array, exclude) {

  // Créer un tableau des codes à exclure
  const excludeCodes = exclude.map(item => item.code);

  // Filtrer le tableau pour exclure les éléments dont le code est dans excludeCodes
  const filteredArray = array.filter(item => !excludeCodes.includes(item.code));

  // Vérifier si le tableau filtré n'est pas vide
  if (filteredArray.length === 0) {
      return null;
  }

  // Sélectionner un élément aléatoire du tableau filtré
  const randomIndex = Math.floor(Math.random() * filteredArray.length);
  return [filteredArray[randomIndex].nom, filteredArray[randomIndex].code, filteredArray[randomIndex].capitale];
}

// Fonction qui renvoie :
// - <num> noms de pays
// - les codes ISO2 de ces pays
// - l'index d'un pays dit correct
// Prend en entrée le tableau de pays, et le nombre de pays à sélectionner (>2 pour être utile)
function getRandomCountryDetails(array, num) {

  // Groupes de drapeaux identiques
  const flagGroups = [
    ["bv", "no","sj"], // Norvège
    ["fr", "mf"], // France
    ["um", "us"], // Etats-Unis
    ["au", "hm"] // Australie
  ];

  // Fonction qui verifie qu'il n'y a pas de doublons
  // C'est a dire pas 2 drapeaux identiques dans la meme question
  function hasGroupConflict(selected) {
    for (const group of flagGroups) {
        const count = selected.filter(country => group.includes(country.code)).length;
        if (count > 1) {
            return true;
        }
    }
    return false;
  }

  let selectedCountries;
  // Tant que 2 drapeaux identiques sont selectionnés, on rechoisit
  do {
      const shuffled = array.sort(() => 0.5 - Math.random());
      selectedCountries = shuffled.slice(0, num);
  } while (hasGroupConflict(selectedCountries));

  const randomIndex = Math.floor(Math.random() * num);
  
  return {
      codes: selectedCountries.map(country => country.code),
      names: selectedCountries.map(country => country.nom),
      capitals : selectedCountries.map(country => country.capitale),
      correct: randomIndex + 1
  };
}

// Evenement pour les boutons de jeu
if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
  document.getElementById('playButton').addEventListener('click', flagGame);
  document.getElementById('playButton2').addEventListener('click', mapGame);
  document.getElementById('borders').classList.add('easy');
  document.getElementById('borders').addEventListener('click', changeDifficulty);
  const modeFlagGame = document.getElementById('modeFlagGame');
  const modeMapGame = document.getElementById('modeMapGame');
  modeFlagGame.classList.add('countries');
  modeFlagGame.addEventListener('click', () => changeMode(modeFlagGame));
  modeMapGame.classList.add('countries');
  modeMapGame.addEventListener('click', () => changeMode(modeMapGame));
}

// Fonction qui gere le bouton de changement de difficulté
function changeDifficulty(){
  const button = document.getElementById('borders');
    if (button.classList.contains('easy')) {
      button.classList.remove('easy');
      button.classList.add('hard');
      button.innerHTML = "Difficile";
    } else {
      button.classList.remove('hard');
      button.classList.add('easy');
      button.innerHTML = "Facile";
    }
}

// Fonction qui gere le bouton de changement de mode
function changeMode(button){
  if (button.classList.contains('countries')) {
    button.classList.remove('countries');
    button.classList.add('capitals');
    button.innerHTML = "Capitales";
  } else {
    button.classList.remove('capitals');
    button.classList.add('countries');
    button.innerHTML = "Pays";
  }
}

// Fonction qui enleve les accents d'un string
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Evenement pour le menu de recherche de pays auto-complétant
document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.endsWith('apprendre.html') || window.location.pathname.endsWith('apprendre')) {
    const searchBox = document.getElementById('search');
    const countryList = document.getElementById('country-list');

   // Créez un tableau des noms de pays
   const countriesSugg = countries.map(country => country.nom);

   searchBox.addEventListener('input', function() {
     const input = this.value;
     // Nettoyez les pays actuels
     const flag = document.getElementById('flagSugg');
     countryList.innerHTML = '';
     flag.src = '';

     if (input) {
       const filteredCountries = countriesSugg.filter(item => 
         removeAccents(item.toLowerCase()).startsWith(removeAccents(input.toLowerCase()))
       );
       filteredCountries.forEach(item => {
         const li = document.createElement('li');
         li.id = 'suggestion';
         li.textContent = item;
         li.addEventListener('click', function() {
           searchBox.value = item;
           countryList.innerHTML = '';
           const selectedCountry = countries.find(country => country.nom === item);
           flag.src = `../flags/${selectedCountry.code}.png`;
         });
         countryList.appendChild(li);
       });
     }
   });
 }
});

// Fonction qui démarre le jeu Flag Game
async function flagGame() {
  try {
    let result = getRandomCountryDetails(countries, 4);
    let codes = result.codes;
    let originalIndex = result.correct;
    let names = "";
    const button = document.getElementById('modeFlagGame');
    if (button.classList[1] === "countries"){
      names = result.names;
    } else {
      names = result.capitals;
    }

    // ------------ Initialisation CSS ------------//

    // Ajoute un ecart au dessus
    const countryText = document.getElementById('countryName');
    countryText.style.marginTop = '8.5vh';

    // Fait disparaitre le bouton Jouer
    const playButton = document.getElementById('playButton');
    playButton.style.pointerEvents = 'none';
    playButton.style.display = 'none';

    // Fait disparaitre le bouton mode
    const modeButton = document.getElementById('modeFlagGame');
    modeButton.style.display = "none";

     // Permet de cliquer sur les drapeaux et enlève la bordure
    for (let i = 1; i <= 4; i++) {
      const div = document.getElementById('div' + i);
      const img = document.getElementById('image' + i);
      div.style.pointerEvents = 'auto';
      img.style.outline = 'none';
    }

    // Efface le nom des pays
    for (let i = 1; i <= 4; i++) {
      const name = document.getElementById('name' + i);
      name.textContent = "";
    }

     // ------------ Initialisation CSS ------------//

    document.getElementById('scoreFlagGame').textContent = "Score : " + scoreFlagGame;

    const mode = document.getElementById('modeFlagGame');
    if (mode.classList[1] === "countries"){
      document.getElementById('countryName').innerHTML = "Trouvez le drapeau de : " + "<strong>" + names[originalIndex-1] + "</strong>";
    } else {
      while (names.includes(null)){
        result = getRandomCountryDetails(countries, 4);
        codes = result.codes;
        names = result.capitals;
        originalIndex = result.correct;
      }
      document.getElementById('countryName').innerHTML = "Trouvez le drapeau dont la capitale est : " + "<strong>" + names[originalIndex-1] + "</strong>";
    }

    // Fonction pour précharger une image
    function preloadImage(src) {
      return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img);
          img.onerror = reject;
      });
    }

    // Récupère l'id des images
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const image3 = document.getElementById('image3');
    const image4 = document.getElementById('image4');

    // Précharge les images
    Promise.all([
        preloadImage(`flags/${codes[0]}.png`),
        preloadImage(`flags/${codes[1]}.png`),
        preloadImage(`flags/${codes[2]}.png`),
        preloadImage(`flags/${codes[3]}.png`)
    ]).then(images => {
        // Met à jour les attributs src des images
        image1.src = images[0].src;
        image2.src = images[1].src;
        image3.src = images[2].src;
        image4.src = images[3].src;
    }).catch(error => {
        console.error('Erreur lors du préchargement des images', error);
    });


 // ------------ Gestion clic drapeaux ------------//

    let hasClicked = false;

    image1.onclick = () => { 

      if (hasClicked) return;
      hasClicked = true;

      if (originalIndex === 1) { 
        scoreFlagGame++;
        // Ajoute la bordure sur le drapeau correct
        const correctFlag = document.getElementById('image1');
        correctFlag.style.outline = "solid green 10px";
        setTimeout(flagGame, 1000);
      } else {
        endFlagGame(1, originalIndex, names);
      }
    };
    image2.onclick = () => { 

      if (hasClicked) return;
      hasClicked = true;

      if (originalIndex === 2) { 
        scoreFlagGame++;
        // Ajoute la bordure sur le drapeau correct
        const correctFlag = document.getElementById('image2');
        correctFlag.style.outline = "solid green 10px";
        setTimeout(flagGame, 1000);
      } else {
        endFlagGame(2, originalIndex, names);
      }
    };
    image3.onclick = () => { 

      if (hasClicked) return;
      hasClicked = true;

      if (originalIndex === 3) { 
        scoreFlagGame++;
        // Ajoute la bordure sur le drapeau correct
        const correctFlag = document.getElementById('image3');
        correctFlag.style.outline = "solid green 10px";
        setTimeout(flagGame, 1000);
      } else {
        endFlagGame(3, originalIndex, names);
      }
    };
    image4.onclick = () => { 

      if (hasClicked) return;
      hasClicked = true;

      if (originalIndex === 4) { 
        scoreFlagGame++;
        // Ajoute la bordure sur le drapeau correct
        const correctFlag = document.getElementById('image4');
        correctFlag.style.outline = "solid green 10px";
        setTimeout(flagGame, 1000);
      } else {
        endFlagGame(4, originalIndex, names);
      }
    };

    // ------------ Gestion clic drapeaux ------------//

    document.getElementById('content').style.display = 'flex';
  } catch (error) {
    console.error('Error:', error);
  }
}

// Fonction de mise à jour des éléments quand le jeu Flag Game est fini
async function endFlagGame(bad, answer, names){
// ------------ Gestion CSS ------------//

  // Ajoute la bordure sur le drapeau correct
  const correctFlag = document.getElementById('image' + answer);
  correctFlag.style.outline = "solid green 10px";

  // Ajoute la bordure sur le drapeau cliqué
  const wrongFlag = document.getElementById('image' + bad);
  wrongFlag.style.outline = "solid red 10px";

  // Empeche de cliquer les drapeaux
  for (let i = 1; i <= 4; i++) {
    const div = document.getElementById('div' + i);
    div.style.pointerEvents = 'none';
  }

  // Affiche les noms des pays ou capitales quand perdu
  for (let i = 1; i <= 4; i++) {
    const name = document.getElementById('name' + i);
    name.textContent = names[i-1];
    name.style.fontWeight = "bold";
  } 


  // Permet de recliquer à nouveau le bouton jouer
  const playButton = document.getElementById('playButton');
  playButton.style.pointerEvents = 'auto';
  playButton.style.display = 'flex';
  playButton.textContent = 'Rejouer';

  // Permet de recliquer à nouveau le bouton mode
  const modeButton = document.getElementById('modeFlagGame');
  modeButton.style.display = "block";

  // Enleve l'ecart definit pendant le jeu
  const countryText = document.getElementById('countryName');
  countryText.style.marginTop = '1vh';

  scoreFlagGame = 0;
}

// Fonction qui démarre le jeu Map Game
async function mapGame() {

  const svg = document.querySelector('svg');
  const paths = svg.querySelectorAll('path');

  // ------------ Initialisation CSS ------------//

  // Retrait des noms de pays affichés
  let tooltips = document.querySelectorAll('.title-tooltip');
  tooltips.forEach(tooltip => tooltip.remove());

  // Ajoute un ecart au dessus
  const countryText = document.getElementById('countryName2');
  countryText.style.marginTop = '8.5vh';

  // Fait disparaitre le bouton
  const playButton = document.getElementById('playButton2');
  playButton.style.pointerEvents = 'none';
  playButton.style.display = 'none';

  // Fait disparaitre le bouton difficulté
  const borderButton = document.getElementById('borders');
  borderButton.style.display = "none";

  // Fait disparaitre le bouton mode
  const modeButton = document.getElementById('modeMapGame');
  modeButton.style.display = "none";

  // Ajoute la carte
  const map = document.getElementById('svg-container');
  map.style.display = "block";

  const difficulty = document.getElementById('borders');
  if (difficulty.classList[1] === "easy"){
    paths.forEach((path) => {
      path.style.fill = 'rgba(60,60,60, .5)';
      path.style.strokeWidth = "0.25px";
      path.style.stroke = "black";
      path.classList.remove('pulsing-stroke');
    });
  } else{
    paths.forEach((path) => {
      path.style.fill = 'rgba(60,60,60, .5)';
      path.style.strokeWidth = 0;
      path.classList.remove('pulsing-stroke');
    });
  }

  // ------------ Initialisation CSS ------------//

  document.getElementById('scoreMapGame').textContent = "Score : " + scoreMapGame;
  let randomInfos = getRandomInfos(countries, exclure);

  const mode = document.getElementById('modeMapGame');
  if (mode.classList[1] === "countries"){
    document.getElementById('countryName2').innerHTML = "Cliquez sur : " + "<strong>" + randomInfos[0] + "</strong>";
  } else {
    while (randomInfos[2] === null){
      randomInfos = getRandomInfos(countries, exclure);
    }
    document.getElementById('countryName2').innerHTML = "Cliquez sur le pays ayant pour capitale : " + "<strong>" + randomInfos[2] + "</strong>";
  }
  paths.forEach((path) => {
    // Add a new 'click' event listener with a defined function handleClick
    path.addEventListener('click', handleClick);
  });
  
  function handleClick(event) {

    paths.forEach((path) => {
      path.removeEventListener('click', handleClick);
    });
    // Inside handleClick function, refer to 'path' as 'this'
    const element = event.target;
    let id = this.getAttribute('id');
    let code = randomInfos[1];
    
    if (code === id.toLowerCase()) {
      element.style.fill = "green";
      element.style.strokeWidth = "1px";
      element.style.stroke = "rgb(5, 94, 27)";
      setTimeout(() => {
        scoreMapGame++;
        mapGame();
      },1250);
    } else {
      endMapGame(id, code);
    }
  }
}

// Fonction de mise à jour des éléments quand le jeu Map Game est fini
async function endMapGame(bad, answer){

  const svg = document.querySelector('svg');
  const paths = svg.querySelectorAll('path');

  // Appliquer un style différent à l'élément SVG avec le titre correspondant
  paths.forEach((path) => {
    if (path.getAttribute('id') === bad){
        path.style.fill = 'red';
        // Crée un élément div pour afficher le titre
        let titleDiv = document.createElement('div');
        titleDiv.classList.add('title-tooltip'); // Ajoute une classe pour identifier les divs créés
        titleDiv.style.position = 'absolute';
        titleDiv.style.backgroundColor = 'black';
        titleDiv.style.border = '1px solid white';
        titleDiv.style.padding = '5px';
        titleDiv.style.zIndex = '1000';
        titleDiv.textContent = path.getAttribute('title');

        // Positionne le div près de l'endroit où l'utilisateur a cliqué
        titleDiv.style.left = `${event.pageX}px`;
        titleDiv.style.top = `${event.pageY}px`;

        // Ajoute le div au corps du document
        document.body.appendChild(titleDiv);
    }
    if (path.getAttribute('id').toLowerCase() === answer) {
      path.style.fill = 'green';
      path.classList.add('pulsing-stroke');
  }
  });

  // Permet de recliquer à nouveau le bouton jouer
  const playButton = document.getElementById('playButton2');
  playButton.style.pointerEvents = 'auto';
  playButton.style.display = 'flex';
  playButton.textContent = 'Rejouer';

  // Permet de recliquer à nouveau le bouton difficulté
  const borderButton = document.getElementById('borders');
  borderButton.style.display = "block";

  // Permet de recliquer à nouveau le bouton mode
  const modeButton = document.getElementById('modeMapGame');
  modeButton.style.display = "block";

  // Enleve l'ecart definit pendant le jeu
  const countryText = document.getElementById('countryName2');
  countryText.style.marginTop = '1vh';

  scoreMapGame = 0;
}