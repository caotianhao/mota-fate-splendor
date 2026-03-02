main.floors.MT13=
{
    "floorId": "MT13",
    "title": "主塔 13 层",
    "name": "主塔 13 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "firstArrive": [
        "\t[勇士,hero]对了，妖精。我发现每只黄金史莱姆都没有挡在干路上，有的甚至被其他魔物守卫着，这其中有什么机关吗？",
        "\t[妖精,fairy]没什么机关，别想太多。你翻翻怪物手册，看看这种魔物的某项反常属性就知道了。",
        "\t[勇士,hero]......这样啊。",
        {
            "type": "callBook"
        },
        "\t[妖精,fairy]以后的区域里会出现更多这种拥有\r[#aaaaaa]赐宝\r属性的奖励怪物，务必不要放过任何一只哦。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "5,6": {
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
    [  1,  0, 21,  1, 34, 27, 32,  1, 28, 28,  1, 34,  1],
    [  1, 30,  0,  1,  1, 81,  1,  1,  1, 82,  1, 27,  1],
    [  1,  1,277,213,  0,  0,214,  0,218,  0, 81,277,  1],
    [  1, 28,  0,  1,  1,277,  1, 22,  1,  0,  1,  1,  1],
    [  1, 34,  0,233,  1,  0,  0,  1,  1,  0,  0, 27,  1],
    [  1,  1, 81,  1,  1, 88,  0, 82, 34,213,  1,214,  1],
    [  1, 27, 29,233,  1,  1,  1,  1,  1,  0,  0, 34,  1],
    [  1,  1,214,  1,  1,  1, 30,  1,  1,277,  1, 29,  1],
    [  1,  1,  0,  1,  1,  1,  0, 81,  0,  0,  1,  1,  1],
    [  1,  1, 34,218, 30, 81,213,  1,  0,  1, 34,233,  1],
    [  1, 87,  0,  1, 21,  1, 34,214,  0, 82,215, 27,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}