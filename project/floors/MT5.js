main.floors.MT5=
{
    "floorId": "MT5",
    "title": "主塔 5 层",
    "name": "主塔 5 层",
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
        "\t[妖精,fairy]喂勇士，放缓一下脚步。",
        "\t[勇士,hero]怎么了？",
        "\t[妖精,fairy]你有没有察觉到，这几层的魔物开始变得越来越强大了，由它们布下的防线也更加难以突破。",
        "\t[勇士,hero]没错，我在先前的几场战斗中已经明显感觉到吃力了。",
        "\t[妖精,fairy]原因就是那把红钥匙，誓死守卫红钥匙是每一个魔物与生俱来的本能。",
        "\t[勇士,hero]红钥匙跟其他颜色的钥匙比起来，有什么区别吗？",
        "\t[妖精,fairy]每个区域通常都有且只有一把红钥匙，通常都被区域里最强的怪物镇守着，每把红钥匙都是征服这座魔塔的关键。",
        "\t[妖精,fairy]以你现在的实力，强行入手这个区域的红钥匙会大伤筋骨，记住这把红钥匙的位置，等变强以后，务必要回来拿走。",
        "\t[勇士,hero]嗯，我知道了。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT5_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT5_6_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,3": {
            "0": {
                "condition": "flag:door_MT5_6_3==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT5_6_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 34, 34,  1,  1,  0, 23,  0,  1,  0, 34,  0,  1],
    [  1, 30, 30, 82, 82, 34,  0, 34,  1, 28,  0, 27,  1],
    [  1,  1,211,  1,  1,  1, 85,  1,  1,  1, 82,  1,  1],
    [  1, 29, 29, 29,  1,221,  0,221,  1, 21,211, 29,  1],
    [  1,  1,217,  1,  1,  1, 81,  1,  1,207,  1,  1,  1],
    [  1, 21,  0,217,  1,206,  0,206,210,  0, 81, 31,  1],
    [  1,207,  1,  0, 81,  0,  1,  0,  1,203,  1, 32,  1],
    [  1,  0, 81, 32,  1,206,  0,206, 81,  0, 21,  1,  1],
    [  1,212,  1,210,  1,  1,207,  1,  1,210,  1, 32,  1],
    [  1,  0, 82,  0,  0,211,  0,  0, 82,  0,210,  0,  1],
    [  1, 87,  1, 22, 21,  1, 29, 27,  1, 31,  1, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}