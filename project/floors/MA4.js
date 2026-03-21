main.floors.MA4 =
{
    "floorId": "MA4",
    "title": "地下 4 层",
    "name": "地下 4 层",
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
    "events": {
        "10,8": [
            {
                "type": "if",
                "condition": "(flag:ShopN4===0)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:ShopN4",
                        "value": "1"
                    },
                    "全局商店已开启，按V可开启快捷商店。"
                ],
                "false": []
            },
            {
                "type": "openShop",
                "id": "shop-4",
                "open": true
            }
        ]
    },
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
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1276, 1263, 897, 21, 2, 87, 2, 1276, 2, 1262, 21, 2],
        [2, 1263, 1276, 2, 21, 254, 0, 81, 0, 82, 1262, 1262, 2],
        [2, 81, 2, 2, 219, 2, 2, 2, 345, 2, 1145, 2, 2],
        [2, 0, 0, 81, 0, 2, 1269, 2, 618, 2, 1145, 2, 2],
        [2, 2, 345, 2, 0, 1594, 666, 1594, 0, 279, 1263, 21, 2],
        [2, 1263, 618, 618, 0, 2, 1269, 2, 0, 2, 1269, 1276, 2],
        [2, 2, 2, 81, 2, 2, 2, 2, 81, 2, 2, 2, 2],
        [2, 1263, 256, 0, 22, 2, 1264, 2, 254, 7, 131, 8, 2],
        [2, 2, 2, 1262, 0, 219, 0, 2, 1263, 21, 1515, 21, 2],
        [2, 1262, 2, 254, 2, 2, 0, 82, 254, 2, 2, 2, 2],
        [2, 1269, 81, 0, 41, 2, 88, 2, 1262, 81, 1269, 1276, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ],
    "underGround": true,
    "bgmap": [

    ],
    "fgmap": [

    ]
}