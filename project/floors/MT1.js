main.floors.MT1=
{
    "floorId": "MT1",
    "title": "主塔 1 层",
    "name": "主塔 1 层",
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
        "\t[妖精,fairy]\b[down,null]来，接着这个。",
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
        },
        "\t[勇士,hero]\b[down,null]......一个沉甸甸的布袋。",
        "\t[勇士,hero]\b[down,null]妖精，这里面都装了些什么东西？",
        "\t[妖精,fairy]\b[down,null]各式各样对你接下来的冒险有帮助的小玩意，在你陷入绝境之际毫不犹豫地拉开吧。",
        "\t[妖精,fairy]\b[down,null]顺带一提，每当你初次到达一个新的区域时，我都会给你一个这样的福袋，拆开的时候一定要对我心存感激哦。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,5": [
            "提示：拾取黄宝石可以增加生命上限。",
            "提示：拾取黄宝石可以增加生命上限。",
            "提示：拾取黄宝石可以增加生命上限。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,6": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {
        "9,5": [
            "\t[妖精,fairy]你在犹豫什么？再不动手的话，这个魔物就要抢先一步攻过来了。",
            "\t[勇士,hero]你有没有觉得，他的这个动作，像是在对我表示友好？",
            "\t[勇士,hero]而且，跟之前刚见到你的时候一样，我从这些魔物身上感受不到任何敌意。",
            "\t[妖精,fairy]怎么可能啊，现在的你不过只是个连防身剑盾都弄丢了的弱小人类罢了。",
            "\t[妖精,fairy]别瞎想那么多了，赶快动手解决掉它吧。"
        ]
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1, 34,  1,  1, 27, 30,  1, 31, 21,  1, 31,  1],
    [  1, 22,209,  0,207, 22, 31,  1, 28, 21,  1, 28,  1],
    [  1,  1,211,  1,  1, 81,  1,  1, 82,  1,  1, 27,  1],
    [  1, 31,  0,201,  0,  0,202,  0,  0,  1,  1, 81,  1],
    [  1,  1, 81,  1,201,  1,  1, 22,  0,201, 45, 21,  1],
    [  1, 32,  0,  1,  0,  1,  1, 81,  1,  1,  0, 88,  1],
    [  1, 22,  0,202,  0,205, 32,201,  0,  1,  1,  1,  1],
    [  1,  1,205,  1, 81,  1,  1,  1,201, 81, 21, 28,  1],
    [  1, 34,  0,  1, 27,  1,  0, 32,  0,  1,202,  1,  1],
    [  1,  1, 82,  1,  1,  1, 81,  1,210,  1, 21, 29,  1],
    [  1, 87,  0,201,202,201,  0, 28,  0, 82, 32, 21,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}