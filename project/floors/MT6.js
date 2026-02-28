main.floors.MT6=
{
    "floorId": "MT6",
    "title": "主塔 6 层",
    "name": "6",
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
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,5": {
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
    [  1, 32, 30,  1, 21,  1, 36,  1,  1, 27, 30, 29,  1],
    [  1, 31, 32,217,  0,206,207,206,  1,  1, 82,  1,  1],
    [  1,  1, 81,  1, 82,  1,  1,  0,  0,207,  0, 34,  1],
    [  1, 21,  0,211,  0,  0,  1,  1,204,  1, 82,  1,  1],
    [  1,  0, 22,  1,  0, 34,  1, 34,  0,211,  0, 87,  1],
    [  1,  1, 81,  1,211,  1, 32,  1,  1, 81,  1,  1,  1],
    [  1, 27,  0,  1,  0, 81,  0,212, 29,  0,210,  0,  1],
    [  1,  0, 29, 82,  0,  1,206,  1,  0, 32,  1, 81,  1],
    [  1,204,  1,  1,217,  1,206,  1, 81,  1, 30,  0,  1],
    [  1,  0,  0,  0,  0, 82,  0,203,  0,211,  0, 28,  1],
    [  1, 88,  1, 32, 31,  1, 21,  1, 22,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}