main.floors.MA6 =
{
    "floorId": "MA6",
    "title": "地下 6 层",
    "name": "地下 6 层",
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
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,5": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:door_MA6_10_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,8": [
            {
                "type": "setValue",
                "name": "flag:door_MA6_10_9",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,9": {
            "0": {
                "condition": "flag:door_MA6_10_9==2",
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
                        "name": "flag:door_MA6_10_9",
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
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1263, 81, 22, 2, 1262, 1262, 2, 21, 21, 2, 1269, 2],
        [2, 2, 2, 618, 279, 0, 0, 1594, 0, 0, 1617, 1262, 2],
        [2, 1276, 81, 0, 2, 2, 81, 2, 2, 618, 2, 2, 2],
        [2, 2, 2, 750, 2, 1290, 0, 2, 836, 0, 0, 1263, 2],
        [2, 256, 81, 1263, 81, 0, 87, 2, 1264, 2, 254, 2, 2],
        [2, 1276, 2, 1269, 2, 345, 2, 2, 2, 2, 254, 2, 2],
        [2, 2, 2, 2, 2, 379, 2, 1263, 81, 21, 1263, 21, 2],
        [2, 1269, 1262, 254, 0, 345, 0, 279, 2, 379, 22, 379, 2],
        [2, 2, 81, 2, 219, 2, 82, 2, 2, 2, 85, 2, 2],
        [2, 21, 0, 897, 0, 772, 1269, 1262, 2, 1262, 0, 1262, 2],
        [2, 88, 0, 2, 1276, 2, 22, 0, 2, 0, 42, 0, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ],
    "underGround": true,
    "bgmap": [

    ],
    "fgmap": [

    ]
}