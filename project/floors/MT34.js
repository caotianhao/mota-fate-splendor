main.floors.MT34=
{
    "floorId": "MT34",
    "title": "主塔 34 层",
    "name": "主塔 34 层",
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
        "2,1": [
            {
                "type": "if",
                "condition": "(flag:Shop34===0)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:Shop34",
                        "value": "1"
                    },
                    "全局商店已开启，按V可开启快捷商店。"
                ],
                "false": []
            },
            {
                "type": "openShop",
                "id": "shop34",
                "open": true
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,1": {
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
    [  1,  7,131,  8,  1,1270,  1, 22,1277,  1,1367, 88,  1],
    [  1,1591,1366,1366, 82, 21,570,  0,  0,568,  0,  0,  1],
    [  1,  1,228,  1,  1,569,  1,  1, 81,  1,  1, 81,  1],
    [  1,1591,1367,  1,  1,568,  1,522,  0,  1,1368,  0,  1],
    [  1,  1, 81,  1,1277,1369,569,  0,1367,1258,  0,1270,  1],
    [  1,1270,1367,  1,  1, 81,  1, 82,  1,  1, 81,  1,  1],
    [  1,  1,228,  1,1291,  0,677, 21,1369,  1, 22,  1,  1],
    [  1,1277,1367, 81,  0,1270,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1,528,  1,700,  1,  1,  1,1270,  1,1284,1369,  1],
    [  1,  0,  0, 82,1270,568,1277,569,1366,570, 21, 43,  1],
    [  1, 87,1367,  1,1277,  1,1367,  1,1270,  1,1284,1369,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}