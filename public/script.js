/* eslint-disable no-param-reassign */
/* eslint-disable no-sparse-arrays */
/* eslint-disable no-console */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function getMeals() {
  console.log('data request');
  const mealsRequest = await fetch('/api/wholeMeal');
  const mealsData = await mealsRequest.json();
  return mealsData;
}

const tableBody = document.querySelector('.table-body');

async function diningHall() {
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

async function mealsChart() {

}

async function windowActions() {
  console.log('Window loaded');
  const mealResults = await getMeals();
  const meals = mealResults.data;

  const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selectedMeals = mealArray.map(() => {
    const random = getRandomIntInclusive(0, meals.length - 1);
    return meals[random];
  });

  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    axisX: {
      valueFormatString: 'DDD'
    },
    axisY: {
      prefix: '$'
    },
    toolTip: {
      shared: true
    },
    legend:{
      cursor: 'pointer',
      itemclick: toggleDataSeries
    },
    data: [{
      type: "stackedBar",
      name: "Meals",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 56 },
        { x: new Date(2017, 0, 31), y: 45 },
        { x: new Date(2017, 1, 1), y: 71 },
        { x: new Date(2017, 1, 2), y: 41 },
        { x: new Date(2017, 1, 3), y: 60 },
        { x: new Date(2017, 1, 4), y: 75 },
        { x: new Date(2017, 1, 5), y: 98 }
      ]
    },
    {
      type: "stackedBar",
      name: "Snacks",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 86 },
        { x: new Date(2017, 0, 31), y: 95 },
        { x: new Date(2017, 1, 1), y: 71 },
        { x: new Date(2017, 1, 2), y: 58 },
        { x: new Date(2017, 1, 3), y: 60 },
        { x: new Date(2017, 1, 4), y: 65 },
        { x: new Date(2017, 1, 5), y: 89 }
      ]
    },
    {
      type: "stackedBar",
      name: "Drinks",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 48 },
        { x: new Date(2017, 0, 31), y: 45 },
        { x: new Date(2017, 1, 1), y: 41 },
        { x: new Date(2017, 1, 2), y: 55 },
        { x: new Date(2017, 1, 3), y: 80 },
        { x: new Date(2017, 1, 4), y: 85 },
        { x: new Date(2017, 1, 5), y: 83 }
      ]
    },
    {
      type: "stackedBar",
      name: "Dessert",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 61 },
        { x: new Date(2017, 0, 31), y: 55 },
        { x: new Date(2017, 1, 1), y: 61 },
        { x: new Date(2017, 1, 2), y: 75 },
        { x: new Date(2017, 1, 3), y: 80 },
        { x: new Date(2017, 1, 4), y: 85 },
        { x: new Date(2017, 1, 5), y: 105 }
      ]
    },
    {
      type: "stackedBar",
      name: "Takeaway",
      showInLegend: "true",
      xValueFormatString: "DD, MMM",
      yValueFormatString: "$#,##0",
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 52 },
        { x: new Date(2017, 0, 31), y: 55 },
        { x: new Date(2017, 1, 1), y: 20 },
        { x: new Date(2017, 1, 2), y: 35 },
        { x: new Date(2017, 1, 3), y: 30 },
        { x: new Date(2017, 1, 4), y: 45 },
        { x: new Date(2017, 1, 5), y: 25 }
      ]
    }]
  });
  chart.render();

  function toggleDataSeries(e) {
    if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    }
    else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }

  console.table(selectedMeals);
  mealsChart();
  diningHall();
}

window.onload = windowActions();