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
    document.getElementById("rollOne").innerHTML = level[randomClass];

    var choosenLevel = level[randomClass];

    switch(choosenLevel) {

        case "Light":

        var randomSpecial = Math.floor(Math.random()*lightSpecial.length);
        document.getElementById("rollTwo").innerHTML = lightSpecial[randomSpecial];

        var randomWeapon = Math.floor(Math.random()*lightWeapon.length);
        document.getElementById("rollThree").innerHTML = lightWeapon[randomWeapon];

        var randomGadgetsOne = Math.floor(Math.random()*lightGadgets.length);
        var randomGadgetsTwo = Math.floor(Math.random()*lightGadgets.length);
        var randomGadgetsThree = Math.floor(Math.random()*lightGadgets.length);
        document.getElementById("rollFour").innerHTML = lightGadgets[randomGadgetsOne];
        document.getElementById("rollFourOne").innerHTML = lightGadgets[randomGadgetsTwo];
        document.getElementById("rollFourTwo").innerHTML = lightGadgets[randomGadgetsThree];

        if (lightGadgets[randomGadgetsTwo] == lightGadgets[randomGadgetsOne]) {

            var randomGadgetsTwo = Math.floor(Math.random()*lightGadgets.length);
            document.getElementById("rollFourOne").innerHTML = lightGadgets[randomGadgetsTwo];
        } else if (lightGadgets[randomGadgetsThree] == lightGadgets[randomGadgetsOne] ||lightGadgets[randomGadgetsThree] == lightGadgets[randomGadgetsTwo]) {

            var randomGadgetsThree = Math.floor(Math.random()*lightGadgets.length);
            document.getElementById("rollFourTwo").innerHTML = lightGadgets[randomGadgetsThree];

        } else {

            break;
        }
    
    
    case "Medium":

        var randomSpecial = Math.floor(Math.random()*mediumSpecial.length);
        document.getElementById("rollTwo").innerHTML = mediumSpecial[randomSpecial];

        var randomWeapon = Math.floor(Math.random()*mediumWeapon.length);
        document.getElementById("rollThree").innerHTML = mediumWeapon[randomWeapon];

        var randomGadgetsOne = Math.floor(Math.random()*mediumGadgets.length);
        var randomGadgetsTwo = Math.floor(Math.random()*mediumGadgets.length);
        var randomGadgetsThree = Math.floor(Math.random()*mediumGadgets.length);
        document.getElementById("rollFour").innerHTML = mediumGadgets[randomGadgetsOne];
        document.getElementById("rollFourOne").innerHTML = mediumGadgets[randomGadgetsTwo];
        document.getElementById("rollFourTwo").innerHTML = mediumGadgets[randomGadgetsThree];

        if (randomGadgetsTwo == randomGadgetsOne) {

            randomGadgetsTwo = Math.floor(Math.random()*mediumGadgets.length);
            document.getElementById("rollFourOne").innerHTML = mediumGadgets[randomGadgetsTwo];
        } else if (randomGadgetsThree === randomGadgetsTwo|| randomGadgetsThree === randomGadgetsOne) {
            randomGadgetsThree = Math.floor(Math.random()*mediumGadgets.length);
            document.getElementById("rollFourTwo").innerHTML = mediumGadgets[randomGadgetsThree];

        } else {

            break;
        }
    

    case "Heavy":

        var randomSpecial = Math.floor(Math.random()*heavySpecial.length);
        document.getElementById("rollTwo").innerHTML = heavySpecial[randomSpecial];

        var randomWeapon = Math.floor(Math.random()*heavyWeapon.length);
        document.getElementById("rollThree").innerHTML = heavyWeapon[randomWeapon];

        var randomGadgetsOne = Math.floor(Math.random()*heavyGadgets.length);
        var randomGadgetsTwo = Math.floor(Math.random()*heavyGadgets.length);
        var randomGadgetsThree = Math.floor(Math.random()*heavyGadgets.length);
        document.getElementById("rollFour").innerHTML = heavyGadgets[randomGadgetsOne];
        document.getElementById("rollFourOne").innerHTML = heavyGadgets[randomGadgetsTwo];
        document.getElementById("rollFourTwo").innerHTML = heavyGadgets[randomGadgetsThree];

        if (lightGadgets[randomGadgetsTwo] == heavyGadgets[randomGadgetsOne]) {

            var randomGadgetsTwo = Math.floor(Math.random()*heavyGadgets.length);
            document.getElementById("rollFourOne").innerHTML = heavyGadgets[randomGadgetsTwo];
        } else if (heavyGadgets[randomGadgetsThree] == heavyGadgets[randomGadgetsOne] ||heavyGadgets[randomGadgetsThree] == heavyGadgets[randomGadgetsTwo]) {

            var randomGadgetsThree = Math.floor(Math.random()*heavyGadgets.length);
            document.getElementById("rollFourTwo").innerHTML = heavyGadgets[randomGadgetsThree];

        } else {

            break;
        }
    }
    
}