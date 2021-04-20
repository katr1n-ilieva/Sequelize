/* eslint-disable no-use-before-define */
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
const tableBody2 = document.querySelector('.table-body2');

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

async function windowActions() {
  diningHall();
  const mealResults = await getMeals();
  const meals = mealResults.data;

  const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selectedMeals = mealArray.map(() => {
    const random = getRandomIntInclusive(0, meals.length - 1);
    return meals[random];
  });

  selectedMeals.forEach((meal) => {
    const tableRow2 = document.createElement('tr');
    const mealId = document.createElement('td');
    const mealName = document.createElement('td');
    const calories = document.createElement('td');
    const cholesterol = document.createElement('td');
    const sodium = document.createElement('td');
    const carbs = document.createElement('td');
    const protein = document.createElement('td');

    mealId.innerText = meal.meal_id;
    mealName.innerText = meal.meal_name;
    calories.innerText = meal.calories;
    cholesterol.innerText = meal.cholesterol;
    sodium.innerText = meal.sodium;
    carbs.innerText = meal.carbs;
    protein.innerText = meal.protein;

    tableBody2.append(tableRow2);
    tableRow2.append(mealId);
    tableRow2.append(mealName);
    tableRow2.append(calories);
    tableRow2.append(cholesterol);
    tableRow2.append(sodium);
    tableRow2.append(carbs);
    tableRow2.append(protein);
  });

  console.table(selectedMeals);
  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    axisX: {
      valueFormatString: 'DDD'
    },
    axisY: {

    },
    toolTip: {
      shared: true
    },
    legend:{
      cursor: 'pointer',
      itemclick: toggleDataSeries
    },
    data: [{
      type: 'stackedBar',
      name: 'Calories',
      showInLegend: 'true',
      dataPoints: [
        { y: selectedMeals[9].calories, label: selectedMeals[9].meal_name},
        { y: selectedMeals[8].calories, label: selectedMeals[8].meal_name},
        { y: selectedMeals[7].calories, label: selectedMeals[7].meal_name},
        { y: selectedMeals[6].calories, label: selectedMeals[6].meal_name},
        { y: selectedMeals[5].calories, label: selectedMeals[5].meal_name},
        { y: selectedMeals[4].calories, label: selectedMeals[4].meal_name},
        { y: selectedMeals[3].calories, label: selectedMeals[3].meal_name},
        { y: selectedMeals[2].calories, label: selectedMeals[2].meal_name},
        { y: selectedMeals[1].calories, label: selectedMeals[1].meal_name},
        { y: selectedMeals[0].calories, label: selectedMeals[0].meal_name}
      ]
    },
    {
      type: 'stackedBar',
      name: 'Cholesterol',
      showInLegend: 'true',
      dataPoints: [
        { y: selectedMeals[9].cholesterol, label: selectedMeals[9].meal_name},
        { y: selectedMeals[8].cholesterol, label: selectedMeals[8].meal_name},
        { y: selectedMeals[7].cholesterol, label: selectedMeals[7].meal_name},
        { y: selectedMeals[6].cholesterol, label: selectedMeals[6].meal_name},
        { y: selectedMeals[5].cholesterol, label: selectedMeals[5].meal_name},
        { y: selectedMeals[4].cholesterol, label: selectedMeals[4].meal_name},
        { y: selectedMeals[3].cholesterol, label: selectedMeals[3].meal_name},
        { y: selectedMeals[2].cholesterol, label: selectedMeals[2].meal_name},
        { y: selectedMeals[1].cholesterol, label: selectedMeals[1].meal_name},
        { y: selectedMeals[0].cholesterol, label: selectedMeals[0].meal_name}
      ]
    },
    {
      type: 'stackedBar',
      name: 'Sodium',
      showInLegend: 'true',
      dataPoints: [
        { y: selectedMeals[9].sodium, label: selectedMeals[9].meal_name},
        { y: selectedMeals[8].sodium, label: selectedMeals[8].meal_name},
        { y: selectedMeals[7].sodium, label: selectedMeals[7].meal_name},
        { y: selectedMeals[6].sodium, label: selectedMeals[6].meal_name},
        { y: selectedMeals[5].sodium, label: selectedMeals[5].meal_name},
        { y: selectedMeals[4].sodium, label: selectedMeals[4].meal_name},
        { y: selectedMeals[3].sodium, label: selectedMeals[3].meal_name},
        { y: selectedMeals[2].sodium, label: selectedMeals[2].meal_name},
        { y: selectedMeals[1].sodium, label: selectedMeals[1].meal_name},
        { y: selectedMeals[0].sodium, label: selectedMeals[0].meal_name}
      ]
    },
    {
      type: 'stackedBar',
      name: 'Carbs',
      showInLegend: 'true',
      dataPoints: [
        { y: selectedMeals[9].carbs, label: selectedMeals[9].meal_name},
        { y: selectedMeals[8].carbs, label: selectedMeals[8].meal_name},
        { y: selectedMeals[7].carbs, label: selectedMeals[7].meal_name},
        { y: selectedMeals[6].carbs, label: selectedMeals[6].meal_name},
        { y: selectedMeals[5].carbs, label: selectedMeals[5].meal_name},
        { y: selectedMeals[4].carbs, label: selectedMeals[4].meal_name},
        { y: selectedMeals[3].carbs, label: selectedMeals[3].meal_name},
        { y: selectedMeals[2].carbs, label: selectedMeals[2].meal_name},
        { y: selectedMeals[1].carbs, label: selectedMeals[1].meal_name},
        { y: selectedMeals[0].carbs, label: selectedMeals[0].meal_name}
      ]
    },
    {
      type: 'stackedBar',
      name: 'Protein',
      showInLegend: 'true',
      dataPoints: [
        { y: selectedMeals[9].protein, label: selectedMeals[9].meal_name},
        { y: selectedMeals[8].protein, label: selectedMeals[8].meal_name},
        { y: selectedMeals[7].protein, label: selectedMeals[7].meal_name},
        { y: selectedMeals[6].protein, label: selectedMeals[6].meal_name},
        { y: selectedMeals[5].protein, label: selectedMeals[5].meal_name},
        { y: selectedMeals[4].protein, label: selectedMeals[4].meal_name},
        { y: selectedMeals[3].protein, label: selectedMeals[3].meal_name},
        { y: selectedMeals[2].protein, label: selectedMeals[2].meal_name},
        { y: selectedMeals[1].protein, label: selectedMeals[1].meal_name},
        { y: selectedMeals[0].protein, label: selectedMeals[0].meal_name}
      ]
    }]
  });
  chart.render();

  function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    }
    else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
}

window.onload = windowActions();