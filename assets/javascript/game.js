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
    opponentsRemain: 3
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
            $("#RickSanchez").html('<p>Rick Sanchez</p> <img src="assets/images/rick.png" border-radius="none" border="none"> <p id="RickSanchezHP">200 HP</p>');
        }


    }

 
//End of function...marks...leave at end//
}); 
