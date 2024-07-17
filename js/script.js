const countries = [
  { nom: "Andorre", code: "ad" },
  { nom: "Émirats arabes unis", code: "ae" },
  { nom: "Afghanistan", code: "af" },
  { nom: "Antigua-et-Barbuda", code: "ag" },
  { nom: "Anguilla", code: "ai" },
  { nom: "Albanie", code: "al" },
  { nom: "Arménie", code: "am" },
  { nom: "Angola", code: "ao" },
  { nom: "Antarctique", code: "aq" },
  { nom: "Argentine", code: "ar" },
  { nom: "Samoa américaines", code: "as" },
  { nom: "Autriche", code: "at" },
  { nom: "Australie", code: "au" },
  { nom: "Aruba", code: "aw" },
  { nom: "Îles Åland", code: "ax" },
  { nom: "Azerbaïdjan", code: "az" },
  { nom: "Bosnie-Herzégovine", code: "ba" },
  { nom: "Barbade", code: "bb" },
  { nom: "Bangladesh", code: "bd" },
  { nom: "Belgique", code: "be" },
  { nom: "Burkina Faso", code: "bf" },
  { nom: "Bulgarie", code: "bg" },
  { nom: "Bahreïn", code: "bh" },
  { nom: "Burundi", code: "bi" },
  { nom: "Bénin", code: "bj" },
  { nom: "Saint-Barthélemy", code: "bl" },
  { nom: "Bermudes", code: "bm" },
  { nom: "Brunéi", code: "bn" },
  { nom: "Bolivie", code: "bo" },
  { nom: "Bonaire", code: "bq" },
  { nom: "Brésil", code: "br" },
  { nom: "Bahamas", code: "bs" },
  { nom: "Bhoutan", code: "bt" },
  { nom: "Île Bouvet", code: "bv" },
  { nom: "Botswana", code: "bw" },
  { nom: "Biélorussie", code: "by" },
  { nom: "Belize", code: "bz" },
  { nom: "Canada", code: "ca" },
  { nom: "Îles Cocos", code: "cc" },
  { nom: "République démocratique du Congo", code: "cd" },
  { nom: "République centrafricaine", code: "cf" },
  { nom: "Congo", code: "cg" },
  { nom: "Suisse", code: "ch" },
  { nom: "Côte d'Ivoire", code: "ci" },
  { nom: "Îles Cook", code: "ck" },
  { nom: "Chili", code: "cl" },
  { nom: "Cameroun", code: "cm" },
  { nom: "Chine", code: "cn" },
  { nom: "Colombie", code: "co" },
  { nom: "Costa Rica", code: "cr" },
  { nom: "Cuba", code: "cu" },
  { nom: "Cap-Vert", code: "cv" },
  { nom: "Curaçao", code: "cw" },
  { nom: "Île Christmas", code: "cx" },
  { nom: "Chypre", code: "cy" },
  { nom: "République tchèque", code: "cz" },
  { nom: "Allemagne", code: "de" },
  { nom: "Djibouti", code: "dj" },
  { nom: "Danemark", code: "dk" },
  { nom: "Dominique", code: "dm" },
  { nom: "République dominicaine", code: "do" },
  { nom: "Algérie", code: "dz" },
  { nom: "Équateur", code: "ec" },
  { nom: "Estonie", code: "ee" },
  { nom: "Égypte", code: "eg" },
  { nom: "Sahara occidental", code: "eh" },
  { nom: "Érythrée", code: "er" },
  { nom: "Espagne", code: "es" },
  { nom: "Éthiopie", code: "et" },
  { nom: "Finlande", code: "fi" },
  { nom: "Fidji", code: "fj" },
  { nom: "Îles Malouines", code: "fk" },
  { nom: "Micronésie", code: "fm" },
  { nom: "Îles Féroé", code: "fo" },
  { nom: "France", code: "fr" },
  { nom: "Gabon", code: "ga" },
  { nom: "Angleterre", code: "gb-eng" },
  { nom: "Irlande du Nord", code: "gb-nir" },
  { nom: "Écosse", code: "gb-sct" },
  { nom: "Pays de Galles", code: "gb-wls" },
  { nom: "Royaume-Uni", code: "gb" },
  { nom: "Grenade", code: "gd" },
  { nom: "Géorgie", code: "ge" },
  { nom: "Guyane française", code: "gf" },
  { nom: "Guernesey", code: "gg" },
  { nom: "Ghana", code: "gh" },
  { nom: "Gibraltar", code: "gi" },
  { nom: "Groenland", code: "gl" },
  { nom: "Gambie", code: "gm" },
  { nom: "Guinée", code: "gn" },
  { nom: "Guadeloupe", code: "gp" },
  { nom: "Guinée équatoriale", code: "gq" },
  { nom: "Grèce", code: "gr" },
  { nom: "Géorgie du Sud-et-les Îles Sandwich du Sud", code: "gs" },
  { nom: "Guatemala", code: "gt" },
  { nom: "Guam", code: "gu" },
  { nom: "Guinée-Bissau", code: "gw" },
  { nom: "Guyana", code: "gy" },
  { nom: "Hong Kong", code: "hk" },
  { nom: "Îles Heard-et-MacDonald", code: "hm" },
  { nom: "Honduras", code: "hn" },
  { nom: "Croatie", code: "hr" },
  { nom: "Haïti", code: "ht" },
  { nom: "Hongrie", code: "hu" },
  { nom: "Indonésie", code: "id" },
  { nom: "Irlande", code: "ie" },
  { nom: "Israël", code: "il" },
  { nom: "Île de Man", code: "im" },
  { nom: "Inde", code: "in" },
  { nom: "Territoire britannique de l'océan Indien", code: "io" },
  { nom: "Irak", code: "iq" },
  { nom: "Iran", code: "ir" },
  { nom: "Islande", code: "is" },
  { nom: "Italie", code: "it" },
  { nom: "Jersey", code: "je" },
  { nom: "Jamaïque", code: "jm" },
  { nom: "Jordanie", code: "jo" },
  { nom: "Japon", code: "jp" },
  { nom: "Kenya", code: "ke" },
  { nom: "Kirghizistan", code: "kg" },
  { nom: "Cambodge", code: "kh" },
  { nom: "Kiribati", code: "ki" },
  { nom: "Comores", code: "km" },
  { nom: "Saint-Kitts-et-Nevis", code: "kn" },
  { nom: "Corée du Nord", code: "kp" },
  { nom: "Corée du Sud", code: "kr" },
  { nom: "Koweït", code: "kw" },
  { nom: "Îles Caïmans", code: "ky" },
  { nom: "Kazakhstan", code: "kz" },
  { nom: "Laos", code: "la" },
  { nom: "Liban", code: "lb" },
  { nom: "Sainte-Lucie", code: "lc" },
  { nom: "Liechtenstein", code: "li" },
  { nom: "Sri Lanka", code: "lk" },
  { nom: "Libéria", code: "lr" },
  { nom: "Lesotho", code: "ls" },
  { nom: "Lituanie", code: "lt" },
  { nom: "Luxembourg", code: "lu" },
  { nom: "Lettonie", code: "lv" },
  { nom: "Libye", code: "ly" },
  { nom: "Maroc", code: "ma" },
  { nom: "Monaco", code: "mc" },
  { nom: "Moldavie", code: "md" },
  { nom: "Monténégro", code: "me" },
  { nom: "Saint-Martin (partie française)", code: "mf" },
  { nom: "Madagascar", code: "mg" },
  { nom: "Îles Marshall", code: "mh" },
  { nom: "Macédoine du Nord", code: "mk" },
  { nom: "Mali", code: "ml" },
  { nom: "Myanmar", code: "mm" },
  { nom: "Mongolie", code: "mn" },
  { nom: "Macao", code: "mo" },
  { nom: "Îles Mariannes du Nord", code: "mp" },
  { nom: "Martinique", code: "mq" },
  { nom: "Mauritanie", code: "mr" },
  { nom: "Montserrat", code: "ms" },
  { nom: "Malte", code: "mt" },
  { nom: "Maurice", code: "mu" },
  { nom: "Maldives", code: "mv" },
  { nom: "Malawi", code: "mw" },
  { nom: "Mexique", code: "mx" },
  { nom: "Malaisie", code: "my" },
  { nom: "Mozambique", code: "mz" },
  { nom: "Namibie", code: "na" },
  { nom: "Nouvelle-Calédonie", code: "nc" },
  { nom: "Niger", code: "ne" },
  { nom: "Île Norfolk", code: "nf" },
  { nom: "Nigeria", code: "ng" },
  { nom: "Nicaragua", code: "ni" },
  { nom: "Pays-Bas", code: "nl" },
  { nom: "Norvège", code: "no" },
  { nom: "Népal", code: "np" },
  { nom: "Nauru", code: "nr" },
  { nom: "Niue", code: "nu" },
  { nom: "Nouvelle-Zélande", code: "nz" },
  { nom: "Oman", code: "om" },
  { nom: "Panama", code: "pa" },
  { nom: "Pérou", code: "pe" },
  { nom: "Polynésie française", code: "pf" },
  { nom: "Papouasie-Nouvelle-Guinée", code: "pg" },
  { nom: "Philippines", code: "ph" },
  { nom: "Pakistan", code: "pk" },
  { nom: "Pologne", code: "pl" },
  { nom: "Saint-Pierre-et-Miquelon", code: "pm" },
  { nom: "Îles Pitcairn", code: "pn" },
  { nom: "Porto Rico", code: "pr" },
  { nom: "Palestine", code: "ps" },
  { nom: "Portugal", code: "pt" },
  { nom: "Palaos", code: "pw" },
  { nom: "Paraguay", code: "py" },
  { nom: "Qatar", code: "qa" },
  { nom: "La Réunion", code: "re" },
  { nom: "Roumanie", code: "ro" },
  { nom: "Serbie", code: "rs" },
  { nom: "Russie", code: "ru" },
  { nom: "Rwanda", code: "rw" },
  { nom: "Arabie Saoudite", code: "sa" },
  { nom: "Îles Salomon", code: "sb" },
  { nom: "Seychelles", code: "sc" },
  { nom: "Soudan", code: "sd" },
  { nom: "Suède", code: "se" },
  { nom: "Singapour", code: "sg" },
  { nom: "Sainte-Hélène", code: "sh" },
  { nom: "Slovénie", code: "si" },
  { nom: "Svalbard et Jan Mayen", code: "sj" },
  { nom: "Slovaquie", code: "sk" },
  { nom: "Sierra Leone", code: "sl" },
  { nom: "Saint-Marin", code: "sm" },
  { nom: "Sénégal", code: "sn" },
  { nom: "Somalie", code: "so" },
  { nom: "Suriname", code: "sr" },
  { nom: "Soudan du Sud", code: "ss" },
  { nom: "Sao Tomé-et-Principe", code: "st" },
  { nom: "Salvador", code: "sv" },
  { nom: "Saint-Martin (partie néerlandaise)", code: "sx" },
  { nom: "Syrie", code: "sy" },
  { nom: "Eswatini", code: "sz" },
  { nom: "Îles Turques-et-Caïques", code: "tc" },
  { nom: "Tchad", code: "td" },
  { nom: "Terres australes françaises", code: "tf" },
  { nom: "Togo", code: "tg" },
  { nom: "Thaïlande", code: "th" },
  { nom: "Tadjikistan", code: "tj" },
  { nom: "Tokelau", code: "tk" },
  { nom: "Timor oriental", code: "tl" },
  { nom: "Turkménistan", code: "tm" },
  { nom: "Tunisie", code: "tn" },
  { nom: "Tonga", code: "to" },
  { nom: "Turquie", code: "tr" },
  { nom: "Trinité-et-Tobago", code: "tt" },
  { nom: "Tuvalu", code: "tv" },
  { nom: "Taïwan", code: "tw" },
  { nom: "Tanzanie", code: "tz" },
  { nom: "Ukraine", code: "ua" },
  { nom: "Ouganda", code: "ug" },
  { nom: "Îles mineures éloignées des États-Unis", code: "um" },
  { nom: "États-Unis", code: "us" },
  { nom: "Uruguay", code: "uy" },
  { nom: "Ouzbékistan", code: "uz" },
  { nom: "Vatican", code: "va" },
  { nom: "Saint-Vincent-et-les-Grenadines", code: "vc" },
  { nom: "Venezuela", code: "ve" },
  { nom: "Îles Vierges britanniques", code: "vg" },
  { nom: "Îles Vierges des États-Unis", code: "vi" },
  { nom: "Viêt Nam", code: "vn" },
  { nom: "Vanuatu", code: "vu" },
  { nom: "Wallis-et-Futuna", code: "wf" },
  { nom: "Samoa", code: "ws" },
  { nom: "Kosovo", code: "xk" },
  { nom: "Yémen", code: "ye" },
  { nom: "Mayotte", code: "yt" },
  { nom: "Afrique du Sud", code: "za" },
  { nom: "Zambie", code: "zm" },
  { nom: "Zimbabwe", code: "zw" }
];

