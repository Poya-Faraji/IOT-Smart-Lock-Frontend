const unlockBtnElem = document.getElementById("unlock-btn");
const cancelBtnElem = document.getElementById("cancel-btn");
const statusTextElem = document.getElementById("lock-status");


const API_URL = 'https://smart-iot-lock.onrender.com'

unlockBtnElem.addEventListener("click", () => {
  unlock();
});

const unlock = async () => {
  await fetch(`${API_URL}/api/unlock/`, { method: "POST" })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
};

const reset = async () => {
  await fetch(`${API_URL}/api/reset/`, { method: "POST" })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
};


const lockSimulation = async () => {
  await fetch(`${API_URL}/api/unlock/`, { method: "GET" })
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
}, 3000);