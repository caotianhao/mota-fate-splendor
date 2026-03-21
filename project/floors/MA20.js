main.floors.MA20=
{
    "floorId": "MA20",
    "title": "地下 20 层",
    "name": "地下 20 层",
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
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_MA20_5_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA20_7_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        6
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        6
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        6
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        7
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        7
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        8
                    ]
                ],
                "remove": true
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "5,3": {
            "0": {
                "condition": "flag:door_MA20_5_3==1",
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
                        "name": "flag:door_MA20_5_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "7,3": {
            "0": {
                "condition": "flag:door_MA20_7_3==1",
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
                        "name": "flag:door_MA20_7_3",
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
    [  5,  5,  5,  5,  5,  2,  2,  2,  5,  5,  5,  5,  5],
    [  5,  2,  2,  2,  2,  2, 87,  2,  2,  2,  2,  2,  5],
    [  5,  2,1270, 21,1367,  2,  0,  2,1367, 21,1270,  2,  5],
    [  5,  2, 22,1277, 21, 85,  0, 85, 21,1277, 22,  2,  5],
    [  5,  2,1367, 21,1284,  2,  0,  2,1284, 21,1367,  2,  5],
    [  5,  2,  2,  2,  2,  2, 83,  2,  2,  2,  2,  2,  5],
    [  5,  2,  0,1627,1626,1625,  0,  2,  2,  5,  5,  5,  5],
    [  5,  2,  0,1624,1623,1619,  0,  2,  2,  5,  5,  5,  5],
    [  5,  2,  0,1622,1621,1620,  0,  2,  2,  5,  5,  5,  5],
    [  5,  2,  2,  2,  2,  2,  2,  2,  2,  5,  5,  5,  5],
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5],
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5],
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5]
],
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}