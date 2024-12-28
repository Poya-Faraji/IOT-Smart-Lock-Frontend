const unlockBtnElem = document.getElementById("unlock-btn");
const cancelBtnElem = document.getElementById("cancel-btn");
const statusTextElem = document.getElementById("lock-status");

unlockBtnElem.addEventListener("click", () => {
  unlock();
});

const unlock = async () => {
  await fetch("http://localhost:8888/api/unlock/", { method: "POST" })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
};

const reset = async () => {
  await fetch("http://localhost:8888/api/reset/", { method: "POST" })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
};


const lockSimulation = async () => {
  await fetch("http://localhost:8888/api/unlock/", { method: "GET" })
    .then((response) => response.text())
    .then((data) => {
      statusTextElem.innerText = `Unlocked : ${data}`
    })
    .catch((error) => console.error("Error:", error));
};

cancelBtnElem.addEventListener("click", () => {
  reset();
});


setInterval(() => {
  lockSimulation()
}, 2000);