main.floors.MA14=
{
    "floorId": "MA14",
    "title": "地下 14 层",
    "name": "地下 14 层",
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
    "events": {
        "10,1": [
            {
                "type": "if",
                "condition": "(flag:ShopN14===0)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:ShopN14",
                        "value": "1"
                    },
                    "全局商店已开启，按V可开启快捷商店。"
                ],
                "false": []
            },
            {
                "type": "openShop",
                "id": "shop-14",
                "open": true
            }
        ]
    },
    "changeFloor": {
        "6,8": {
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
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2,1270,1367,1270,  2,1291, 87,  2,  2,  7,131,  8,  2],
    [  2,  2, 81,  2,  2,  0,1367,  0, 82,1367, 21,1589,  2],
    [  2,536, 21,536, 81,  0,  2,987,  2,  2, 81,  2,  2],
    [  2,  2,987,  2,  2,987,  2,836,  2,  2,960,  2,  2],
    [  2,1590,1277,  2,1369,  0,  2, 21, 22, 81,1270,1270,  2],
    [  2,  2,404, 82,  0,1284,  2,1367,1367,  2,412,  2,  2],
    [  2, 21,  0,  2,987,  2,  2,  2,  2,  2,  0, 22,  2],
    [  2, 21,  0,220,1367,  2, 88,  2,1369, 81,  0,1270,  2],
    [  2,  2, 82,  2, 21, 82,  0,  2,  2,  2, 82,  2,  2],
    [  2,1270,1284,  2,  2,  2,1609,  2,1367,423,1367,  2,  2],
    [  2,1367, 21,  2,1590,987,1367, 81,536,  2,404,1354,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
],
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}