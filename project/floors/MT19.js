main.floors.MT19=
{
    "floorId": "MT19",
    "title": "主塔 19 层",
    "name": "主塔 19 层",
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
        "3,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT19_6_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT19_6_9",
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
                "condition": "flag:door_MT19_6_9==2",
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
                        "name": "flag:door_MT19_6_9",
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
    [  1, 27,  1, 28,  1,  1, 88,  0,  1, 33,  1,233,  1],
    [  1, 27,215,  0,216,218,  0,  0,218, 21,216, 28,  1],
    [  1,  1,  1, 81,  1,  1,121,  1,  1, 81,  1, 82,  1],
    [  1,233, 22, 21,215,218,  0,255, 27,214,  0,  0,  1],
    [  1,  1,  1, 82,  1,  1, 81,  1,  1,  1,215,  1,  1],
    [  1,  0,255,  0,255,218,  0, 30,  1, 33, 34,  1,  1],
    [  1,222,  1,  1,  1,  1, 81,  1,  1,  1, 82,  1,  1],
    [  1, 21, 81, 33,  1,222, 34,222,  1, 28, 28, 29,  1],
    [  1,255,  1,  1,  1,  1, 85,  1,  1,  1,  1,255,  1],
    [  1,  0, 28,  1,  1, 22,  0, 21,  1,233,  1,255,  1],
    [  1, 27,  0, 87,  1,  0, 23,  0, 82, 27, 82,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}