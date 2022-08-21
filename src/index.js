function showSlack() {
  let slackSection = document.querySelector(".slackSection");
  let bitSection = document.querySelector(".bitSection");
  slackSection.style.display = "block";
  bitSection.style.display = "none";
}

function showBit() {
  let slackSection = document.querySelector(".slackSection");
  let bitSection = document.querySelector(".bitSection");
  slackSection.style.display = "none";
  bitSection.style.display = "block";
}

async function getBitDate() {
  let bitPrice = document.querySelector(".bitPrice");
  let bitChangeRate = document.querySelector(".bitChangeRate");
  let circle = document.querySelector(".circle");
  fetch(
    "https://crix-api-endpoint.upbit.com/v1/crix/candles/days/?code=CRIX.UPBIT.KRW-ETC"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let { tradePrice, changeRate, change } = data[0];

      //compare
      if (
        bitChangeRate.innerText &&
        Math.abs(bitChangeRate.innerText.slice(0, 4) - changeRate * 100) > 1
      ) {
        alert("LET GO!");
      }

      bitPrice.innerText = parseInt(tradePrice).toLocaleString("en");
      bitChangeRate.innerText = Number(changeRate * 100).toFixed(2) + "%";

      if (change === "RISE") {
        circle.style.backgroundColor = "red";
      } else {
        circle.style.backgroundColor = "blue";
      }
    });
}
getBitDate();
setInterval(getBitDate, 1000 * 60 * 20);
// function settingClock() {
//   //hour
//   let targetBodyH = document.querySelector(".hour");
//   let selecthourH = document.createElement("select");
//   selecthourH.className = "hourSelected";
//   console.log(selecthourH);
//   for (let i = 0; i < 24; i++) {
//     let optionH = document.createElement("option");
//     optionH.value = i;
//     optionH.text = i;
//     selecthourH.add(optionH, null);
//   }
//   targetBodyH.appendChild(selecthourH);

//   //minute
//   let targetBodyM = document.querySelector(".minute");
//   let selecthourM = document.createElement("select");
//   selecthourM.className = "minuteSelected";
//   for (let i = 0; i < 60; i++) {
//     let optionM = document.createElement("option");
//     optionM.value = i;
//     optionM.text = i;
//     selecthourM.add(optionM, null);
//   }
//   targetBodyM.appendChild(selecthourM);
// }

// settingClock();
