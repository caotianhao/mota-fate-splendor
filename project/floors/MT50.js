main.floors.MT50=
{
    "floorId": "MT50",
    "title": "主塔 50 层",
    "name": "主塔 50 层",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "images": [],
    "ratio": 3,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        "\t[勇士,hero]\b[up,null]这里就是意识空间的尽头了。",
        "\t[勇士,hero]\b[up,null]前方等待着我与她的，将会是怎样的命运？"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,9": [
            {
                "type": "vibrate",
                "direction": "random",
                "time": 800,
                "speed": 8,
                "power": 8
            },
            {
                "type": "moveHero",
                "time": 1200,
                "steps": [
                    "up:1"
                ]
            },
            "\t[勇者虚影,N1632]\b[up,null]不错，很能干嘛，在经历了无数遍的轮回后，你终于首次突破到这里来了，名为zeno的勇士灵魂。",
            "\t[勇者虚影,N1632]\b[up,null]你还记得我是谁吗？",
            "\t[勇士,hero]\b[up,null]曾经击败我的那个勇者，你的脸，我这辈子都不会忘记。",
            "\t[勇者虚影,N1632]\b[up,null]看样子，在吸收完所有曾经被你杀死的魔物灵魂后，你已经恢复成之前的全部实力了。",
            "\t[勇士,hero]\b[up,null]是的，我恢复的东西里包括你拆散我跟她的记忆，以及你为了一己私情而毁灭魔塔的记忆，我全都回想起来了。",
            {
                "type": "sleep",
                "time": 500,
                "noSkip": true
            },
            {
                "type": "screenFlash",
                "color": [
                    255,
                    255,
                    255,
                    1
                ],
                "time": 500,
                "times": 1
            },
            {
                "type": "jumpHero",
                "dxy": [
                    0,
                    -1
                ],
                "time": 1
            },
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    6,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    6,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "jump",
                "from": [
                    6,
                    6
                ],
                "to": [
                    8,
                    5
                ],
                "time": 200,
                "keep": true,
                "async": true
            },
            {
                "type": "jumpHero",
                "dxy": [
                    2,
                    -1
                ],
                "time": 200,
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    8,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    8,
                    5
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    8,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    8,
                    5
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "screenFlash",
                "color": [
                    255,
                    255,
                    255,
                    1
                ],
                "time": 500,
                "times": 1,
                "async": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        5
                    ]
                ],
                "remove": true,
                "time": 1,
                "async": true
            },
            {
                "type": "setBlock",
                "number": "N1634",
                "loc": [
                    [
                        4,
                        8
                    ]
                ],
                "time": 1,
                "async": true
            },
            {
                "type": "jumpHero",
                "dxy": [
                    -3,
                    2
                ],
                "time": 1,
                "async": true
            },
            {
                "type": "changePos",
                "loc": [
                    5,
                    8
                ],
                "direction": "left"
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    4,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    5,
                    8
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    4,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    5,
                    8
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "screenFlash",
                "color": [
                    255,
                    255,
                    255,
                    1
                ],
                "time": 500,
                "times": 1,
                "async": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        8
                    ]
                ],
                "remove": true,
                "time": 1,
                "async": true
            },
            {
                "type": "setBlock",
                "number": "N1633",
                "loc": [
                    [
                        6,
                        5
                    ]
                ],
                "time": 1,
                "async": true
            },
            {
                "type": "jumpHero",
                "dxy": [
                    0,
                    -3
                ],
                "time": 1,
                "async": true
            },
            {
                "type": "changePos",
                "loc": [
                    5,
                    5
                ],
                "direction": "right"
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    5,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    6,
                    5
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    5,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    5
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    5,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    5
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "screenFlash",
                "color": [
                    255,
                    255,
                    255,
                    1
                ],
                "time": 500,
                "times": 1,
                "async": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        5
                    ]
                ],
                "remove": true,
                "time": 1,
                "async": true
            },
            {
                "type": "setBlock",
                "number": "N1635",
                "loc": [
                    [
                        7,
                        8
                    ]
                ],
                "time": 1,
                "async": true
            },
            {
                "type": "jumpHero",
                "dxy": [
                    2,
                    2
                ],
                "time": 1,
                "async": true
            },
            {
                "type": "changePos",
                "loc": [
                    7,
                    7
                ],
                "direction": "down"
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    7,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    7,
                    8
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    7,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    7,
                    8
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    7,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    7,
                    8
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "screenFlash",
                "color": [
                    255,
                    255,
                    255,
                    1
                ],
                "time": 500,
                "times": 1,
                "async": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        8
                    ]
                ],
                "remove": true,
                "time": 1,
                "async": true
            },
            {
                "type": "setBlock",
                "number": "N1632",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "time": 1,
                "async": true
            },
            {
                "type": "jumpHero",
                "dxy": [
                    -1,
                    0
                ],
                "time": 1,
                "async": true
            },
            {
                "type": "changePos",
                "loc": [
                    6,
                    7
                ],
                "direction": "up"
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    6
                ]
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  4,  4,  4,  4,10016,10017,10017,10017,10018,  4,  4,  4,  4],
    [  4,  4,  4,  4,10024,10025,10025,10025,10026,  4,  4,  4,  4],
    [  4,  4,  4,  4,10024,10025,10025,10025,10026,  4,  4,  4,  4],
    [  4,  4,  4,  4,10032,10033,10033,10033,10034,  4,  4,  4,  4],
    [  4,  4,  4,  1,  1,  1, 85,  1,  1,  1,  4,  4,  4],
    [  4,  4,  4,  1,  0,  0,  0,  0,  0,  1,  4,  4,  4],
    [  4,  4,  4,  1,  0,  0,1632,  0,  0,  1,  4,  4,  4],
    [  4,  4,  4,  1,  0,  0,  0,  0,  0,  1,  4,  4,  4],
    [  4,  4,  4,  1,  0,  0,  0,  0,  0,  1,  4,  4,  4],
    [  4,  4,  4,  1,  1,  1,  0,  1,  1,  1,  4,  4,  4],
    [  4,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  1, 88,  1,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotViewMap": true
}