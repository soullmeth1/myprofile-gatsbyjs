function tesPromise(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (val) {
        resolve('hey this is work');
      } else {
        reject('Somwthing went wrong!');
      }
    }, 2000);
  });
}

async function ftch() {
  const res = await tesPromise(true);
  //   console.log(res);
  return res;
}

async function hey() {
  const hasil = await ftch();
  console.log(hasil);
}

hey();
