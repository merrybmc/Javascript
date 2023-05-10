function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('can not find 🐓'));
}

async function makeFry() {
  const Chicken = await getChicken().catch(() => {
    return 'Chicken';
  });
  const Egg = await fetchEgg(Chicken);
  const fry = await fryEgg(Egg);
  return fry;
}

makeFry().then((data) => {
  console.log(data);
});
