main.floors.MT3=
{
    "floorId": "MT3",
    "title": "主塔 3 层",
    "name": "3",
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
        "11,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,6": {
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
    [  1,  0, 28,  1, 31,  1, 31, 32,  1,  1, 21,  1,  1],
    [  1, 22,  0, 81,  0,205,  0,  0,203, 81, 30, 22,  1],
    [  1,  1, 82,  1,206,  1,  1,210,  1,  1, 82,  1,  1],
    [  1, 29,  0,205,  0, 29,205,  0,202,202, 31, 27,  1],
    [  1,  1,  1,  1, 81,  1,  1, 81,  1,  1, 82,  1,  1],
    [  1, 87,  0,203,  0,  0,217,  0,209,209,  0, 88,  1],
    [  1,  1, 81,  1,  1,209,  1,209,  1,  1, 81,  1,  1],
    [  1, 34,  0,  1, 31,  0, 81,  0,  1,  1,  0, 21,  1],
    [  1,  1,210,209,  0, 31,  1,  0,205,205,  0, 32,  1],
    [  1, 27,  0,  1, 82,  1,  1, 29,  1,  1,206,  1,  1],
    [  1,  0, 21,  1, 21, 21,  1,  0, 81,  0, 34, 30,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}