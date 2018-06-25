/*
=======================================================
Array of Playable Characters
=======================================================
*/

var RickAndMortyRPG = {
    gameStage: "initial",
    characterSelected: "",
    characterObject: "",
    opponentSelected: "",
    opponentObject: "",
    opponentsRemain: 4
};
  
var RickSanchez = {
    health: 200,
    attack: 8,
    counterattack: 30,
    imageUrl: "assets/images/rick.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#RickSanchezHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 2;
    }
};

var MortySmith = {
    health: 160,
    attack: 10,
    counterattack: 20,
    imageUrl: "assets/images/mortySmith.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#MortySmithHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 2;
    }
};

var SummerSmith = {
    health: 130,
    attack: 14,
    counterattack: 15,
    imageUrl: "assets/images/summerSmith.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#SummerSmithHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 2;
    }
};

var BethSmith = {
    health: 145,
    attack: 12,
    counterattack: 30,
    imageUrl: "assets/images/bethSmith.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#BethSmithHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 2;
    }
};

var JerrySmith= {
    health: 100,
    attack: 18,
    counterattack: 15,
    imageUrl: "assets/images/jerrySmith.png",
    healthUpdate: function(attackDamage) {
      this.health -= attackDamage;
      $("#JerrySmithHP").text(this.health);
    },
    attackUpdate: function() {
      this.attack *= 2;
    }
};
  
  var MrPoopyButthole = {
    health: 115,
    attack: 16,
    counterattack: 30,
    imageUrl: "assets/images/pencilRick.png",
    healthUpdate: function(attackDamage) {
      this.health -= attackDamage;
      $("#MrPoopyButtholeHP").text(this.health);
    },
    attackUpdate: function() {
      this.attack *= 2;
    }
};

var RickSanchezDiv = $("#RickSanchez");
var MortySmithDiv = $("#MortySmith");
var SummerSmithDiv = $("#SummerSmith");
var BethSmithDiv = $("#BethSmith");
var JerrySmithDiv = $("#JerrySmith");
var MrPoopyButtholeDiv = $("#MrPoopyButthole");

/*
=======================================================
Character Selection on.cllick task assignments 
=======================================================
*/

