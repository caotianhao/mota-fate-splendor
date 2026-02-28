main.floors.MT4=
{
    "floorId": "MT4",
    "title": "主塔 4 层",
    "name": "4",
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
        "1,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,11": {
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
    [  1,  7,131,  8,  1,203, 81, 34,  1,206, 31, 31,  1],
    [  1, 21, 46, 22,206,  0,  1,  1,206,  0,  1,206,  1],
    [  1,  1, 82,  1,  1,  0,  0,204,  0,  1,  1,206,  1],
    [  1, 32,  0,  1, 27,  1,206,  1,  0, 82,  0, 32,  1],
    [  1,  0,  0, 81, 31,210,  0,  1,206,  1,  1,  1,  1],
    [  1, 88,  0,  1, 28,  1,  0, 81,  0,203, 27, 32,  1],
    [  1,  1,  1,  1,  1,  1,209,  1,206,  1,  1, 81,  1],
    [  1, 21, 29,206, 32,203,  0,  0,  0,211, 28, 32,  1],
    [  1,  1, 82,  1, 81,  1,217,  1, 82,  1, 81,  1,  1],
    [  1, 21,  0,207, 22,  1, 32, 81, 21,207,  0,  0,  1],
    [  1,  0, 27,  1, 22,  1, 22,  1, 34,  1, 22, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}