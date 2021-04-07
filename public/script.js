/* eslint-disable no-console */

const tableBody = document.querySelector('.table-body');

async function diningHalL() {
  console.log('window loaded');
  const request = await fetch('/api/dining/');
  const diningData = await request.json();
  console.log(diningData);

  diningData.data.forEach((element) => {
    const tableRow = document.createElement('tr');
    const diningId = document.createElement('td');
    const diningName = document.createElement('td');
    const diningAddress = document.createElement('td');

    diningId.innerText = element.hall_id;
    diningName.innerText = element.hall_name;
    diningAddress.innerText = element.hall_address;

    tableBody.append(tableRow);
    tableRow.append(diningId);
    tableRow.append(diningName);
    tableRow.append(diningAddress);
  });
}

async function windowActions() {
  diningHalL();
}

window.onload = windowActions();