$(".character").on("click", function() {
    if (RickAndMortyRPG.gameStage == "initial") {

        RickAndMortyRPG.characterSelected = $(this).attr("id");
        $("id" + RickAndMortyRPG.characterSelected).remove();
        $("#prompts").text("Choose your Opponent!");

        console.log(RickAndMortyRPG.characterSelected);

        if (RickAndMortyRPG.characterSelected == "RickSanchez") {
            RickAndMortyRPG.characterObject = RickSanchez;
            $("#character_display").append(RickSanchezDiv);
            $("#RickSanchez").html('<p>Rick</p> <img src="assets/images/rick.png" height="275"> <p id="RickSanchezHP">200 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "MortySmith") {
            RickAndMortyRPG.characterObject = MortySmith;
            $("#character_display").append(MortySmithDiv);
            $("#MortySmith").html('<p>Morty</p> <img src="assets/images/mortySmith.png" height="215"> <p id="MortySmithHP">160 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "SummerSmith") {
            RickAndMortyRPG.characterObject = SummerSmith;
            $("#character_display").append(SummerSmithDiv);
            $("#SummerSmith").html('<p>Summer</p> <img src="assets/images/summerSmith.png" height="250"> <p id="SummerSmithHP">130 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "BethSmith") {
            RickAndMortyRPG.characterObject = BethSmith;
            $("#character_display").append(BethSmithDiv);
            $("#BethSmith").html('<p>Beth</p> <img src="assets/images/bethSmith.png" height="260"> <p id="BethSmithHP">145 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "JerrySmith") {
            RickAndMortyRPG.characterObject = JerrySmith;
            $("#character_display").append(JerrySmithDiv);
            $("#JerrySmith").html('<p>Jerry</p> <img src="assets/images/jerrySmith.png" height="275"> <p id="JerrySmithHP">100 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "MrPoopyButthole") {
            RickAndMortyRPG.characterObject = MrPoopyButthole;
            $("#character_display").append(MrPoopyButtholeDiv);
            $("#MrPoopyButthole").html('<p>Mr Poopy</p> <img src="assets/images/pencilRick.png" height="150"> <p id="MrPoopyButtholeHP">115 HP</p>');
        }

/*
=======================================================
Opponent Selection on.cllick task assignments 
=======================================================
*/
        RickAndMortyRPG.gameStage = "opponents"

    } else if (RickAndMortyRPG.gameStage == "opponents") {
        RickAndMortyRPG.opponentSelected = $(this).attr("id");
        $("#" + RickAndMortyRPG.opponentSelected).remove();
        $("#prompts").text("The world is full of idiots who don't understand what's important, and they'll tear us apart");

        console.log(RickAndMortyRPG.opponentSelected);

        if (RickAndMortyRPG.opponentSelected == "RickSanchez") {
            RickAndMortyRPG.opponentObject = RickSanchez;
            $("#enemy_display").append(RickSanchezDiv);
            $("#RickSanchez").html('<p>Rick</p> <img src="assets/images/rick.png" height="275"> <p id="RickSanchezHP">200 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "MortySmith") {
            RickAndMortyRPG.opponentObject = MortySmith;
            $("#enemy_display").append(MortySmithDiv);
            $("#MortySmith").html('<p>Morty</p> <img src="assets/images/mortySmith.png" height="215"> <p id="MortySmithHP">160 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "SummerSmith") {
            RickAndMortyRPG.opponentObject = SummerSmith;
            $("#enemy_display").append(SummerSmithDiv);
            $("#SummerSmith").html('<p>Summer</p> <img src="assets/images/summerSmith.png" height="250"> <p id="SummerSmithHP">130 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "BethSmith") {
            RickAndMortyRPG.opponentObject = BethSmith;
            $("#enemy_display").append(BethSmithDiv);
            $("#BethSmith").html('<p>Beth</p> <img src="assets/images/bethSmith.png" height="260"> <p id="BethSmithHP">145 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "JerrySmith") {
            RickAndMortyRPG.opponentObject = JerrySmith;
            $("#enemy_display").append(JerrySmithDiv);
            $("#JerrySmith").html('<p>Jerry</p> <img src="assets/images/jerrySmith.png" height="275"> <p id="JerrySmithHP">100 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "MrPoopyButthole") {
            RickAndMortyRPG.opponentObject = MrPoopyButthole;
            $("#enemy_display").append(MrPoopyButtholeDiv);
            $("#MrPoopyButthole").html('<p>Mr Poopy</p> <img src="assets/images/pencilRick.png" height="150"> <p id="MrPoopyButtholeHP">115 HP</p>');
        }

/*
=======================================================
Fight Stage
=======================================================
*/
        RickAndMortyRPG.gameStage = "fight";
    }

    console.log(RickAndMortyRPG.gameStage);
}); //End of function...for Character and Opponent Selection//

/*
=======================================================
Message Log
=======================================================
*/

// var renderMessage = function(message) {
//     var gameMesageSet = $("#messageLog");
//     var newMessage = $("<div>").text(message);
//     gameMesageSet.append(newMessage);

//     if (message == 'clearMessage') {
//       gameMesageSet.text('');
//     }
// };


/*
=======================================================
Attack Phase function enabling action between objects
=======================================================
*/

$(".attackButton").on("click", function() {
    if (RickAndMortyRPG.gameStage == "fight") {
        RickAndMortyRPG.opponentObject.healthUpdate(RickAndMortyRPG.characterObject.attack);
        RickAndMortyRPG.characterObject.attackUpdate();
        // var attackMessage = "You attacked" + opponentSelected.name + "for" + (characterSelected.attack * turnCounter) + "damage.";
        // renderMessage("clearMessage");
        // opponentSelected.health = opponentSelected.health - (characterSelected.attack * turnCounter);

        if ((RickAndMortyRPG.opponentObject.health <= 0) && (RickAndMortyRPG.opponentsRemain == 0)) {
            // var counterAttackMessage = opponentSelected.name + "attacked you back for" + opponentSelected.enemyAttackBack + "damage.";
            // renderMessage(attackMessage);
            // renderMessage(counterAttackMessage);
            $("#messageLog").text("*URP* H-Hold it! *URP* I did it! *URP* I won!");
            $("#" + RickAndMortyRPG.opponentSelected).remove();
            RickAndMortyRPG.gameStage = "gameOver";
        }else if ((RickAndMortyRPG.opponentObject.health <= 0) && (RickAndMortyRPG.opponentsRemain >= 1)) {
            $("#messageLog").text("Choose another Opponent!");
            $("#" + RickAndMortyRPG.opponentSelected).remove();
            RickAndMortyRPG.gameStage = "opponents";
            RickAndMortyRPG.opponentsRemain--;
        }

        if (RickAndMortyRPG.gameStage == "fight") {
            RickAndMortyRPG.characterObject.healthUpdate(RickAndMortyRPG.opponentObject.counterattack);

            if (RickAndMortyRPG.characterObject.health <= 0) {
                $("#messageLog").text("*URP* Wait, wait stop! *URP* ok ok! *URP* I give!");
                RickAndMortyRPG.gameStage = "gameOver";
            }
        }

    }

});//End of function...for Attack Phase//



