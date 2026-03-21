main.floors.MA11=
{
    "floorId": "MA11",
    "title": "地下 11 层",
    "name": "地下 11 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 3,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,1": {
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
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2,1270,1284,  2, 22,  2,1270,  2,  0,1270,  0, 88,  2],
    [  2,1277,1369,  0,1366,  0,1368,  2,  0,  2, 82,  2,  2],
    [  2,  2, 82,  2, 81,  2, 82,  2,  0,  0,1366, 21,  2],
    [  2, 22,  0,  0,  0,1366,  0,  2,  0,  2, 81,  2,  2],
    [  2,  0,1277,  2,  2,  2,  0, 81,  0, 21,  0,  0,  2],
    [  2, 81,  2,  2,1367, 81,  0,  2,  2,  0,  2,  2,  2],
    [  2, 21,1369,  0,  0,  2,  0,  2,  2,1284,  2,  2,  2],
    [  2,  2, 81,  2,1367,  0,  0,  2,  0,1277,  0, 21,  2],
    [  2,  0,1368,  0,  2,  2, 81,  2,  2,1270,  2, 21,  2],
    [  2, 22,  2,1277, 82,  0,  0,1291,  2, 81,  2, 82,  2],
    [  2,  0,  2,1270,  2,  2, 87,  0,  0,1366,1369,1366,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
],
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}