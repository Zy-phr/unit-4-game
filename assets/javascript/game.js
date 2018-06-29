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
    attack: Math.floor(Math.random()* 1000) + 1,
    counterattack: Math.floor(Math.random()* 500) + 1,
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
    attack: Math.floor(Math.random()* 1000) + 1,
    counterattack: Math.floor(Math.random()* 500) + 1,
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
    attack: Math.floor(Math.random()* 1000) + 1,
    counterattack: Math.floor(Math.random()* 500) + 1,
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
    attack: Math.floor(Math.random()* 1000) + 1,
    counterattack: Math.floor(Math.random()* 500) + 1,
    imageUrl: "assets/images/playableHemorrhage.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#HemorrhageHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var PickleRick = {
    health: 2200,
    attack: Math.floor(Math.random()* 1000) + 1,
    counterattack: Math.floor(Math.random()* 500) + 1,
    imageUrl: "assets/images/playablePickleRick.png",
    healthUpdate: function(attackDamage) {
      this.health -= attackDamage;
      $("#PickleRickHP").text(this.health);
    },
    attackUpdate: function() {
      this.attack *= 1;
    }
};
  
var Birdperson = {
    health: 1875,
    attack: Math.floor(Math.random()* 1000) + 1,
    counterattack: Math.floor(Math.random()* 500) + 1,
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
    attack: Math.floor(Math.random()* 1000) + 1,
    counterattack: Math.floor(Math.random()* 500) + 1,
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
    attack: Math.floor(Math.random()* 1000) + 1,
    counterattack: Math.floor(Math.random()* 500) + 1,
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
    attack: Math.floor(Math.random()* 1000) + 1,
    counterattack: Math.floor(Math.random()* 500) + 1,
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
var PickleRickDiv = $("#PickleRick");
var BirdpersonDiv = $("#Birdperson");
var KrombopulosMichaelDiv = $("#KrombopulosMichael");
var PrinceNebulonDiv = $("#PrinceNebulon");
var ScaryTerryDiv = $("#ScaryTerry");

var portal = new Audio('assets/sounds/Rick and Morty Portal Gun Sound Effect.mp3');
var theme = new Audio('assets/sounds/rick and morty theme.mp3');
var attack = new Audio('assets/sounds/laser.mp3');
var terry = new Audio("assets/sounds/scary_terry.mp3");
var pickle = new Audio('assets/sounds/pickle_rick.mp3');
var bird = new Audio('assets/sounds/In_bird_culture__this_is_considered.mp3');
var hemor = new Audio('assets/sounds/HemorrhageVoice.mp3');
var phoenix = new Audio('assets/sounds/PhoenixpersonVoice.mp3');
var prince = new Audio('assets/sounds/PrinceVoice.mp3');
var summ = new Audio('assets/sounds/Keep_Summer_Safe.mp3');
var km = new Audio('assets/sounds/KMvoice.mp3');
var mort = new Audio('assets/sounds/oh_man.mp3');
var rick = new Audio('assets/sounds/ricky_ticky_tabby_biatch.mp3');

/*
=======================================================
Character Selection on.cllick task assignments 
=======================================================
*/

$(".character").on("click", function() {
    portal.play();

    if (RickAndMortyRPG.gameStage == "initial") {
        RickAndMortyRPG.characterSelected = $(this).attr("id");
        $("id" + RickAndMortyRPG.characterSelected).remove();

        $("#prompts").text("Choose your Opponent!");
       
        console.log(RickAndMortyRPG.characterSelected);

        if (RickAndMortyRPG.characterSelected == "RickSanchez") {
            rick.play();
            RickAndMortyRPG.characterObject = RickSanchez;
            $(".leftPortal_image").html('<img src="assets/images/leftPortal.png" width="150" height="325">');
            $("#character_display").append(RickSanchezDiv);
            $("#RickSanchez").html('<p>Rick</p> <img src="assets/images/playableRick.png" height="275"> <p id="RickSanchezHP">2000 HP</p>');  
        }

        if (RickAndMortyRPG.characterSelected == "MortySmith") {
            mort.play();
            RickAndMortyRPG.characterObject = MortySmith;
            $(".leftPortal_image").html('<img src="assets/images/leftPortal.png" width="150" height="325">');
            $("#character_display").append(MortySmithDiv);
            $("#MortySmith").html('<p>Morty</p> <img src="assets/images/playableMorty.png" height="275"> <p id="MortySmithHP">1825 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "SummerSmith") {
            summ.play();
            RickAndMortyRPG.characterObject = SummerSmith;
            $(".leftPortal_image").html('<img src="assets/images/leftPortal.png" width="150" height="325">');
            $("#character_display").append(SummerSmithDiv);
            $("#SummerSmith").html('<p>Summer</p> <img src="assets/images/playableSummer.png" height="275"> <p id="SummerSmithHP">1750 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "Hemorrhage") {
            hemor.play();
            RickAndMortyRPG.characterObject = Hemorrhage;
            $(".leftPortal_image").html('<img src="assets/images/leftPortal.png" width="150" height="325">');
            $("#character_display").append(HemorrhageDiv);
            $("#Hemorrhage").html('<p>Hemorrhage</p> <img src="assets/images/playableHemorrhage.png" height="275"> <p id="HemorrhageHP">1775 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "PickleRick") {
            pickle.play();
            RickAndMortyRPG.characterObject = PickleRick;
            $(".leftPortal_image").html('<img src="assets/images/leftPortal.png" width="150" height="325">');
            $("#character_display").append(PickleRickDiv);
            $("#PickleRick").html('<p>Pickle Rick</p> <img src="assets/images/playablePickleRick.png" height="275"> <p id="PickleRickHP">2200 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "Birdperson") {
            phoenix.play();
            RickAndMortyRPG.characterObject = Birdperson;
            $(".leftPortal_image").html('<img src="assets/images/leftPortal.png" width="150" height="325">');
            $("#character_display").append(BirdpersonDiv);
            $("#Birdperson").html('<p>Phoenixperson</p> <img src="assets/images/playableBirdperson.png" height="275"> <p id="BirdpersonHP">1875 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "KrombopulosMichael") {
            km.play();
            RickAndMortyRPG.characterObject = KrombopulosMichael;
            $(".leftPortal_image").html('<img src="assets/images/leftPortal.png" width="150" height="325">');
            $("#character_display").append(KrombopulosMichaelDiv);
            $("#KrombopulosMichael").html('<p>Krombopulos Michael</p> <img src="assets/images/playableKrombopulosMichael.png" height="275"> <p id="KrombopulosMichaelHP">1900 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "PrinceNebulon") {
            prince.play();
            RickAndMortyRPG.characterObject = PrinceNebulon;
            $(".leftPortal_image").html('<img src="assets/images/leftPortal.png" width="150" height="325">');
            $("#character_display").append(PrinceNebulonDiv);
            $("#PrinceNebulon").html('<p>Prince Nebulon</p> <img src="assets/images/playablePrinceNebulon.png" height="275"> <p id="PrinceNebulonHP">1975 HP</p>');
        }

        if (RickAndMortyRPG.characterSelected == "ScaryTerry") {
            terry.play();
            RickAndMortyRPG.characterObject = ScaryTerry;
            $(".leftPortal_image").html('<img src="assets/images/leftPortal.png" width="150" height="325">');
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
        $("#prompts").text("The world is full of idiots who don't understand what's important, and they'll tear us apart!");

        console.log(RickAndMortyRPG.opponentSelected);

        if (RickAndMortyRPG.opponentSelected == "RickSanchez") {
            rick.play();
            RickAndMortyRPG.opponentObject = RickSanchez;
            $(".rightPortal_image").html('<img src="assets/images/rightPortal.png" width="150" height="325">');
            $("#enemy_display").append(RickSanchezDiv);
            $("#RickSanchez").html('<p>Rick</p> <img src="assets/images/playableRick.png" height="275"> <p id="RickSanchezHP">2000 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "MortySmith") {
            mort.play();
            RickAndMortyRPG.opponentObject = MortySmith;
            $(".rightPortal_image").html('<img src="assets/images/rightPortal.png" width="150" height="325">');
            $("#enemy_display").append(MortySmithDiv);
            $("#MortySmith").html('<p>Morty</p> <img src="assets/images/playableMorty.png" height="275"> <p id="MortySmithHP">1825 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "SummerSmith") {
            summ.play();
            RickAndMortyRPG.opponentObject = SummerSmith;
            $(".rightPortal_image").html('<img src="assets/images/rightPortal.png" width="150" height="325">');
            $("#enemy_display").append(SummerSmithDiv);
            $("#SummerSmith").html('<p>Summer</p> <img src="assets/images/playableSummer.png" height="275"> <p id="SummerSmithHP">1750 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "Hemorrhage") {
            hemor.play();
            RickAndMortyRPG.opponentObject = Hemorrhage;
            $(".rightPortal_image").html('<img src="assets/images/rightPortal.png" width="150" height="325">');
            $("#enemy_display").append(HemorrhageDiv);
            $("#Hemorrhage").html('<p>Hemorrhage</p> <img src="assets/images/playableHemorrhage.png" height="275"> <p id="HemorrhageHP">1775 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "PickleRick") {
            pickle.play();
            RickAndMortyRPG.opponentObject = PickleRick;
            $(".rightPortal_image").html('<img src="assets/images/rightPortal.png" width="150" height="325">');
            $("#enemy_display").append(PickleRickDiv);
            $("#PickleRick").html('<p>Pickle Rick</p> <img src="assets/images/playablePickleRick.png" height="275"> <p id="PickleRickHP">2200 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "Birdperson") {
            phoenix.play();
            RickAndMortyRPG.opponentObject = Birdperson;
            $(".rightPortal_image").html('<img src="assets/images/rightPortal.png" width="150" height="325">');
            $("#enemy_display").append(BirdpersonDiv);
            $("#Birdperson").html('<p>Phoenixperson</p> <img src="assets/images/playableBirdperson.png" height="275"> <p id="BirdpersonHP">1875 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "KrombopulosMichael") {
            km.play();
            RickAndMortyRPG.opponentObject = KrombopulosMichael;
            $(".rightPortal_image").html('<img src="assets/images/rightPortal.png" width="150" height="325">');
            $("#enemy_display").append(KrombopulosMichaelDiv);
            $("#KrombopulosMichael").html('<p>Krombopulos Michael</p> <img src="assets/images/playableKrombopulosMichael.png" height="275"> <p id="KrombopulosMichaelHP">1900 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "PrinceNebulon") {
            prince.play();
            RickAndMortyRPG.opponentObject = PrinceNebulon;
            $(".rightPortal_image").html('<img src="assets/images/rightPortal.png" width="150" height="325">');
            $("#enemy_display").append(PrinceNebulonDiv);
            $("#PrinceNebulon").html('<p>Prince Nebulon</p> <img src="assets/images/playablePrinceNebulon.png" height="275"> <p id="PrinceNebulonHP">1975 HP</p>');
        }

        if (RickAndMortyRPG.opponentSelected == "ScaryTerry") {
            terry.play();
            RickAndMortyRPG.opponentObject = ScaryTerry;
            $(".rightPortal_image").html('<img src="assets/images/rightPortal.png" width="150" height="325">');
            $("#enemy_display").append(ScaryTerryDiv);
            $("#ScaryTerry").html('<p>Scary Terry</p> <img src="assets/images/playableScaryTerry.png" height="275"> <p id="ScaryTerryHP">1850 HP</p>');
        }


        RickAndMortyRPG.gameStage = "fight";
        $("#duel").text("Attack!");
    
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

var beam = new Audio('assets/sounds/laser_message.mp3');
var goodJob = new Audio('assets/sounds/congrats_you_did_it.mp3');
var wrecked = new Audio('assets/sounds/rick_quote_recked.mp3');

$(".attackButton").on("click", function() {
    beam.play();

    if (RickAndMortyRPG.gameStage == "fight") {
        // $("#duel").text("DUEL!");
        
        renderMessage("clearMessage");
        RickAndMortyRPG.opponentObject.healthUpdate(RickAndMortyRPG.characterObject.attack);
        RickAndMortyRPG.characterObject.attackUpdate();
        // attackMessage.text("You attacked" + opponentSelected.name + "for" + (characterSelected.attack) + "damage");
        
        if ((RickAndMortyRPG.opponentObject.health <= 0) && (RickAndMortyRPG.opponentsRemain >= 1)) {
            goodJob.play();
            $("#messageLog").text("*URP* Hold it! *URP* You won!");
            $("#" + RickAndMortyRPG.opponentSelected).remove();
            RickAndMortyRPG.gameStage = "gameOver";
        }

        if ((RickAndMortyRPG.opponentObject.health <= 0) && (RickAndMortyRPG.opponentsRemain >= 1 )) {
            $("#messageLog").text("You won! Choose another Opponent! or hit restart!");
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
                wrecked.play();
                $("#messageLog").text("*URP* Wait, wait stop! *URP* ok ok! *URP* I give! Hit restart!");
                RickAndMortyRPG.gameStage = "gameOver";
                $("#duel").text("Restart!");
            }
        }

    }

});//End of function...for Attack Phase//

$(".restartButton").on("click", function() {	
    location.reload();
   

});
