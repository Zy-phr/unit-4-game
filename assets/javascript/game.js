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
    health: 2000,
    attack: Math.floor(Math.random()* 100) + 1,
    counterattack: Math.floor(Math.random()* 50) + 1,
    imageUrl: "assets/images/playablerick.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#RickSanchezHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var MortySmith = {
    health: 1825,
    attack: Math.floor(Math.random()* 100) + 1,
    counterattack: Math.floor(Math.random()* 50) + 1,
    imageUrl: "assets/images/playableMorty.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#MortySmithHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var SummerSmith = {
    health: 1750,
    attack: Math.floor(Math.random()* 100) + 1,
    counterattack: Math.floor(Math.random()* 50) + 1,
    imageUrl: "assets/images/playableSummer.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#SummerSmithHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var Hemorrhage = {
    health: 1775,
    attack: Math.floor(Math.random()* 100) + 1,
    counterattack: Math.floor(Math.random()* 50) + 1,
    imageUrl: "assets/images/playableHemorrhage.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#HemorrhageHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var PrinceNebulon = {
    health: 2200,
    attack: Math.floor(Math.random()* 100) + 1,
    counterattack: Math.floor(Math.random()* 50) + 1,
    imageUrl: "assets/images/playablePrinceNebulon.png",
    healthUpdate: function(attackDamage) {
      this.health -= attackDamage;
      $("#PrinceNebulonHP").text(this.health);
    },
    attackUpdate: function() {
      this.attack *= 1;
    }
};
  
var Birdperson = {
    health: 1875,
    attack: Math.floor(Math.random()* 100) + 1,
    counterattack: Math.floor(Math.random()* 50) + 1,
    imageUrl: "assets/images/playableBirdperson.png",
    healthUpdate: function(attackDamage) {
      this.health -= attackDamage;
      $("#BirdpersonHP").text(this.health);
    },
    attackUpdate: function() {
      this.attack *= 1;
    }
};

var KrombopulosMichael = {
    health: 1900,
    attack: Math.floor(Math.random()* 100) + 1,
    counterattack: Math.floor(Math.random()* 50) + 1,
    imageUrl: "assets/images/playableKrombopulosMichael.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#KrombopulosMichaelHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var PrinceNebulon = {
    health: 1975,
    attack: Math.floor(Math.random()* 100) + 1,
    counterattack: Math.floor(Math.random()* 50) + 1,
    imageUrl: "assets/images/playablePrinceNebulon.png",
    healthUpdate: function(attackDamage) {
      this.health -= attackDamage;
      $("#PrinceNebulonHP").text(this.health);
    },
    attackUpdate: function() {
      this.attack *= 1;
    }
};
  
var ScaryTerry = {
    health: 1850,
    attack: Math.floor(Math.random()* 100) + 1,
    counterattack: Math.floor(Math.random()* 50) + 1,
    imageUrl: "assets/images/playableScaryTerry.png",
    healthUpdate: function(attackDamage) {
      this.health -= attackDamage;
      $("#ScaryTerryHP").text(this.health);
    },
    attackUpdate: function() {
      this.attack *= 1;
    }
};


