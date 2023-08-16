const foodOptions = [
  {
    name: "Sunday",
    timeTable: [
      { time: "Breakfast", food: "Rice&beans with Chicken stew" },
      { time: "Lunch", food: "Fufu with ogbonno" },
      { time: "Dinner", food: "Porrage with beef" },
    ],
  },
  {
    name: "Monday",
    timeTable: [
      { time: "Breakfast", food: "Bread, Tea and egg" },
      { time: "Lunch", food: "Semo with okro soup" },
      { time: "Dinner", food: "Spagetti and beef stew" },
    ],
  },
  {
    name: "Tuesday",
    timeTable: [
      { time: "Breakfast", food: "Custard & milk with moimoi" },
      { time: "Lunch", food: "Amala with gbegiri nd ewedu" },
      { time: "Dinner", food: "Noodles with egg" },
    ],
  },
  {
    name: "Wednesday",
    timeTable: [
      { time: "Breakfast", food: "Fried rice with Turkey" },
      { time: "Lunch", food: "Fried yam with fish sauce" },
      { time: "Dinner", food: "Semo with egusi soup " },
    ],
  },
  {
    name: "Thursday",
    timeTable: [
      { time: "Breakfast", food: "Oats nd milk with akara" },
      { time: "Lunch", food: "Pounded yam with Isapa soup" },
      { time: "Dinner", food: "Beans porrage with plantain" },
    ],
  },
  {
    name: "Friday",
    timeTable: [
      { time: "Breakfast", food: "Jollof rice with Salad" },
      { time: "Lunch", food: "Garri,milk nd asun" },
      { time: "Dinner", food: "Ikokore" },
    ],
  },
  {
    name: "Saturday",
    timeTable: [
      { time: "Breakfast", food: "Yam with egg stew" },
      { time: "Lunch", food: "Eba with efo riro" },
      { time: "Dinner", food: "Pizzar with fresh juice" },
    ],
  },
];

let dayOption = document.getElementById("day");
let timeOption = document.getElementById("time");
let myTable = document.getElementById("table");

for (let i = 0; i < foodOptions.length; i++) {
  
  dayOption.innerHTML +=`<option value="${foodOptions[i].name}">${foodOptions[i].name}</option>`
}

for (let i = 0; i < foodOptions[0].timeTable.length; i++) {
  
  timeOption.innerHTML +=`<option value="${foodOptions[0].timeTable[i].time}">${foodOptions[0].timeTable[i].time}</option>`
}

function myList(){
  let duplicateEntry = false
  if(dayOption.value=="" || timeOption.value==""){
    return alert('Please select any item')
  }
  else{
    let storage = {
      id:Math.floor(Math.random() * 100000),
      name:dayOption.value,
      time:timeOption.value,
    }

    foodOptions.forEach(item=>{
      if(item.name == storage.name){
        item.timeTable.forEach(item2=>{
          if(item2.time == storage.time ){
            storage.food = item2.food
          }
        })
      }
    })

    let holder = []
    if(localStorage.getItem('itemData') === null){
      holder.push(storage)
    }
    else{
      holder = JSON.parse(localStorage.getItem('itemData'))

      holder.forEach(items=>{
        if(storage.name==items.name && storage.time==items.time){
          duplicateEntry = true
        }
      })

      if(duplicateEntry==true){
        alert('Ogbeni ma gba wole')
      } else{
        holder.push(storage)
        
      }
    }
    localStorage.setItem('itemData', JSON.stringify(holder))
  }

}

// console.log(myList())
function fetchData(){
  let data = JSON.parse(localStorage.getItem('itemData'))
  myTable.innerHTML = ''
  for (let i = 0; i < data.length; i++) {
    myTable.innerHTML +=`
    <td> ${i+1}</td>
    <td> ${data[i].name}</td>
    <td> ${data[i].time}</td>
    <td> ${data[i].food}</td>  
    ` 
  }

}
fetchData()
