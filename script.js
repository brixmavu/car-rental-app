// Data array of cars
var cars = [
    {
        name: "Toyota Camry",
        image: "https://via.placeholder.com/300x200",
        price: "$50/day"
    },
    {
        name: "Honda Civic",
        image: "https://via.placeholder.com/300x200",
        price: "$45/day"
    },
    {
        name: "Ford Mustang",
        image: "https://via.placeholder.com/300x200",
        price: "$60/day"
    }
];

// Get the list element
var carList = document.getElementById("car-list");

// Function to populate the list with cars
function populateList() {
    for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        var carItem = document.createElement("li");
        carItem.innerHTML =
            "<img src='" + car.image + "'>" +
            "<h2>" + car.name + "</h2>" +
            "<p>" + car.price + "</p>" +
            "<button onclick='alertCar(" + i + ")'>Select</button>";
        carList.appendChild(carItem);
    }
}

// Function to alert the chosen car
function alertCar(index) {
    alert("You have chosen " + cars[index].name);
}

// Call the populateList function when the page loads
window.onload = function () {
    populateList();
}
