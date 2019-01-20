var car = {
    make: "Nissan",
    model: "Altima",
    year: 2014,
    color: "Black",
    mileage: 60000,

    display: function(){
        alert("My car is a " + make + " " + model + " " + year);
    }
}

function displayCar(car){
    car.display();
}



