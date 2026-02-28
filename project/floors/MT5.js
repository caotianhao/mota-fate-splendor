main.floors.MT5=
{
    "floorId": "MT5",
    "title": "主塔 5 层",
    "name": "5",
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
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT5_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT5_6_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,3": {
            "0": {
                "condition": "flag:door_MT5_6_3==2",
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
                        "name": "flag:door_MT5_6_3",
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
    [  1, 34, 34,  1,  1,  0, 23,  0,  1,  0, 34,  0,  1],
    [  1, 30, 30, 82, 82, 34,  0, 34,  1, 28,  0, 27,  1],
    [  1,  1,211,  1,  1,  1, 85,  1,  1,  1, 82,  1,  1],
    [  1, 29, 29, 29,  1,221,  0,221,  1, 21,211, 29,  1],
    [  1,  1,217,  1,  1,  1, 81,  1,  1,207,  1,  1,  1],
    [  1, 21,  0,217,  1,206,  0,206,210,  0, 81, 31,  1],
    [  1,207,  1,  0, 81,  0,  1,  0,  1,203,  1, 32,  1],
    [  1,  0, 81, 32,  1,206,  0,206, 81,  0, 21,  1,  1],
    [  1,212,  1,210,  1,  1,207,  1,  1,210,  1, 32,  1],
    [  1,  0, 82,  0,  0,211,  0,  0, 82,  0,210,  0,  1],
    [  1, 87,  1, 22, 21,  1, 29, 27,  1, 31,  1, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}