main.floors.EXA9=
{
    "floorId": "EXA9",
    "title": "暗房",
    "name": "暗房",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10000",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,4": [
            "\t[勇士,hero]\b[down,null]上面有一扇尺寸比较大的木窗。",
            "\t[勇士,hero]\b[down,null]不过距离地面实在太高了。",
            "\t[勇士,hero]\b[down,null]暗房的出入口似乎只有剩下这扇奇怪的木窗了，可是这种高度......好像不是普通人可以办到的。",
            "\t[杰克,thief]\b[down,null]把那张桌子搬来这里，要是再不够的话，我们就搭人梯吧？",
            "\t[勇士,hero]\b[down,null]行，现在似乎也只能这样做了。",
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
            {
                "type": "sleep",
                "time": 500,
                "noSkip": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        7
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        9
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        2,
                        7
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        2,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        2,
                        9
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        7
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        9
                    ]
                ],
                "remove": true
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "X10136",
                "loc": [
                    [
                        8,
                        5
                    ]
                ]
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "X10137",
                "loc": [
                    [
                        9,
                        5
                    ]
                ]
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "X10138",
                "loc": [
                    [
                        10,
                        5
                    ]
                ]
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "X10144",
                "loc": [
                    [
                        8,
                        6
                    ]
                ]
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "X10145",
                "loc": [
                    [
                        9,
                        6
                    ]
                ]
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "X10146",
                "loc": [
                    [
                        10,
                        6
                    ]
                ]
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "X10152",
                "loc": [
                    [
                        8,
                        7
                    ]
                ]
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "X10153",
                "loc": [
                    [
                        9,
                        7
                    ]
                ]
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "X10154",
                "loc": [
                    [
                        10,
                        7
                    ]
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        9
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        3
                    ]
                ],
                "remove": true
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "X10071",
                "loc": [
                    [
                        10,
                        3
                    ]
                ]
            },
            {
                "type": "unfollow",
                "name": "yaojing.png"
            },
            {
                "type": "setBlock",
                "number": "fairy",
                "loc": [
                    [
                        10,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "thief",
                "loc": [
                    [
                        10,
                        5
                    ]
                ]
            },
            {
                "type": "moveHero",
                "steps": [
                    "up:1"
                ]
            },
            {
                "type": "sleep",
                "time": 500,
                "noSkip": true
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            "\t[妖精,fairy]\b[down,null]窗户后面是一条黑漆漆的小通道！",
            "\t[妖精,fairy]\b[down,null]你们站稳了，我先进去看看情况，这样吧......我在里面敲出三长一短的暗号时就表明我处境安全。",
            "\t[勇士,hero]\b[down,null]一定要当心啊。",
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        3
                    ]
                ],
                "remove": true
            },
            "\t[勇士,hero]\b[down,null]（妖精小小的身体逐渐被黑暗吞没，充斥着血腥味的暗房里只剩下了我跟杰克。）",
            "\t[勇士,hero]\b[down,null]杰克，你是不是有什么话想对我说？",
            "\t[杰克,thief]\b[down,null]何出此言？",
            "\t[勇士,hero]\b[down,null]你从始至终都是一副欲言又止的样子，在我跟你谈话的时候眼神总是警觉地瞥向妖精那边......你很怕她吗？",
            "\t[杰克,thief]\b[down,null]抱歉，我无法跟你谈论与她有关的事情。",
            "\t[勇士,hero]\b[down,null]我直问了，折断你的左手，弄伤你右手的人是不是妖精？",
            "\t[勇士,hero]\b[down,null]我感觉他被我踩着的肩膀抖动了一下，这说明他的内心在刚才起了明显的波动。",
            "\t[杰克,thief]\b[down,null]我不能说出口。",
            "\t[勇士,hero]\b[down,null]放心，现在妖精不在这里。",
            "\t[杰克,thief]\b[down,null]不行，她能通过其他手段监视我的精神。",
            "\t[勇士,hero]\b[down,null]既然你不能直接开口回答的话，那这样吧，我跟你说说我自己的猜测，你再用点头跟摇头回答我。",
            "\t[杰克,thief]\b[down,null]（点头）",
            "\t[勇士,hero]\b[down,null]趁我昏倒时拿走镐头，回到16层袭击你的人不是其他人，正是妖精，对吗？",
            "\t[杰克,thief]\b[down,null]（点头）",
            "\t[勇士,hero]\b[down,null]她的那些伤口，其实是为了完全打消我对她的怀疑而表演的一场苦肉计，对吗？",
            "\t[杰克,thief]\b[down,null]（点头）",
            "\t[勇士,hero]\b[down,null]她做出这一系列事情的目的是为了阻止我进入下个区域，对吗？",
            "\t[杰克,thief]\b[down,null]（摇头）",
            "\t[勇士,hero]\b[down,null]......摇头吗？那她的动机究竟是什么？",
            {
                "type": "sleep",
                "time": 500,
                "noSkip": true
            },
            "\t[勇士,hero]\b[down,null]......是三长一短，说明这条通道是安全的。",
            "\t[勇士,hero]\b[down,null]这个高度，我原地起跳勉强可以够到窗沿，可是杰克，那你该怎么办？",
            "\t[杰克,thief]\b[down,null]......你先走吧，我还要在这间暗房里找一些东西。",
            "\t[勇士,hero]\b[down,null]那我先行一步了，你多加小心。",
            "\t[杰克,thief]\b[down,null]兄弟。",
            "\t[勇士,hero]\b[down,null]......嗯？",
            "\t[杰克,thief]\b[down,null]你千万要小心妖精那家伙......她不是什么好人。",
            "\t[勇士,hero]\b[down,null]我知道了。",
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
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        1
                    ]
                ],
                "floorId": "MT30",
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        1
                    ]
                ],
                "floorId": "MT30",
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        9,
                        1
                    ]
                ],
                "floorId": "MT30",
                "remove": true
            },
            {
                "type": "setBlock",
                "number": "fairy",
                "loc": [
                    [
                        10,
                        1
                    ]
                ],
                "floorId": "MT30"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        1
                    ]
                ],
                "floorId": "MT30",
                "remove": true
            },
            "这条通道十分狭窄，我只得蜷缩着身子，艰难向前挪动。",
            "大概只有妖精那种体型的存在才能在这样的场所中自由出入。",
            "妖精她......果然就是对杰克施虐的人吗？",
            "为什么她要这样做？为什么她要假装成受害者来欺骗我？",
            "妖精，你究竟是什么人？",
            "头好痛......还是别想这么多乱七八糟的了。",
            {
                "type": "sleep",
                "time": 500,
                "noSkip": true
            },
            "亮光，前面就是出口吗？",
            {
                "type": "changeFloor",
                "floorId": "MT30",
                "loc": [
                    11,
                    1
                ],
                "direction": "left"
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            "\t[勇士,hero]这里不是......30层吗？",
            "\t[妖精,fairy]对啊，我们运气真好！这样一来就算没有杰克那家伙的帮助，我们也能进入下个区域了！",
            "\t[勇士,hero]可是杰克还在那间危险的暗房里，我们得回去拉他一把才行。",
            "\t[妖精,fairy]才不要，我才不想钻进那个又黑又窄的地方，你看我翅膀都被弄脏了！",
            "\t[勇士,hero]......（这种毫无心机的任性小女孩一面估计也是她装出来的。）",
            "\t[勇士,hero]那杰克怎么办，我们就这样弃他生死于不顾了？",
            "\t[妖精,fairy]别管他了，反正你现在也不需要他帮你挖墙，那家伙已经完全没有利用价值了，嘻嘻嘻，任他自生自灭吧。",
            "\t[勇士,hero]......",
            "\t[妖精,fairy]好啦好啦，那家伙可是杰克大盗，不管什么密室都锁不住他的，比起担心他的安危，我们还是快点前往下个区域追凶吧。",
            "\t[勇士,hero]行，我们出发吧，一定要让那个万恶的凶手付出代价。",
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        1
                    ]
                ],
                "floorId": "MT30",
                "remove": true
            },
            {
                "type": "follow",
                "name": "yaojing.png"
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
    [10040,10043,10043,10043,10043,10043,10043,10043,10043,10043,10043,10043,10042],
    [10040,10043,10043,10043,10043,10043,10043,10043,10043,10043,10043,10043,10042],
    [10040,10043,10043,10043,10043,10043,10043,10043,10043,10043,10043,10043,10042],
    [10040,10043,10043,10043,10125,10043,10043,10125,10043,10043,20178,10043,10042],
    [10040,10043,10043,10043,10133,10043,10043,10133,10043,10043,10043,10043,10042],
    [10040,  0,10174,10175,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,10136,10137,10138,  0,10140,  0,  0,  0,  0,  0,10111,10042],
    [10040,10144,10145,10146,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,10152,10153,10154,  0,  0,  0,  0,  0,  0,123,  0,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,10049,10049,10049,10049,10049,10049,10049,10049,  0,10049,10049,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042]
],
    "bgmap": [

],
    "fgmap": [

]
}