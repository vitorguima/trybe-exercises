const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

const findRepo = (array, param) => {
  return array.find((element) => element === param);
}


describe('testes para validação de repositórios contidos na trybe org no GitHub', () => {
  it ('verifica se contem repo todo-list', async () => {
    const data = await getRepos('https://api.github.com/orgs/tryber/repos');
    const todoListData = findRepo(data, 'sd-01-week4-5-project-todo-list');

  expect(todoListData).toEqual('sd-01-week4-5-project-todo-list')});
  it ('verifica se contem repo meme-generator', async () => {
    const data = await getRepos('https://api.github.com/orgs/tryber/repos');
    const memeGenData = findRepo(data, 'sd-01-week4-5-project-meme-generator');

  expect(memeGenData).toEqual('sd-01-week4-5-project-meme-generator')});
})

