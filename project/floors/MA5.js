main.floors.MA5 =
{
    "floorId": "MA5",
    "title": "地下 5 层",
    "name": "地下 5 层",
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
        "6,5": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
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
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1269, 1276, 2, 1269, 2, 1290, 2, 1276, 2, 1283, 1263, 2],
        [2, 82, 2, 2, 345, 81, 0, 256, 0, 618, 81, 2, 2],
        [2, 0, 1262, 2, 345, 2, 219, 2, 2, 618, 2, 1264, 2],
        [2, 22, 0, 772, 1264, 82, 0, 2, 1269, 0, 82, 1515, 2],
        [2, 81, 2, 2, 2, 2, 88, 2, 1276, 0, 2, 1269, 2],
        [2, 1262, 2, 1276, 2, 2, 2, 2, 2, 618, 2, 2, 2],
        [2, 1262, 345, 0, 81, 1264, 2, 22, 2, 618, 2, 1269, 2],
        [2, 2, 256, 2, 2, 21, 897, 0, 1145, 0, 525, 1264, 2],
        [2, 2, 256, 2, 1269, 2, 2, 81, 2, 81, 2, 82, 2],
        [2, 1262, 1262, 219, 1594, 81, 0, 0, 256, 1263, 1145, 1290, 2],
        [2, 21, 21, 2, 1269, 2, 87, 21, 2, 21, 2, 1262, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ],
    "underGround": true,
    "bgmap": [

    ],
    "fgmap": [

    ]
}