var RickSanchezDiv = $("#RickSanchez");
var MortySmithDiv = $("#MortySmith");
var SummerSmithDiv = $("#SummerSmith");
var HemorrhageDiv = $("#Hemorrhage");
var PrinceNebulonDiv = $("#PrinceNebulon");
var BirdpersonDiv = $("#Birdperson");
var KrombopulosMichaelDiv = $("#KrombopulosMichael");
var PrinceNebulonDiv = $("#PrinceNebulon");
var ScaryTerryDiv = $("#ScaryTerry");

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
            $("#RickSanchez").html('<p>Rick</p> <img src="assets/images/playableRick.png" height="275"> <p id="RickSanchezHP">2000 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "MortySmith") {
            RickAndMortyRPG.characterObject = MortySmith;
            $("#character_display").append(MortySmithDiv);
            $("#MortySmith").html('<p>Morty</p> <img src="assets/images/playableMorty.png" height="275"> <p id="MortySmithHP">1825 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "SummerSmith") {
            RickAndMortyRPG.characterObject = SummerSmith;
            $("#character_display").append(SummerSmithDiv);
            $("#SummerSmith").html('<p>Summer</p> <img src="assets/images/playableSummer.png" height="275"> <p id="SummerSmithHP">1750 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "Hemorrhage") {
            RickAndMortyRPG.characterObject = Hemorrhage;
            $("#character_display").append(HemorrhageDiv);
            $("#Hemorrhage").html('<p>Hemorrhage</p> <img src="assets/images/playableHemorrhage.png" height="275"> <p id="HemorrhageHP">1775 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "PickleRick") {
            RickAndMortyRPG.characterObject = PickleRick;
            $("#character_display").append(PickleRickDiv);
            $("#PickleRick").html('<p>Pickle Rick</p> <img src="assets/images/playablePickleRick.png" height="275"> <p id="PickleRick">2200 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "Birdperson") {
            RickAndMortyRPG.characterObject = Birdperson;
            $("#character_display").append(BirdpersonDiv);
            $("#Birdperson").html('<p>Birdperson</p> <img src="assets/images/playableBirdperson.png" height="275"> <p id="BirdpersonHP">1875 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "KrombopulosMichael") {
            RickAndMortyRPG.characterObject = KrombopulosMichael;
            $("#character_display").append(KrombopulosMichaelDiv);
            $("#KrombopulosMichael").html('<p>Krombopulos Michael</p> <img src="assets/images/playableKrombopulosMichael.png" height="275"> <p id="KrombopulosMichaelHP">1900 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "PrinceNebulon") {
            RickAndMortyRPG.characterObject = PrinceNebulon;
            $("#character_display").append(PrinceNebulonDiv);
            $("#PrinceNebulon").html('<p>Prince Nebulon</p> <img src="assets/images/playablePrinceNebulon.png" height="275"> <p id="PrinceNebulonHP">1975 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "ScaryTerry") {
            RickAndMortyRPG.characterObject = ScaryTerry;
            $("#character_display").append(ScaryTerryDiv);
            $("#ScaryTerry").html('<p>Scary Terry</p> <img src="assets/images/playableScaryTerry.png" height="275"> <p id="ScaryTerryHP">1850 HP</p>');
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
            $("#RickSanchez").html('<p>Rick</p> <img src="assets/images/playableRick.png" height="275"> <p id="RickSanchezHP">2000 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "MortySmith") {
            RickAndMortyRPG.opponentObject = MortySmith;
            $("#enemy_display").append(MortySmithDiv);
            $("#MortySmith").html('<p>Morty</p> <img src="assets/images/playableMorty.png" height="275"> <p id="MortySmithHP">1825 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "SummerSmith") {
            RickAndMortyRPG.opponentObject = SummerSmith;
            $("#enemy_display").append(SummerSmithDiv);
            $("#SummerSmith").html('<p>Summer</p> <img src="assets/images/playableSummer.png" height="275"> <p id="SummerSmithHP">1750 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "Hemorrhage") {
            RickAndMortyRPG.opponentObject = Hemorrhage;
            $("#enemy_display").append(HemorrhageDiv);
            $("#Hemorrhage").html('<p>Hemorrhage</p> <img src="assets/images/playableHemorrhage.png" height="275"> <p id="HemorrhageHP">1775 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "PickleRick") {
            RickAndMortyRPG.opponentObject = PickleRick;
            $("#enemy_display").append(PickleRickDiv);
            $("#PickleRick").html('<p>Pickle Rick</p> <img src="assets/images/playablePickleRick.png" height="275"> <p id="PickleRick">2200 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "Birdperson") {
            RickAndMortyRPG.opponentObject = Birdperson;
            $("#enemy_display").append(BirdpersonDiv);
            $("#Birdperson").html('<p>Birdperson</p> <img src="assets/images/playableBirdperson.png" height="275"> <p id="BirdpersonHP">1875 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "KrombopulosMichael") {
            RickAndMortyRPG.opponentObject = KrombopulosMichael;
            $("#enemy_display").append(KrombopulosMichaelDiv);
            $("#KrombopulosMichael").html('<p>Krombopulos Michael</p> <img src="assets/images/playableKrombopulosMichael.png" height="275"> <p id="KrombopulosMichaelHP">1900 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "PrinceNebulon") {
            RickAndMortyRPG.opponentObject = PrinceNebulon;
            $("#enemy_display").append(PrinceNebulonDiv);
            $("#PrinceNebulon").html('<p>Prince Nebulon</p> <img src="assets/images/playablePrinceNebulon.png" height="275"> <p id="PrinceNebulonHP">1975 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "ScaryTerry") {
            RickAndMortyRPG.opponentObject = ScaryTerry;
            $("#enemy_display").append(ScaryTerryDiv);
            $("#ScaryTerry").html('<p>Scary Terry</p> <img src="assets/images/playableScaryTerry.png" height="275"> <p id="ScaryTerryHP">1850 HP</p>');
        }


        RickAndMortyRPG.gameStage = "fight";
    }

    console.log(RickAndMortyRPG.gameStage);
}); //End of function...for Character and Opponent Selection//

/*
=======================================================
Attack Phase function enabling action between objects
=======================================================
*/

var renderMessage = function(message) {
    var attackMessage = $("#messageLog");
    var newMessage = $("<div>").text(message);
    attackMessage.append(newMessage);

    if (message == 'clearMessage') {
      attackMessage.text('');
    }
  };

$(".attackButton").on("click", function() {
    if (RickAndMortyRPG.gameStage == "fight") {
        // var attackMessage = "You attacked" + opponentSelected.name + "for" + (characterSelected.attack) + "damage";
        // renderMessage("clearMessage");
        RickAndMortyRPG.opponentObject.healthUpdate(RickAndMortyRPG.characterObject.attack);
        RickAndMortyRPG.characterObject.attackUpdate();
        
        
    
        if ((RickAndMortyRPG.opponentObject.health <= 0) && (RickAndMortyRPG.opponentsRemain >= 1)) {
            $("#messageLog").text("*URP* Hold it! *URP* I did it! *URP* I won!");
            $("#" + RickAndMortyRPG.opponentSelected).remove();
            RickAndMortyRPG.gameStage = "gameOver";
        }

        if ((RickAndMortyRPG.opponentObject.health <= 0) && (RickAndMortyRPG.opponentsRemain >= 1)) {
            $("#messageLog").text("*URP* Hold it! *URP* I did it! *URP* I won!  Choose another Opponent!");
            $("#" + RickAndMortyRPG.opponentSelected).remove();
            RickAndMortyRPG.gameStage = "opponents";
            RickAndMortyRPG.opponentsRemain = 4;
        }

        if (RickAndMortyRPG.gameStage == "fight") {
            // var attackMessage = opponentSelected.name + "attacked you back for" + (characterSelected.counterattack) + "damage";
            // renderMessage(attackMessage);
            // renderMessage(counterAttackMessage);
            RickAndMortyRPG.characterObject.healthUpdate(RickAndMortyRPG.opponentObject.counterattack);
          
            if (RickAndMortyRPG.characterObject.health <= 0) {
                $("#messageLog").text("*URP* Wait, wait stop! *URP* ok ok! *URP* I give!");
                RickAndMortyRPG.gameStage = "gameOver";
            }
        }

    }

});//End of function...for Attack Phase//

$("body").on("click", ".restartButton",function(){	
    location.reload();

});
