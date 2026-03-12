main.floors.MT29=
{
    "floorId": "MT29",
    "title": "主塔 29 层",
    "name": "主塔 29 层",
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
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT29_10_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT29_10_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,3": {
            "0": {
                "condition": "flag:door_MT29_10_3==2",
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
                        "name": "flag:door_MT29_10_3",
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
    [  1,  0,1263,  1, 22,  1, 88,  1,  1,  0, 23,  0,  1],
    [  1,1263,  0, 82,  0, 81,  0,  1,  1,  0,  0,  0,  1],
    [  1,  1,223,  1,227,  1,225,  1,  1,  1, 85,  1,  1],
    [  1,1283,  0,388,  0,  1,  0, 81,1263,223,  0,223,  1],
    [  1,  1,  1,  1, 81,  1,224,  1,  1,  1,225,  1,  1],
    [  1, 21, 21,236,  0,388,  0,  1,1264,  1,224,  1,  1],
    [  1,1269,1269,  1, 81,  1,  0,225,  0, 81,1262,1269,  1],
    [  1, 82,  1,  1,225,  1,223,  1,  0,  1,232,  1,  1],
    [  1,  0,225,  0,  0,  1,  0,  1,  0,225,  0,1276,  1],
    [  1,224,  1, 82,  1,  1,  0,  1,236,  1, 82,  1,  1],
    [  1,223,224,225,248,  1, 87,  1,1263,236,  0,248,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}