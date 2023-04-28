fetch('https://api.punkapi.com/v2/beers')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  const form = document.querySelector('form');
  const input = document.querySelector('#beer-id');
  const beerDetails = document.querySelector('#beer-details');
  
  form.addEventListener('submit', (event) => {
  event.preventDefault();
    const beerId = input.value;
    fetch(`https://api.punkapi.com/v2/beers/${beerId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const beer = data[0];
        beerDetails.innerHTML = `
          <h2>${beer.name}</h2>
          <p>${beer.description}</p>
          <p>ABV : ${beer.abv}%</p>
          <p>IBU : ${beer.ibu}</p>
          <img src="${beer.image_url}" alt="${beer.name}">
        `;
      })
      .catch(error => console.error(error));
  });


  form.addEventListener('submit', (event) => {
    event.preventDefault();
      const beername = input.value;
      fetch(`https://api.punkapi.com/v2/beers/${beername}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          const beer = data[0];
          beerDetails.innerHTML = `
            <h2>${beer.name}</h2>
            <p>${beer.description}</p>
            <p>ABV : ${beer.abv}%</p>
            <p>IBU : ${beer.ibu}</p>
            <img src="${beer.image_url}" alt="${beer.name}">
          `;
        })
        .catch(error => console.error(error));
    });
    function getBeerDetails(beerName) {
        return fetch(`https://api.punkapi.com/v2/beers?beer_name=${beerName}`)
          .then(response => response.json())
          .then(data => {
            if (data.length > 0) {
              return data[0];
            } else {
              throw new Error(`Aucune bière trouvée avec le nom "${beerName}"`);
            }
          });
      }
      getBeerDetails("Buzz")
  .then(beer => {
    console.log(`Nom de la bière: ${beer.name}`);
    console.log(`Description: ${beer.description}`);
    console.log(`Alcool par volume: ${beer.abv}%`);
    console.log(`Amertume: ${beer.ibu}`);
  })
  .catch(error => console.error(error));
