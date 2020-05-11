// import classeUsuario from "./modulo2funcoes";
// import classeUsuario , {idade as IdadeUsuario} from "./modulo2funcoes"
//
// console.log(classeUsuario.info())
// console.log(IdadeUsuario)

//Promisse
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('ok')}, 2000)
})

minhaPromise().then(response => {
    console.log(response)
})
    .catch(err => {

    })

//Async await
// async function executaPromise() {
//     const response = await minhaPromise();
//
//     console.log(response)
// }
//
// executaPromise()

//convertendo pra arrow fucntion

const executaPromise = async () => {
    console.log(await minhaPromise())
}

executaPromise()