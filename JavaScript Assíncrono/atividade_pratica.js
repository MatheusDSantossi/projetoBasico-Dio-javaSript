// const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
// const catBtn = document.getElementById('change-cat');
// const catImg = document.getElementById('cat');

let catBtn = document.getElementById('change-cat');
let catImg = document.getElementById('cat');

// const getCats = async () => {
//    try {
//         const data = await fetch(BASE_URL);
//         const json = await data.json();

//         return json.webpurl;
//     } catch(e) {
//         console.log(e.message);
//     }
//     // const data = await fetch(BASE_URL)
//     //     .then((result) => result.json())
//     //     .catch((e) => console.log(e))
    
//     // return data.webpurl;
// };

// const loadImg = async () => {
//     const catImg = document.getElementById('cat');
//     catImg.src = await getCats();
//     // catImg.src = "https://thatcopy.github.io/catAPI/imgs/jpg/2b74f7c.jpg";
// };

// catBtn.addEventListener('click', loadImg);

// loadImg();


catBtn.addEventListener('click', function() {
    fetch(BASE_URL)
        .then(res => res.json())
        .then(result => {
            console.log(result[0])
            catImg.src = result[0].url
            // console.log(result.url)
            // NÃO SEI SE FIZ ERRADO, MAS, O COD DA AULA NÃO FUNCIONOU, FIZ ALGUNS TESTES E PESQUISAS E CONSEGUI FAZER ASSIM.
        })
        .catch(err => console.log(err))
})
