async function money() {
  let total = 500;
  total = await new Promise(function (res) {
    setTimeout(function () {
      res(total - 10);
    }, 1000);
  });
  console.log("So tien sau khi mua rau la:" + total);
  total = await new Promise(function (res) {
    setTimeout(function () {
      res(total - 100);
    }, 2000);
  });
  console.log("So tien sau khi mua ca la:" + total);
  total = await new Promise(function (res) {
    setTimeout(function () {
      res(total - 120);
    }, 3000);
  });
  console.log("So tien sau khi mua ga la:" + total);
  total = await new Promise(function (res) {
    setTimeout(function () {
      res(total - 70);
    }, 2000);
  });
  console.log("So tien sau khi mua lon la:" + total);
}
money();
