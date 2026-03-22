main.floors.MT49=
{
    "floorId": "MT49",
    "title": "主塔 49 层",
    "name": "主塔 49 层",
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
    "events": {
        "6,11": [
            {
                "type": "choices",
                "text": "再往前踏一步就无法回头了",
                "choices": [
                    {
                        "text": "前进",
                        "action": [
                            {
                                "type": "changeFloor",
                                "floorId": "MT50",
                                "loc": [
                                    6,
                                    11
                                ],
                                "direction": "up"
                            }
                        ]
                    },
                    {
                        "text": "让我再准备一下",
                        "action": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "11,11": {
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,1367,  1,1270,1277,  1, 22, 21,  1,1277,1270,  1],
    [  1,1367,  0,606,  0,  0,243,  0,  0, 81,  0,  0,  1],
    [  1,  1, 82,  1,  1, 81,  1,606,  1,  1,  1,606,  1],
    [  1,  1,513,  1,1277,  0,  1,  0,1368,  1,  1,606,  1],
    [  1,1592,  0,  1,1284,  0,  1,  0, 21,  1,243,  0,  1],
    [  1,  1, 81,  1,  1,606,  1, 82,  1,  1,  1, 81,  1],
    [  1,  1,513,  1,  1,  0,606,  0,  0, 82,243,  0,  1],
    [  1,  1, 82,1592,  1,1369,  1,  1,606,  1,  1, 81,  1],
    [  1,  1,1631,  1,  1,  1,  1,  1, 81,  1,243,  0,  1],
    [  1,  1,  0,  0, 83,1631,  0,  1,1369,  1,  1,  0,  1],
    [  1,  1,1277,1270,  1,1368, 87,  1,1367,  1,  1, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}