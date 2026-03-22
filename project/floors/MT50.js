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
                "type": "setBlockOpacity",
                "loc": [
                    [
                        8,
                        5
                    ]
                ],
                "opacity": 0.85,
                "time": 1
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
                "type": "setBlockOpacity",
                "loc": [
                    [
                        4,
                        8
                    ]
                ],
                "opacity": 0.7,
                "time": 1
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
                "type": "setBlockOpacity",
                "loc": [
                    [
                        6,
                        5
                    ]
                ],
                "opacity": 0.55,
                "time": 1
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
                "type": "setBlockOpacity",
                "loc": [
                    [
                        7,
                        8
                    ]
                ],
                "opacity": 0.45,
                "time": 1
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
                "type": "setBlockOpacity",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "opacity": 0.35,
                "time": 1
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
            },
            "\t[勇士,hero]\b[up,null]（虽然我在刚才几波交手中受了重创，可他的身体也因此逐渐透明化了，这说明，这个意识体正在消散。）",
            "\t[勇士,hero]\b[up,null]（这一次，我或许能赢他......不！这一次，我一定要赢他！）",
            "\t[勇者虚影,N1632]\b[up,null]我曾说过，我们命中注定难逃一战。",
            "\t[勇者虚影,N1632]\b[up,null]最强的勇士对战最强的魔王，这是世人们最为期待看到的史诗级决斗。",
            "\t[勇者虚影,N1632]\b[up,null]但现在的你，此时此刻的你，仍然是那个弱小的黑铁级勇士zeno，这让我非常失望。",
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    6,
                    6
                ],
                "async": true
            },
            {
                "type": "setBlock",
                "number": "N1577",
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
                "type": "waitAsync"
            },
            {
                "type": "setBlockOpacity",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "opacity": 1,
                "time": 1
            },
            "\t[贤者,N1577]\b[up,null]zeno，你又一次让我失望了，虽然你的确是到达了顶层，但你没能完全吸收掉那些曾经被你杀死的魔物灵魂。",
            "\t[贤者,N1577]\b[up,null]也就是说，现在的你是zeno而不是魔王，不完整的你，没有任何利用价值。",
            "\t[勇士,hero]\b[up,null]......我早该意识到的，每个区域的守关boss都是我在人生转折点上击败并吸收灵魂能量的强敌。",
            "\t[勇士,hero]\b[up,null]可是我当年并没有战胜那个勇者，更不用说吸收他战败的灵魂能量。也就是说......他的意识体，是不可能出现在这个空间里的。",
            "\t[勇士,hero]\b[up,null]贤者，我怎么也没能想到，我竟然会以这种方式跟你再次相见。",
            "\t[勇士,hero]\b[up,null]告诉我，你伪装成守关头目在顶层等待我的到来，这样做的目的是什么？",
            "\t[贤者,N1577]\b[up,null]你还记得我的稀有勇者体质专属能力吗？",
            "\t[勇士,hero]\b[up,null]吸收败在你手中之人的全部灵魂能量并继承他们的所有特殊能力......难道说，你盯上我了？",
            "\t[贤者,N1577]\b[up,null]没错，可惜一个不知名的小勇者抢在我之前取走了你的性命，我的计划只能作罢。",
            "\t[贤者,N1577]\b[up,null]不过，幸亏我的一个擅长操控意识体的手下无意间发现了这个由你与公主的执念形成的意识空间。",
            "\t[勇士,hero]\b[up,null]你想诱导我杀光这个意识空间里所有曾经被我打败过的魔物，恢复成全盛时期的魔王形态。",
            "\t[勇士,hero]\b[up,null]然后在顶层等着我这坨肥肉把自己送到你嘴里，对吧？",
            "\t[贤者,N1577]\b[up,null]悟性不错，真不愧是你，我永远的对手，我的骄傲，我的眼中钉，zeno。",
            "\t[勇士,hero]\b[up,null]但你漏算了一点，地上第四区域的头目痛苦魔女是被你的手下妖精给杀死的，那一部分的灵魂能量并没有被我吸收。",
            "\t[勇士,hero]\b[up,null]所以现在的我也并没有变回魔王，你自然也无法通过击杀我来继承我身为魔王的能力，你失策了，贤者。",
            "\t[贤者,N1577]\b[up,null]我说过，不完整的你，没有任何利用价值。",
            "\t[贤者,N1577]\b[up,null]所以我将会在这里亲手杀掉你，让你重新进入无尽的轮回。",
            "\t[贤者,N1577]\b[up,null]那个时候，精神魔女......也就是你在这个意识空间里见到的妖精，也会重新与这个意识空间建立连接，再次引导你来到我面前。",
            "\t[贤者,N1577]\b[up,null]你将会无数次重复这个过程，直到你变回真正的魔王......然后被我杀死。",
            "\t[勇士,hero]\b[up,null]......",
            "\t[贤者,N1577]\b[up,null]知道跟我作对的下场了吧？zeno？",
            "\t[勇士,hero]\b[up,null]（无力感，深深的无力感让我后脊生凉。）",
            "\t[勇士,hero]\b[up,null]（公主的执念是让我陷入无限循环的直接原因，消除公主的执念......也是我变回魔王的必要条件之一。）",
            "\t[勇士,hero]\b[up,null]（就是说，如果我不断重复这个过程的话，我迟早会亲手杀掉她......）",
            "\t[勇士,hero]\b[up,null]（没有任何办法，这是一个从一开始就注定失败的死局。）",
            "\t[勇士,hero]\b[up,null]（到头来，我仍然是那颗把握不了自己的宿命，只能任凭他人随意摆弄的棋子。）",
            {
                "type": "sleep",
                "time": 500,
                "noSkip": true
            },
            "\t[贤者,N1577]\b[up,null]嗯？琴声？居然还有点好听。",
            "\t[勇士,hero]\b[up,null]......",
            "\t[勇士,hero]\b[up,null]是你吗？",
            "\t[勇士,hero]\b[up,null]公主。",
            {
                "type": "hideStatusBar"
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 500,
                "keep": true
            },
            "恍然中，我顺着琴音的旋律回顾了自己的一生。",
            "曾经满腔热血的我。",
            "不畏强权的我。",
            "坚毅不屈的我。",
            "顽固颓唐的我。",
            "茫然无知的我。",
            "自暴自弃的我。",
            "我一生都在与自己的宿命作斗争，也一直为自己的存在感到迷茫。",
            "我不知道原本的自己，究竟是曾经那个黑铁级勇士，还是现在这个举世无双的魔王。",
            "直到我遇见了你。",
            "你的存在，让我如此强烈地感受到了自己的存在。",
            "我不是属于任何人的棋子，我就是我。",
            {
                "type": "setHeroIcon",
                "name": "king.png"
            },
            {
                "type": "setValue",
                "name": "status:atk",
                "operator": "+=",
                "value": "1000"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "operator": "+=",
                "value": "1000"
            },
            {
                "type": "sleep",
                "time": 500,
                "noSkip": true
            },
            "我是zeno，魔王zeno。",
            {
                "type": "setCurtain",
                "time": 500
            },
            {
                "type": "showStatusBar"
            },
            "\t[贤者,N1577]\b[up,null]什么？......为什么？你明明没有吸收这个空间里的所有灵魂能量，也没有杀掉公主......",
            "\t[魔王,redKing]\b[up,null]愣着干什么？还不赶紧动手。",
            "\t[贤者,N1577]\b[up,null]可恶......为什么你的气息比全盛时期还要强......不管了，我可是最强勇者，我才不会输！",
            {
                "type": "sleep",
                "time": 500,
                "noSkip": true
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
                "type": "sleep",
                "time": 500,
                "noSkip": true
            },
            "\t[贤者,N1577]\b[up,null]怎么可能......我竟然会输给你......",
            "\t[贤者,N1577]\b[up,null]不过......别高兴的太早......你战胜的不过是我的一小部分意识体，现实中的我将会立即对王国通报公主跟魔王勾结的罪行。",
            "\t[贤者,N1577]\b[up,null]整个世界都将会与你们二人为敌......我是不会让你们好过的......嘿嘿嘿。",
            "\t[贤者,N1577]\b[up,null]我要让你知道......所有不肯顺从我的人，都没有好下场！",
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
                    6
                ],
                "async": true
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
                "type": "hide",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "remove": true,
                "async": true
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
                "type": "waitAsync"
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    4
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,3": [
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        1
                    ]
                ],
                "remove": true
            },
            {
                "type": "setBlock",
                "number": "N1630",
                "loc": [
                    [
                        6,
                        1
                    ]
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        1
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        2
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        2
                    ]
                ],
                "remove": true
            },
            "\t[魔王,redKing]\b[down,null]我来了。",
            {
                "type": "setBlock",
                "number": "princess",
                "loc": [
                    [
                        6,
                        1
                    ]
                ]
            },
            "\t[公主,princess]\b[down,null]你怎么老是这样？对我的事情就这么不上心吗？",
            "\t[公主,princess]\b[down,null]你是知道的吧？我啊，最讨厌不守时的男人了。",
            "\t[魔王,redKing]\b[down,null]怎么说呢，这一路上我有很多麻烦事要处理，让你一个人待在黑漆漆的塔顶，真是抱歉。",
            "\t[公主,princess]\b[down,null]嘛......算了算了，不跟你计较这些了。",
            "\t[公主,princess]\b[down,null]重新回到现实以后，我的呆子魔王，你可要好好的补偿我哦。",
            "\t[魔王,redKing]\b[down,null]嗯。",
            "\t[公主,princess]\b[down,null]你要每时每刻陪在我身边，眼里不许有我以外的人。",
            "\t[魔王,redKing]\b[down,null]嗯。",
            "\t[公主,princess]\b[down,null]就算再忙碌，也不能把我晾在一边爱理不理，我不开心的时候要好好哄我。",
            "\t[魔王,redKing]\b[down,null]嗯。",
            "\t[公主,princess]\b[down,null]最后，我要你......跟我永远在一起。（闭眼）",
            "\t[魔王,redKing]\b[down,null]嗯。",
            "\t[公主,princess]\b[down,null]我不是跟你说过了吗？女孩子朝你闭眼的意思就是让你吻她！你这个木头！木头！"
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
    [  4,  4,  4,  4,10032,10033,  0,10033,10034,  4,  4,  4,  4],
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