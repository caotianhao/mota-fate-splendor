main.floors.MA8 =
{
    "floorId": "MA8",
    "title": "地下 8 层",
    "name": "地下 8 层",
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
        "8,11": [
            {
                "type": "setValue",
                "name": "flag:door_MA8_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,11": [
            {
                "type": "setValue",
                "name": "flag:door_MA8_6_5",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,5": {
            "0": {
                "condition": "flag:door_MA8_6_5==2",
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
                        "name": "flag:door_MA8_6_5",
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
        [2, 1263, 0, 81, 1515, 2, 87, 0, 0, 750, 0, 1263, 2],
        [2, 0, 219, 2, 2, 2, 82, 2, 81, 2, 219, 0, 2],
        [2, 1594, 2, 2, 1264, 2, 1269, 2, 81, 2, 2, 81, 2],
        [2, 1262, 2, 22, 21, 836, 0, 219, 1263, 1263, 2, 750, 2],
        [2, 379, 82, 379, 2, 2, 85, 2, 81, 2, 2, 897, 2],
        [2, 0, 2, 0, 0, 2, 23, 2, 1283, 1264, 2, 1269, 2],
        [2, 750, 2, 2, 897, 2, 2, 2, 836, 2, 2, 1269, 2],
        [2, 1276, 2, 1269, 1276, 82, 0, 81, 1276, 219, 750, 21, 2],
        [2, 750, 2, 2, 1269, 2, 772, 2, 1276, 2, 2, 81, 2],
        [2, 0, 219, 2, 2, 2, 0, 2, 2, 2, 219, 0, 2],
        [2, 1263, 0, 82, 525, 2, 88, 2, 525, 82, 0, 1263, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ],
    "underGround": true,
    "bgmap": [

    ],
    "fgmap": [

    ]
}