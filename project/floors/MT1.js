main.floors.MT1=
{
    "floorId": "MT1",
    "title": "主塔 1 层",
    "name": "主塔 1 层",
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
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,6": {
            "floorId": ":before",
            "stair": "upFloor"
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
    [  1,  1,  0,  1,  1, 27, 30,  1, 31, 21,  1, 31,  1],
    [  1, 22,209,  0,207, 22, 31,  1, 28, 21,  1, 28,  1],
    [  1,  1,211,  1,  1, 81,  1,  1, 82,  1,  1, 27,  1],
    [  1, 31,  0,201,  0,  0,202,  0,  0,  1,  1, 81,  1],
    [  1,  1,  0,  1,201,  1,  1,  0,  0,201, 45, 21,  1],
    [  1, 32,  0,  1,  0,  1,  1, 81,  1,  1,  0, 88,  1],
    [  1, 22,  0,202,  0,  0, 32,201,  0,  1,  1,  1,  1],
    [  1,  1,205,  1, 81,  1,  1,  1,201, 81, 21, 28,  1],
    [  1,  0,  0,  1, 27,  1,  0, 32,  0,  1,202,  1,  1],
    [  1,  1, 82,  1,  1,  1, 81,  1,210,  1, 21, 29,  1],
    [  1, 87,  0,201,202,201,  0, 28,  0, 82, 32, 21,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}