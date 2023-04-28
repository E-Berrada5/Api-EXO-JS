// https://jsonplaceholder.typicode.com/todos

// appel fetch classique avec chaînage .then

// récup de la ressource
// fetch("https://jsonplaceholder.typicode.com/todos", {
//   method: "GET",
//   headers: {
//     Accept: "application/json",
//   },
// })
//   .then(function (response) {
//     // console.log(response);
//     return response.json();
//   })
//   .then(function (todos) {
//     // console.table(data);

//     // data contient un tableau d'objets
//     // on veut récupérer tous les todos dont la prop completed est à false

//     const notCompletedTodos = todos.filter(function (todo) {
//       return todo.completed === false;
//     });

//     console.table(notCompletedTodos);
//   });

// utilisation de async / await
// on déclare une fonction getTodos qui va être asynchrone
async function getTodos() {
  // à l'intérieur on fait notre fetch, puis on attend la réponse
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   console.log(response);

  //   une fois la réponse reçue, on peut la traiter et récupérer les données
  const todos = await response.json();

  console.table(todos);
}

// ici on appelle la fonction
getTodos();

// TODOS : ajouter la gestion d'erreurs éventuelles




J'ai sélectionné pour vous 3 APIs qui vont vous permettre de vous familiariser avec les requêtes AJAX et l'utilisation de Fetch.

**NewsApi** vous permettra de rechercher dans une liste d'article les sulets qui vous intéressent en les filtrant par catégorie, pays, date, etc...
**Newscatcher** vous permettra de rechercher dans une liste d'article les sulets qui vous intéressent en les filtrant par catégorie, pays, date, etc...
C'est une bonne ressource pour vous faire la main en allant du plus simple vers des requêtes plus complexes

Il sera nécessaire pour utiliser cette API de générer une clé d'API gratuite

⚠️ Attention, vous ne pourrez pas déployer votre application en live car le plan gratuit "développeur" pour l'utilisation de l'API ne le permet pas. Pas de problème en **localhost** par contre ⚠️

**_NewsAPi_** :
**_NewsCatcher_** :

- API Key : Yes

- Doc : https://newsapi.org/docs
- Doc : https://docs.newscatcherapi.com/

- rechercher tout :

  - endpoint : "https://newsapi.org/v2/everything?q"
  - endpoint : "https://api.newscatcherapi.com/v2/search?q=Apple{&from=2021/12/15&countries=CA&page_size=1}"

- remarques :
  - vous pouvez utiliser pas mal de paramètres pour filtrer votre recherche
  - ce qui est entre { } dans l'url est optionnel, ce sont vos paramètres de recherche

- remarques : vous pouvez utiliser pas mal de paramètres pour filtrer votre recherche
⚠️ attention à la méthode d'authentification qui requiert un **header** spécifique ⚠️

**Github** met à votre disposition une API riche et très (trop ?) documentée.
