main.floors.MT47=
{
    "floorId": "MT47",
    "title": "主塔 47 层",
    "name": "主塔 47 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "images": [],
    "ratio": 3,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "5,4": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT47_10_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT47_10_2",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,2": {
            "0": {
                "condition": "flag:door_MT47_10_2==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT47_10_2",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,1270,1277,  1,  1,243,1369, 22,  1,1369, 23,1369,  1],
    [  1,1284, 21,1173,1292,  1, 81,  1,  1,  1, 85,  1,  1],
    [  1,606,  1,1173,  1,  0,606,  0,  1,1631,  0,1631,  1],
    [  1,1368, 82,  0, 82, 87,  1,642,  1,  1, 82,  1,  1],
    [  1,  1,  1,642,  1,  1,  1,1515, 81,1173,1366, 21,  1],
    [  1,1277, 81,  0, 22,  1,  1,642,  1,  1,1367, 22,  1],
    [  1,  1,  1,1173,  1,1369,  1,  1,  1,  1, 82,  1,  1],
    [  1,1270, 81,  0,642, 22,642,1368,606,  0,1367,  0,  1],
    [  1,  1,  1,1177,  1,208,  1,  1,  1,266,  1,513,  1],
    [  1,1369,606,  0, 81,  0,  0,266,  0,  0, 82,1368,  1],
    [  1,1592,  1, 21,  1,1367, 88,  1,1277,1270,  1,1369,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}