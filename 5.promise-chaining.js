function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => egg`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => fry`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가져올 수 없음'));
  //   return Promise.resolve('Chicken');
}

fetchEgg('chicken') //
  .then((data) => console.log(data));

// Promise Chaining
getChicken()
  .then((data) =>
    fetchEgg(data) //
      .then((data) =>
        fryEgg(data) //
          .then((data) => console.log(data))
      )
  )
  .catch(console.error);

getChicken() //
  .catch((error) => {
    console.log(error);
    return 'chicken';
  })
  .then((data) =>
    fetchEgg(data) //
      .then((data) =>
        fryEgg(data) //
          .then((data) => console.log(data))
      )
  );

getChicken() //
  .catch(() => 'chicken')
  .then(fetchEgg) //
  .then(fryEgg) //
  .then(console.log);
