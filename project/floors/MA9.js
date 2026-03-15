main.floors.MA9=
{
    "floorId": "MA9",
    "title": "地下 9 层",
    "name": "地下 9 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 2,
    "defaultGround": "ground",
    "firstArrive": [
        "\t[勇士,hero]\b[down,null]？！",
        {
            "type": "playSound",
            "name": "MaleScream.mp3",
            "sync": true
        },
        "\t[勇士,hero]\b[down,null]这个惨叫声......是杰克吗？",
        {
            "type": "playSound",
            "name": "GirlLaugh.ogg",
            "sync": true
        },
        "\t[小女孩的声音]\b[down,null]嘻嘻，你以为我不知道你在打什么小算盘吗？",
        "\t[小女孩的声音]\b[down,null]在这座魔塔里，我虽然称不上全知全能，但窥探你这个低等意识体的精神世界还不是轻轻松松？",
        "\t[小女孩的声音]\b[down,null]利用他帮你找回镐头，好让你自己破开零层的墙壁逃出魔塔，哼哼，想的倒是挺美嘛。",
        {
            "type": "playSound",
            "name": "MaleScream.mp3",
            "sync": true
        },
        "\t[小女孩的声音]\b[down,null]不错的眼神，嘻嘻......放心吧，为了让这个计划继续进行下去，我是不会杀你的。",
        {
            "type": "playSound",
            "name": "GirlLaugh.ogg",
            "sync": true
        },
        "\t[小女孩的声音]\b[down,null]但是啊，让你生不如死的点子，我脑子里可是存着一大堆呢。",
        {
            "type": "playSound",
            "name": "MaleScream.mp3",
            "sync": true
        },
        "\t[勇士,hero]\b[down,null]杰克现在的处境一定很不妙。必须得快点攻进那里才行......"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,1": {
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
    [10016,10017,10017,10017,10017,10018,  2,  2,  2,  2,  2,  2,  2],
    [10024,10025,10025,10025,10025,10026, 88,  2,1276,  2,1262,1262,  2],
    [10024,10025,10025,10025,10025,10026,  0, 82,  0,897,1269,1283,  2],
    [10024,10025,10025,10025,10025,10026,525,  2,772,  2,  2, 81,  2],
    [10032,10033, 82,10033,10033,10034,1269, 81,  0,  2,1283,1262,  2],
    [  2,1262,  0, 81,  0,  2,1264,  2,  0,219, 21,1262,  2],
    [  2,  2,897,  2,  2,  2,  2, 22,525,  2, 82,  2,  2],
    [  2,1269,  0, 81,1290,897,1269,  2,  0,  0,836,1269,  2],
    [  2,1276,  0,  2,1515,  2, 21,1264,  2, 81,  2,  2,  2],
    [  2,  2,836,  2,  2,  2, 82,  2,  2,219,  2,1263,  2],
    [  2, 21,897,1263, 82,  0,  0,  0,219,  0, 81,1262,  2],
    [  2,1276,  2,1269,  2,1290, 87,1264,  2,1269,  2,1263,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
],
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}