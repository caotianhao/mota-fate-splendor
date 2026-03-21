main.floors.MT40=
{
    "floorId": "MT40",
    "title": "主塔 40 层",
    "name": "主塔 40 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "images": [],
    "ratio": 2,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "firstArrive": [
        {
            "type": "vibrate",
            "direction": "horizontal",
            "time": 700,
            "speed": 10,
            "power": 10
        },
        "\t[勇士,hero]\b[down,null]......",
        "\t[妖精,fairy]\b[down,null]喂，发生什么事了？你的脸色怎么突然变得这么差？",
        "\t[勇士,hero]\b[down,null]前方房间里的那个小头目，我好像曾经在哪里见过她。",
        "\t[妖精,fairy]\b[down,null]哈啊？你在开什么玩笑？你这可是第一次来到这个区域啊。",
        "\t[勇士,hero]\b[down,null]我不知道，我只是感觉她特别眼熟。",
        "\t[勇士,hero]\b[down,null]（那股从精魂宝石中吸收的记忆流，似乎又开始躁动起来了。）"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,10": {
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
    [  1, 21,  1,1591,  1,  0, 88,  0,  1,1591,  1, 22,  1],
    [  1,1369,  1,1369, 82,1366,  0,1366, 82,1369,  1,1368,  1],
    [  1,1366,570,569,  1,  1,773,  1,  1,528,249,1367,  1],
    [  1,  1, 81,  1,  1,  1, 83,  1,  1,  1, 82,  1,  1],
    [  1,1270,1366,1270,  1,  0,251,  0,  1,1277,1367,1277,  1],
    [  1,  1,1366,  1,  1,  0,  0,  0,  1,  1,1367,  1,  1],
    [  1,  1,  1,  1,  1,  1, 85,  1,  1,  1,  1,  1,  1],
    [  1,1270,  1, 21, 21,  1,  0,  1, 22, 22,  1,1277,  1],
    [  1,1284,1291,1367,1367, 85,  0, 85,1366,1366,1291,1284,  1],
    [  1,  1,  1,  1,  1,  1, 87,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}