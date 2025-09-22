var level = ["Light" , "Medium" , "Heavy"];

var lightSpecial = ["Cloaking Device" , "Evasive Dash" , "Grappling Hook"];

var lightWeapon = ["93R" , "ARN-220" , "Dagger" , "LH1" , "M11" , "M26 Matter" , "Recurve Bow" , "SH1900" , "SR-84" , "Sword" , "Throwing Knives" , "V9S" , "XP-54"];

var lightGadgets = ["Breach Charge" , "Flashbang" , "Frag Grenade" , "Gas Grenade" , "Gateway" , "Glitch Grenade" , "Goo Grenade" , "Gravity Vortex" , "H+ Infuser" , "Nillifier" , "Pyro Grenade" , "Smoke Grenade" , "Sonar Grenade" , "Thermal Bore" , "Thermal Vision" , "Tracking Dart" , "Vanishing Bomb"];

var mediumSpecial = ["Demateriallizer" , "Guardian Turret" , "Healing Beam"];

var mediumWeapon = ["AKM" , "CB-01 Repeater" , "Cerberus 12GA" , "CL-40" , "Dual Blades" , "FAMAS" , "FCAR" , "Model 1887" , "Pike-556" , "R .357" , "Riot Shield" , "r90"];

var mediumGadgets = ["APS Turret" , "Breach Drill" , "Data Reshaper" , "Defibillator" , "Explosive Mine" , "Flashbang" , "Frag Grenade" , "Gas Grenade" , "Gas Mine" , "Glitch Trap" , "Goo Grenade" , "Jump Pad" , "Proximity Sensor" , "Pyro Grenade" , "Smoke Grenade" , "Zipline"];

var heavySpecial = ["Charge 'N' Slam" , "Goo Gun" , "Mesh Shield" , "Winch Claw"];

var heavyWeapon = [".50 Akimbo" , "Flamethrower" , "KS-23" , "Lewis Gun" , "M134 Minigun" , "M60" , "MGL32" , "SA1216" , "Shak-50" , "Sledgehammer" , "Spear" , "BFR TITAN"];

var heavyGadgets = ["Anti-Gravity Cube" , "Barricade" , "C4" , "Dome Shield" , "Explosive Mine" , "Flashbang" , "Frag Grenade" , "Gas Grenade" , "Goo Grenade" , "Healing Emitter" , "Lockbolt" , "Proximity Sensor" , "Pyro Grenade" , "Pyro Mine" , "RPG-7" , "Smoke Grenade"];

function diceRoll() {

    var randomClass = Math.floor(Math.random()*level.length);
    var choosenLevel = level[randomClass];
    document.getElementById("rollOne").innerHTML = choosenLevel;

    switch(choosenLevel.toString().toLowerCase()) {

    case "light":
        
        var Special = Math.floor(Math.random()* lightSpecial.length);
        document.getElementById("rollTwo").innerHTML = lightSpecial[Special];

        var Weapon = Math.floor(Math.random()* lightWeapon.length);
        document.getElementById("rollThree").innerHTML = lightWeapon[Weapon];

        do {
            var GadgetsOne = Math.floor(Math.random()* lightGadgets.length);
            var GadgetsTwo = Math.floor(Math.random()* lightGadgets.length);
            var GadgetsThree = Math.floor(Math.random()* lightGadgets.length);
            document.getElementById("rollFour").innerHTML = lightGadgets[GadgetsOne];
            document.getElementById("rollFourOne").innerHTML = lightGadgets[GadgetsTwo];
            document.getElementById("rollFourTwo").innerHTML = lightGadgets[GadgetsThree];
        } while ( GadgetsOne === GadgetsTwo || GadgetsOne === GadgetsThree || GadgetsTwo === GadgetsThree);

        break;

    
    
    case "medium":

        var randomMSpecial = Math.floor(Math.random()*mediumSpecial.length);
        document.getElementById("rollTwo").innerHTML = mediumSpecial[randomMSpecial];

        var randomMWeapon = Math.floor(Math.random()*mediumWeapon.length);
        document.getElementById("rollThree").innerHTML = mediumWeapon[randomMWeapon];

        do{
            var randomMGadgetsOne = Math.floor(Math.random()*mediumGadgets.length);
            var randomMGadgetsTwo = Math.floor(Math.random()*mediumGadgets.length);
            var randomMGadgetsThree = Math.floor(Math.random()*mediumGadgets.length);
            document.getElementById("rollFour").innerHTML = mediumGadgets[randomMGadgetsOne];
            document.getElementById("rollFourOne").innerHTML = mediumGadgets[randomMGadgetsTwo];
            document.getElementById("rollFourTwo").innerHTML = mediumGadgets[randomMGadgetsThree];
        } while (randomMGadgetsOne === randomMGadgetsTwo || randomMGadgetsOne === randomMGadgetsThree || randomMGadgetsTwo === randomMGadgetsThree);

        break;

    

    case "heavy":

        var randomSpecial = Math.floor(Math.random()*heavySpecial.length);
        document.getElementById("rollTwo").innerHTML = heavySpecial[randomSpecial];

        var randomWeapon = Math.floor(Math.random()*heavyWeapon.length);
        document.getElementById("rollThree").innerHTML = heavyWeapon[randomWeapon];

        do {
            var randomGadgetsOne = Math.floor(Math.random()*heavyGadgets.length);
            var randomGadgetsTwo = Math.floor(Math.random()*heavyGadgets.length);
            var randomGadgetsThree = Math.floor(Math.random()*heavyGadgets.length);
            document.getElementById("rollFour").innerHTML = heavyGadgets[randomGadgetsOne];
            document.getElementById("rollFourOne").innerHTML = heavyGadgets[randomGadgetsTwo];
            document.getElementById("rollFourTwo").innerHTML = heavyGadgets[randomGadgetsThree];
        } while ( randomGadgetsOne === randomGadgetsTwo || randomGadgetsOne === randomGadgetsThree || randomGadgetsTwo === randomGadgetsThree);

        break;
    }
    
}