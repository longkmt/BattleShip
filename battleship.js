var view = {
    displayMessage: function(message) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = message;
    },

    displayHit: function(location){
        var hitCell = document.getElementById(location);
        hitCell.setAttribute("class","hit");
    },

    displayMiss: function(location){
        var missCell = document.getElementById(location);
        missCell.setAttribute("class","miss");
    }
};

view.displayHit("C3");
view.displayMiss("E6");
view.displayMessage("Battleship v0.1")