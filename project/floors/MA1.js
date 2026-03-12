main.floors.MA1=
{
    "floorId": "MA1",
    "title": "地下 1 层",
    "name": "地下 1 层",
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
        "1,6": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "2,7": [
            "\t[勇士,hero]（是妖精的福袋，跟杰克留下的铁门钥匙一样，这是她故意留下来指引我前进的线索吗？）"
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2, 21, 21,  2,  0,  2, 22,  0,  2, 21,  2,  0,  2],
    [  2,  0,  0, 82,  0, 81,  0,  0, 81, 22, 82,  0,  2],
    [  2,  2,  0,  2,  0,  2,  0,  2,  2,  0,  2,1515,  2],
    [  2,  0,  0,  0,  0, 81,  0,  0,  2,  0,  2,  2,  2],
    [  2,  2, 81,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2],
    [  2, 87,  0,  0,  0,  0,  0,  0,  2,  0,  2,  2,  2],
    [  2,  0,  0,  2,  0,  2,  2, 81,  2,  0,  2,  0,  2],
    [  2,  2,  2,  2,  0,  2,  0,  0,  0,  0, 81, 22,  2],
    [  2,  0,  0,  2, 81,  2,  2,  0,  2,  0,  2,  0,  2],
    [  2,  2,  0,  0, 22,  0, 82, 21,  2,  0,  2,  2,  2],
    [  2,  0,  0,  2,  0,  0,  2,  0,  0,  0,  0, 88,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
],
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}