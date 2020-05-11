import api from "./api";

class App {
    constructor() {
        this.repositories = [];

        this.formEL = document.getElementById('repo-form')
        this.inputEl = document.querySelector('input[name=repository]')
        this.listEL = document.getElementById('repo-list')

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEL.onsubmit = event => this.addRepository(event)
    }

    setLoading(loading = true){
        if (loading){
            let loadingEl = document.createElement('span')
            loadingEl.appendChild(document.createTextNode('Carregando'))
            loadingEl.setAttribute('id', 'loading')

            this.formEL.appendChild(loadingEl)
        }else{
            document.getElementById('loading').remove()
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0) return;

        this.setLoading();
        try {
            const response = await api.get(`/repos/${repoInput}`)

            const {name, description, html_url} = response.data

            this.repositories.push({
                name,
                description,
                html_url
            })

            this.inputEl.value = '';
            this.render();
        }catch (e) {
            alert('O repositorio não existe')
        }
        this.setLoading(false)
    }

    render() {
        this.listEL.innerHTML = '';

        this.repositories.forEach(repo => {
            let titleEL = document.createElement('strong');
            titleEL.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description))

            let linkEL = document.createElement('a');
            linkEL.setAttribute('target', '_blank');
            linkEL.setAttribute('href', repo.html_url)
            linkEL.appendChild(document.createTextNode('Acessar'));

            let listElement = document.createElement('li');
            listElement.appendChild(titleEL);
            listElement.appendChild(descriptionEl);
            listElement.appendChild(linkEL);

            this.listEL.appendChild(listElement)

        })
    }
}

new App();