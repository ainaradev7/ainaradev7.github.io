import { wearBind, breakRandomClothes } from "./utils/utilsCharacter";

let eventInterval;
let level = 0;
const greenColor = "#56AB56";

function initEvent() {
    eventInterval = setInterval(function () {
        stepEvent();
    }, 5*1000);
}

function stopEvent() {
    clearInterval(eventInterval);
}

function stepEvent() {
    // fight against the bindings by user prompt
    let eventInt = getRandomInt(51)
    let playerInt = getRandomInt(101)
    if (eventInt > playerInt) {
        process();
        level++;
    }
}

function process() {
// Expected output: 0, 1 or 2
    switch (level) {
        case 0:
            break;
        case 1:
            wearBind(Player, "HempRope", "ItemLegs", greenColor, 1);
            break;
        case 2:
            wearBind(Player, "HempRope", "ItemArms", greenColor, 1);
            break;
        case 3:
            break;
        default:
            break;
    }
    if (level > 10) {
        breakRandomClothes(player);
    }
}