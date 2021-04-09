// async & await

// 1. async

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     resolve("gom");
//   });
// }

async function fetchUser() {
  return "gom";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "apple";
}

async function getBanana() {
  await delay(1500);
  return "banana";
}

async function pickFruit() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple}+${banana}`;
}

pickFruit().then(console.log);

// 3. 유용한 Promise APIs
// Promise.all()
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join("+")
  );
}

pickAllFruits().then(console.log);

// Promise.race()
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
