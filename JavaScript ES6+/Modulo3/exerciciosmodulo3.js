import axios from 'axios';
//
// class Api {
//     static async getUserInfo(username){
//         try{
//             const response = await axios.get(`https://api.github.com/users/${username}`);
//             console.log(response)
//         }catch (e) {
//             console.warn("Erro na API")
//         }
//
//     }
// }
//
// Api.getUserInfo('JulianaCristina')


// Funão delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
//
// function umPorSegundo() {
//     delay().then(() => {
//         console.log('1s');
//         delay().then(() => {
//             console.log('2s');
//             delay().then(() => {
//                 console.log('3s');
//             });
//         })
//     });
// }
// umPorSegundo();

// ----

// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
//
// async function umPorSegundo() {
//     await delay();
//         console.log('1s');
//         await delay();
//         console.log('2s');
//             await delay();
//                 console.log('3s');
// }
// umPorSegundo();

//-------------

// import axios from 'axios';
// async function getUserFromGithub(user) {
//     try {
//         const git = await axios.get(`https://api.github.com/users/${user}`);
//         console.log(git);
//     }catch {
//         console.log('Usuário não existe');
//     }
// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

//----------------

// class Github {
//     static async getRepositories(repo) {
//         try {
//             const x = await axios.get(`https://api.github.com/repos/${repo}`)
//             console.log(x);
//         }catch (e) {
//             console.log('Repositório não existe');
//         }
//     }
// }
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');

//-------

// const buscaUsuario = async user => {
//     try{
//         const y = await axios.get(`https://api.github.com/users/${user}`)
//         console.log(y);
//     }catch (e) {
//         console.log('Usuário não existe');
//     }
// }
//
// buscaUsuario('JulianaCristina');