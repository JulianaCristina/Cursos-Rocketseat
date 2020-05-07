//
// var minhaPromise = function () {
//     return new Promise(function (resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open("GET", 'http:api.github.com/users/JulianaCristina')
//         xhr.send(null)
//
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4){
//                 if (xhr.status === 200){
//                     resolve(JSON.parse(xhr.responseText))
//                 }else{
//                     reject("Erro na requisição")
//                 }
//             }
//         }
//     })
// }
// minhaPromise()
//     .then(function (response) {
//         console.log(response)
//     })
//     .catch(function (error) {
//         console.warn(error)
//     })


axios.get('http:api.github.com/users/JulianaCristina')
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.warn(error)
    })

function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            idade >= 18? resolve() : reject ();
        }, 2000);
    });
}
checaIdade(20)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });



// ----------------- Exercise 2

var inputName = document.getElementById("user");
var dataList = document.querySelector("ul");
const getUserRepo = name => {
    var user = inputName.value;
    if (!user) {
        renderError();
        alert("Preencha o campo");
    }
    renderLoading();
    axios
        .get(`https://api.github.com/users/${user}/repos`)
        .then(response => {
            fillList(response.data);
        })
        .catch(error => {
            alert("Não foi possível efetuar a busca!");
            renderError(error);
        });
};

function renderLoading(loading) {
    dataList.innerHTML = "";
    var textElement = document.createTextNode("Carregando...");
    var loadingElement = document.createElement("li");
    loadingElement.appendChild(textElement);
    dataList.appendChild(loadingElement);
}

function renderError(loading) {
    dataList.innerHTML = "";
    var user = inputName.value;
    var msgUserEmpty = !user ? "Preencha o usuário" : "Erro ao efetuar busca";

    var textElement = document.createTextNode(msgUserEmpty);
    var errorElement = document.createElement("li");
    errorElement.style.color = "#F00";
    errorElement.appendChild(textElement);
    dataList.appendChild(errorElement);
}

const fillList = repositorios => {
    console.log("TCL: repositorios", repositorios);
    dataList.innerHTML = "";

    for (repo of repositorios) {
        const reponame = document.createTextNode(repo.name);
        const repoItem = document.createElement("li");

        repoItem.appendChild(reponame);
        dataList.appendChild(repoItem);
    }
};