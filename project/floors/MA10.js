main.floors.MA10=
{
    "floorId": "MA10",
    "title": "地下 10 层",
    "name": "地下 10 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 2,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:door_MA10_6_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA10_7_10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA10_5_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:door_MA10_6_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA10_7_10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA10_5_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_MA10_6_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA10_7_10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA10_5_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_MA10_6_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA10_7_10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA10_5_10",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,9": {
            "0": {
                "condition": "flag:door_MA10_6_9==4",
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
                        "name": "flag:door_MA10_6_9",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "7,10": {
            "0": {
                "condition": "flag:door_MA10_7_10==4",
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
                        "name": "flag:door_MA10_7_10",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "5,10": {
            "0": {
                "condition": "flag:door_MA10_5_10==4",
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
                        "name": "flag:door_MA10_5_10",
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
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2,1269,  2,1262,  2,1263, 87,1262,  2, 21,  2,1276,  2],
    [  2,1515,525,1262, 81,  0,  0,  0, 82,897, 82,836,  2],
    [  2,1269,  2,1262,  2,1261,  0, 21,  2,1264,  2,1276,  2],
    [  2,  2,  2,  2,  2,  2, 83,  2,  2,  2,  2,  2,  2],
    [  2,  2,  2,  2,  2,  2,  0,  2,  2,  2,  2,  2,  2],
    [  2,  2,  2,  2,  2,240,  0,238,  2,  2,  2,  2,  2],
    [  2,  2,  2,  2,  2,  0,  0,  0,  2,  2,  2,  2,  2],
    [  2,  2,  2,  2,  2,242,  0,247,  2,  2,  2,  2,  2],
    [  2,  2,  2,  2,  2,  2, 85,  2,  2,  2,  2,  2,  2],
    [  2,1269,1276,1283,1290, 85,  0, 85,1290,1283,1276,1269,  2],
    [  2, 21,1262,1263, 22,  2, 88,  2, 22,1263,1262, 21,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
],
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}