const coinTossForHeads = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randNum = Math.random();
      if (randNum < 0.5) {
        resolve("Success! Heads was tossed.");
      } else {
        reject("Error! Tails was tossed.");
      }
    }, 2000);
  });
};

async function tossCoin() {
  try {
    const result = await coinTossForHeads();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

tossCoin();

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data loaded");
            reject("Whoops! Some error happened");

        }, 1000) ;
    });
};

async function load() {
    try {
        const result = await fetchData();
        console.log(result);
        
    } catch (e) {
        console.error(e);
    }
}

load();
