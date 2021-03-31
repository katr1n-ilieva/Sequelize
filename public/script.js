/* eslint-disable no-console */

async function windowActions() {
  console.log('window loaded');
  const request = await fetch('/api/dining/');
  const data = await request.json();
  console.log(data);

  const table = document.querySelector('.table');
  const headerRow = document.querySelector('.table-row');

  data.forEach((element) => {
    const cellHead = document.createElement('th');
    cellHead.classList.add('table-cell-heading');
    cellHead.innerText = element;
    headerRow.append(cellHead);

    const tableRow = document.createElement('tr');
    const diningId = document.createElement('td');
    const diningName = document.createElement('td');
    const diningAddress = document.createElement('td');

    diningId.innerText = element.hall_id;
    diningName.innerText = element.hall_name;
    diningAddress.innerText = element.hall_address;

    table.append(tableRow);
    tableRow.append(diningId);
    tableRow.append(diningName);
    tableRow.append(diningAddress);
  });
}

window.onload = windowActions();