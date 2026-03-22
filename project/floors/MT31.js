main.floors.MT31=
{
    "floorId": "MT31",
    "title": "主塔 31 层",
    "name": "主塔 31 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "images": [],
    "ratio": 3,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "firstArrive": [
        {
            "type": "switch",
            "condition": "flag:hard",
            "caseList": [
                {
                    "case": "1",
                    "action": [
                        {
                            "type": "setValue",
                            "name": "item:I1574",
                            "operator": "+=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "case": "2",
                    "action": [
                        {
                            "type": "setValue",
                            "name": "item:I1575",
                            "operator": "+=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "case": "3",
                    "action": [
                        {
                            "type": "setValue",
                            "name": "item:I1576",
                            "operator": "+=",
                            "value": "1"
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,0": {
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
    [  1,  1,  1,  1,  1,  1, 88,  1,  1,  1,  1,  1,  1],
    [  1,1270,  1,1270,  1,1367,1291,1367,1258,1270,  1,1591,  1],
    [  1, 21,773,1367, 82,1258,  1, 81,  1,1366, 81,1367,  1],
    [  1,1277,  1,568,  1,  1,  1,1258,  1,677,  1,568,  1],
    [  1,  1,  1, 81,  1,1515,  1,1277,  1,  0, 82,1277,  1],
    [  1,1369,522,  0,  1,528,  1,1258, 82,  0,  1,1369,  1],
    [  1,  1,  1,  0,  1,249, 82, 21,  1,1258,  1,  1,  1],
    [  1,  1,  1,677, 81,228,  1,  1,  1,1258,  1,  1,  1],
    [  1,1284,1277,1270,  1,1368,  1,  0, 21,  0,569,1270,  1],
    [  1,  1, 81,  1,  1,  1,  1,677,  1,  1,570,  1,  1],
    [  1, 21,1367,  1,  0, 81,  0,  0,  1,1366, 22,1366,  1],
    [  1,1367, 22, 82,1368,  1, 87,1369,  1,1366, 21,1366,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}