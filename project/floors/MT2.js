main.floors.MT2=
{
    "floorId": "MT2",
    "title": "主塔 2 层",
    "name": "主塔 2 层",
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
        "11,6": {
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
    [  1, 27,  1, 28,  1, 29,  1, 30,  1,  1, 22, 21,  1],
    [  1,205,  0,205, 32,202,201,  0,203, 82, 27, 27,  1],
    [  1,  1,  1,  1, 81,  1,  1,202,  1,  1,204,  1,  1],
    [  1,  1, 21,  1,  0,205,  0,  0,207, 32, 21, 27,  1],
    [  1, 28,205,217,205,  1, 81,  1,  1,  1, 81,  1,  1],
    [  1,  1, 81,  1,  0, 22,  0,205,206,  0,  0, 87,  1],
    [  1, 27,  0,  1, 81,  1,  1,  1,  1, 82,  1, 81,  1],
    [  1, 32,  0,201,  0, 31,  0,  0,205,  0,209, 21,  1],
    [  1,  1, 81,  1,201,  1,210,  1, 81,  1,211,  1,  1],
    [  1, 32,  0,202,  0, 82,209,  0,  0, 82,  0, 22,  1],
    [  1, 88,  0,  1, 21,  1,  1, 34, 29,  1, 32,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}