const exclure = [
  { nom: "Antarctique", code: "aq" },
  { nom: "Angleterre", code: "gb-eng" },
  { nom: "Irlande du Nord", code: "gb-nir" },
  { nom: "Écosse", code: "gb-sct" },
  { nom: "Pays de Galles", code: "gb-wls" },
  { nom: "Îles mineures éloignées des États-Unis", code: "um" }
];

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
  return [filteredArray[randomIndex].nom, filteredArray[randomIndex].code];
}

// Fonction qui renvoie :
// - 4 noms de pays
// - les 4 codes ISO2 de ces pays
// - l'index du pays correct
function getRandomCountryDetails(arr, num) {

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
      const shuffled = arr.sort(() => 0.5 - Math.random());
      selectedCountries = shuffled.slice(0, num);
  } while (hasGroupConflict(selectedCountries));

  const randomIndex = Math.floor(Math.random() * num);
  
  return {
      codes: selectedCountries.map(country => country.code),
      names: selectedCountries.map(country => country.nom),
      correct: randomIndex + 1
  };
}

if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
  document.getElementById('playButton').addEventListener('click', flagGame);
  document.getElementById('playButton2').addEventListener('click', mapGame);
  document.getElementById('borders').classList.add('easy');
  document.getElementById('borders').addEventListener('click', changeDifficulty);
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
let score = 0;
async function flagGame() {
  try {
    const result = getRandomCountryDetails(countries, 4);
    const codes = result.codes;
    const names = result.names;
    const originalIndex = result.correct;

    // ------------ Initialisation CSS ------------//

    // Ajoute un ecart au dessus
    const countryText = document.getElementById('countryName');
    countryText.style.marginTop = '12.5vh';

    // Fait disparaitre le bouton
    const playButton = document.getElementById('playButton');
    playButton.style.pointerEvents = 'none';
    playButton.style.display = 'none';

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

    document.getElementById('score').textContent = "Score : " + score;

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
        score++;
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
        score++;
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
        score++;
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
        score++;
        // Ajoute la bordure sur le drapeau correct
        const correctFlag = document.getElementById('image4');
        correctFlag.style.outline = "solid green 10px";
        setTimeout(flagGame, 1000);
      } else {
        endFlagGame(4, originalIndex, names);
      }
    };

    // ------------ Gestion clic drapeaux ------------//


    document.getElementById('countryName').innerHTML = "Trouvez le drapeau de : " + "<strong>" + names[originalIndex-1] + "</strong>";
    document.getElementById('content').style.display = 'flex';
  } catch (error) {
    console.error('Error:', error);
  }
}

