main.floors.MT12=
{
    "floorId": "MT12",
    "title": "主塔 12 层",
    "name": "主塔 12 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "5,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0,  1,  1, 27,  1, 28,  1, 21,  1, 34,  1],
    [  1,  1,  0, 34, 82,  0, 30,  0, 82, 21,218, 22,  1],
    [  1, 32,277,  1,  1,  1,277,  1,  1,  1,218,  1,  1],
    [  1,277,  1, 28,  1,  1, 81,  1, 33,  1,  0, 29,  1],
    [  1, 32,277,  0,214,  0,  0, 81, 29,218,  0,  1,  1],
    [  1,  1, 81,  1,  1, 87,  0,  1,277,  1,213,  1,  1],
    [  1, 34,  0,  1, 27,  1,218,  1,  0,  0,  0, 28,  1],
    [  1, 34,  0,213,  0, 81,  0,  1,  1,214,  1,  1,  1],
    [  1,  1,218,  1,234,  1,  1,  1,  1,  0, 82, 21,  1],
    [  1, 21, 30, 82,  0,  0, 81,  0,213,  0,  1, 28,  1],
    [  1, 29, 21,  1, 34, 22,  1, 33,  1, 33,  1, 27,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}