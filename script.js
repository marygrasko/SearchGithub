class createPage {

    // в конструкторе создаётся структура страницы
    constructor() {
        this.body = document.body;
        this.body.style.textAlign = 'center';
        this.body.style.backgroundColor = '#24292f';
        this.body.style.fontFamily = 'Roboto';

        this.wrapper = document.querySelector('.wrapper');
        this.wrapper.style.display = 'flex'
        this.wrapper.style.justifyContent = 'center'
        this.wrapper.style.flexDirection = 'column'
        this.wrapper.style.alignItems = 'center'
        this.wrapper.style.marginTop = 62 + 'px';
        this.wrapper.style.padding = 60 + 'px'
        this.wrapper.style.marginLeft = 'auto';
        this.wrapper.style.marginRight = 'auto';
        this.wrapper.style.width = 661 + 'px';
        this.wrapper.style.height = 'auto';
        this.wrapper.style.backgroundColor = '#24292f';


        this.input = this.createElement('input', 'input-field');
        this.input.style.width = 500 + 'px';
        this.input.style.padding = 13 + 'px'
        this.input.style.height = 62 + 'px';
        this.input.style.fontSize = 30 + 'px';
        this.input.style.borderRadius = '10' + 'px';
        this.input.style.fontColor = '#24292f';
        this.wrapper.append(this.input);

        this.searchList = this.createElement('ul', 'search-list');
        this.searchList.style.width = 500 + 'px';
        this.searchList.style.backgroundColor = 'white';
        this.searchList.style.fontFamily = 'Roboto';

        this.input.insertAdjacentElement('afterend', this.searchList);

        this.reposContainer = this.createElement('div', 'repos-list');
        this.reposContainer.style.marginTop = 45 + 'px';

        this.wrapper.append(this.reposContainer);
    }

    // метод для создания html-элементов

    createElement(element, className) {
        const newElement = document.createElement(element);

        if (className) {
            newElement.classList.add(className);
        }
        return newElement
    }

    // метод для добавления и сохранения выбранного репозитория в списке

    createRepository(repository) {
        const newReposItem = this.createElement('div', `${repository.id}`);
        newReposItem.style.backgroundColor = 'white';
        newReposItem.style.display = 'flex';
        newReposItem.style.justifyContent = 'space-between';
        newReposItem.style.justifyContent = 'Roboto';
        newReposItem.style.width = 500 + 'px';
        newReposItem.style.border = '1px solid black';
        newReposItem.style.borderRadius = '10px';
        newReposItem.style.marginBottom = '20px';
        const reposContent = `
             <div style="margin: 5px; font-size: 24px; text-align: left; font-color: #24292f; ">
                <div>Имя: ${repository.name}</div>
                <div>Профиль: ${repository.owner.login}</div>      
                <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16" color="#B8860B">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg> ${repository.stargazers_count}</div>  
             </div>    
             <button class="${repository.id}"style = "width: 60px; height: 60px;  border: none; background-color: transparent; color: red; margin: auto 28px; cursor: pointer">                               
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
             <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
           </svg>
             </button>
           `;
        newReposItem.insertAdjacentHTML('afterbegin', reposContent);
        this.reposContainer.append(newReposItem);
        this.deleteRepoHandler(repository.id)
    }

    // метод для отображения результатов поиска в "выпадающем" списке

    viewRepositories(repository, reposID) {
        const reposSearchItem = this.createElement('li', `${reposID}`);
        reposSearchItem.style.listStyleType = 'none';
        reposSearchItem.style.cursor = 'pointer';
        reposSearchItem.style.fontSize = 25 + 'px';
        reposSearchItem.style.textAlign = 'left';
        reposSearchItem.style.border = '0.5px solid black';
        reposSearchItem.style.font = 'Roboto';
        const searchContent = `
                <span class="${repository.id}" style="display: block; margin-left: 12px; margin-bottom: 8px; pointer-events: none; font-color:#24292f ; " >
                   ${repository.name}
                </span>`;
        reposSearchItem.insertAdjacentHTML('afterbegin', searchContent);
        this.searchList.append(reposSearchItem);
    }

    // проверка на наличие репозитория в списке добавленных
    // если выбранный репозиторий уже добавлен - он не добавится в список снова

    checkSameRepositories(repository) {
        if (this.reposContainer.childNodes.length) {
            for (let i = 0; i < this.reposContainer.childNodes.length; i++) {
                if (this.reposContainer.childNodes[i].classList.value == repository.id) {
                    return
                }
            }
            this.createRepository(repository)
        } else {
            this.createRepository(repository)
        }
    }

    // метод для выбора репозитория из списка найденных 

    selectRepositoryHandler(item) {

        highlightItemsHandler(this.searchList)

        this.searchList.addEventListener('click', (event) => {
            if (event.target.classList.value == item.id) {
                this.checkSameRepositories(item)
            }
            this.input.value = ''
            while (this.searchList.firstChild) {
                this.searchList.removeChild(this.searchList.lastChild);
            }
        });
    }

    // метод для удаления репозитория из списка добавленных по нажатии на кнопку "X"

    deleteRepoHandler(item) {
        const reposDeleteBtns = document.querySelectorAll('button');
        for (let i = 0; i < reposDeleteBtns.length; i++) {
            reposDeleteBtns[i].addEventListener('click', (event) => {
                if (event.target.closest('button').classList.value == item) {
                    reposDeleteBtns[i].parentElement.remove();
                }
            })
        }
    }
}

// Класс для поиска репозиториев


class GitHubSearch {

    constructor(page) {
        this.page = page;
        this.page.input.addEventListener('input', debounce(this.searchRepositories.bind(this), 500));
    }

    // Асинхронный метод для отправления запросов и получения данных из api github

    async searchRepositories() {
        const SEARCH_REPOS_COUNT = 5;
        let inputValue = this.page.input.value;
        if (inputValue) {
            try {
                this.clearRepositoryList();
                return await fetch(`https://api.github.com/search/repositories?q=${inputValue}&per_page=${SEARCH_REPOS_COUNT}`)
                    .then((data) => {
                        data.json()
                            .then(data => {
                                data.items.forEach(item => {
                                    this.page.viewRepositories(item, item.id)
                                    this.page.selectRepositoryHandler(item)
                                });
                            })
                    })
            } catch (err) {
                console.error(err);
            }
        } else {
            this.clearRepositoryList();
        }
    }

    // Метод для очищения списка найденных репозиториев

    clearRepositoryList() {
        while (this.page.searchList.firstChild) {
            this.page.searchList.removeChild(this.page.searchList.lastChild);
        }
    }
}

// Функция для стилизации элементов выпадающего списка наведении и фокусе

const highlightItemsHandler = (item, color = '#218bff') => {

    item.addEventListener('focus', (event) => {
        event.target.style.backgroundColor = color
    })
    item.addEventListener('blur', (event) => {
        event.target.style.backgroundColor = ''
    })

    item.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = color
    })
    item.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = ''
    })
}

// Функция debounce для отложенных запросов 

const debounce = (fn, debounceTime) => {
    let timer = null

    return function (...args) {
        clearTimeout(timer)

        timer = setTimeout(() => {
            fn.apply(this, args)
        }, debounceTime)

    }
}
new GitHubSearch(new createPage());