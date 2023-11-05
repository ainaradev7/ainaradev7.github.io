import { wearBind } from "./utils/utilsCharacter";

let eventInterval;
const players = new Map();
const greenColor = "#56AB56";

function initEvent() {
    ChatRoomCharacter.forEach(function (c) {
        players.set(c, 0)
    });
    eventInterval = setInterval(function () {
        stepEvent();
    }, 1*1000);
}

function stopEvent() {
    clearInterval(eventInterval);
    players.clear()
}

function stepEvent() {
    for (let [character, level] of players) {
        if (ChatRoomCharacter.includes(character)) {
            players.set(character, level + 1);
        } else {
            players.delete(character);
        }
    }
    process()
}

function process() {
    for (let [character, level] of players) {
        switch (level) {
            case 0:
                break;
            case 1:
                wearBind(Player, "HempRope", "ItemLegs", greenColor, 1) {
                break;
            case 2:
                if (InventoryGet(Player, "ItemArms") == null) InventoryWear(Player, "HempRope", "ItemArms", greenColor, 1, false);
                break;
            case 3:
                break;
            default:
                break;
        }
    }
}