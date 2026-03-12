main.floors.MT24=
{
    "floorId": "MT24",
    "title": "主塔 24 层",
    "name": "主塔 24 层",
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
    "events": {
        "6,9": [
            {
                "type": "if",
                "condition": "(flag:Shop24===0)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:Shop24",
                        "value": "1"
                    },
                    "全局商店已开启，按V可开启快捷商店。"
                ],
                "false": []
            },
            {
                "type": "openShop",
                "id": "shop24",
                "open": true
            }
        ]
    },
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
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
    [  1,1269,1262,  1, 22,  1,1283,1269,  1, 21,  1,1283,  1],
    [  1,  1,253,  1,  0,388,  0,  0, 81, 21,  1,1263,  1],
    [  1,1269,1262, 82,  0,  1,225,  1,  1,227,  0,226,  1],
    [  1,  1,  1,  1,226, 81,226,  1,  1,  1,232,  1,  1],
    [  1, 21,232,  0,  0,  1, 21,227,  0, 82,  0,1263,  1],
    [  1,1263,  1, 81,  1,  1,1263,  1,1276,  1,  0,1276,  1],
    [  1,  1,  1,253,1283,  1,1263,  1,1264,  1,226,  1,  1],
    [  1,1263,232,  0,  1,  1,  1,  1,  1,  1,232,  1,  1],
    [  1, 81,  1, 39,  1,  7,131,  8,  1,  0,226, 22,  1],
    [  1,  0,  0,  1,  1, 21,  0,1263, 81,  0,  1,  1,  1],
    [  1, 87,  0,1269,236,  0, 22,  0,  1,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}