// Fonction de mise à jour des éléments quand le jeu est fini
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

  // Affiche les noms des pays quand perdu
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

  // Enleve l'ecart definit pendant le jeu
  const countryText = document.getElementById('countryName');
  countryText.style.marginTop = '1vh';

  score = 0;
}

let score2 = 0;
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
  countryText.style.marginTop = '12.5vh';

  // Fait disparaitre le bouton
  const playButton = document.getElementById('playButton2');
  playButton.style.pointerEvents = 'none';
  playButton.style.display = 'none';

  // Fait disparaitre le bouton difficulté
  const borderButton = document.getElementById('borders');
  borderButton.style.display = "none";

  // Ajoute la carte
  const map = document.getElementById('svg-container');
  map.style.display = "block";

  const button = document.getElementById('borders');
  if (button.classList[1] === "easy"){
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

  document.getElementById('score2').textContent = "Score : " + score2;
  const randomInfos = getRandomInfos(countries, exclure);
  document.getElementById('countryName2').innerHTML = "Cliquez sur : " + "<strong>" + randomInfos[0] + "</strong>";
    
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
        score2++;
        mapGame();
      },1250);
    } else {
      endMapGame(id, code);
    }
  }
}

// Fonction de mise à jour des éléments quand le jeu est fini
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

  // Enleve l'ecart definit pendant le jeu
  const countryText = document.getElementById('countryName2');
  countryText.style.marginTop = '1vh';

  score2 = 0;
}