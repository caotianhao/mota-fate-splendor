main.floors.MT22 =
{
    "floorId": "MT22",
    "title": "主塔 22 层",
    "name": "主塔 22 层",
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
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 248, 223, 1, 1269, 1, 88, 1, 1263, 1, 1276, 1262, 1],
        [1, 1, 0, 82, 1263, 81, 0, 253, 0, 1, 1262, 1276, 1],
        [1, 1269, 1263, 1, 226, 1, 22, 1, 22, 81, 226, 1, 1],
        [1, 1, 232, 1, 226, 1, 227, 1, 227, 1, 225, 1, 1],
        [1, 21, 0, 81, 0, 81, 0, 253, 0, 82, 0, 1263, 1],
        [1, 0, 1262, 1, 226, 1, 1264, 1, 1283, 1, 1263, 0, 1],
        [1, 253, 1, 1, 226, 1, 1, 1, 81, 1, 1, 1, 1],
        [1, 0, 81, 0, 0, 226, 0, 253, 0, 253, 1262, 22, 1],
        [1, 388, 1, 232, 1, 1, 1, 1, 232, 1, 1, 227, 1],
        [1, 0, 82, 1283, 1, 1264, 1, 1, 0, 82, 1261, 1269, 1],
        [1, 87, 1, 1269, 81, 1262, 253, 226, 1276, 1, 1269, 1261, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    "bgmap": [

    ],
    "fgmap": [

    ]
}