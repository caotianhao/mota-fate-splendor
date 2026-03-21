main.floors.MT36=
{
    "floorId": "MT36",
    "title": "主塔 36 层",
    "name": "主塔 36 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "images": [],
    "ratio": 2,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "7,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT36_10_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT36_10_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT36_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT36_10_6",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,8": {
            "0": {
                "condition": "flag:door_MT36_10_8==2",
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
                        "name": "flag:door_MT36_10_8",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "10,6": {
            "0": {
                "condition": "flag:door_MT36_10_6==2",
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
                        "name": "flag:door_MT36_10_6",
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
    [  1, 87,1367,  1, 22,  1,  1, 21, 81, 82,569,168,  1],
    [  1,  0,  0, 82,1366, 81,568,1369,  1,  1,  1,  1,  1],
    [  1, 81,  1,  1,700,  1,  1, 21,570,568,1270,1270,  1],
    [  1,1369,1277,570,  0,1277,  1,  1,  1,  1, 81,  1,  1],
    [  1,  1,  1,  1,677,  1,  1,568, 82,569,  0,569,  1],
    [  1,1284,1270,  1,1258,  1,522,  0,  1,  1, 85,  1,  1],
    [  1, 21, 22, 81,  0, 81,  0,1270,  1,528,1515,528,  1],
    [  1,  1,249,  1,228,  1,568,  1,  1,  1, 85,  1,  1],
    [  1,1369, 21,568,  0,  0,  0,  0,  1,  1, 21,1367,  1],
    [  1,  1,773,  1,  1,700,  1,  0, 82, 82,228, 44,  1],
    [  1,1270, 22,1277, 81,1368,  1, 88,  1,  1,1366, 22,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}