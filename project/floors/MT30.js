main.floors.MT30=
{
    "floorId": "MT30",
    "title": "主塔 30 层",
    "name": "主塔 30 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "images": [],
    "ratio": 2,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,4": [
            "\t[勇士,hero]\b[down,null]奇怪，为什么会有一面墙挡在通往下个区域的必经之路上？",
            "\t[勇士,hero]\b[down,null]这下该怎么办......对了，如果能找到镐头的话，就能拜托杰克来破开这面墙了。",
            {
                "type": "sleep",
                "time": 500,
                "noSkip": true
            },
            {
                "type": "changePos",
                "direction": ":right"
            },
            "\t[勇士,hero]\b[down,null]可是，这个区域的宝库里，却唯独只有镐头消失不见了。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[勇士,hero]\b[up,null]（又是他......）",
                "\t[勇士,hero]\b[up,null]（他口不能言目不能视，不知道是凭借着怎样可怕的毅力才爬到这里来的。）",
                "\t[勇士,hero]\b[up,null]请问，您找我有什么事吗？",
                "\t[老人,man]\b[up,null]......jie......ke......",
                "\t[勇士,hero]\b[up,null]（老人似乎想要努力张开被钢丝绞合的嘴，血沿着他干瘪的腮帮缓缓流下，两个模糊的音节从他口中勉强吐出，这个不要命的举动让老人的脸色变得越发病态。）",
                "\t[勇士,hero]\b[up,null]老人家，不要再勉强自己开口说话了，jieke，你是说杰克吗？",
                "\t[勇士,hero]\b[up,null]（老人点了点头，然后伸出手指比划了两个手势。）",
                "\t[勇士,hero]\b[up,null]是数字1跟数字6，16？你的意思是让我回16楼看看吗？",
                "\t[勇士,hero]\b[up,null]（老人点了点头，扭曲的脸上仿佛露出了笑容。）",
                "\t[勇士,hero]\b[up,null]老人家，我有一个问题想请教你。",
                "\t[勇士,hero]\b[up,null]你在这座塔里待了相当长的一段时间，没错吧？那么你对妖精这个人了解多少？",
                "\t[勇士,hero]\b[up,null]我看她对待你的态度非常无理粗暴，你们之间是不是有什么过节？",
                "\t[勇士,hero]\b[up,null]（老人突然猛地捂住了耳朵，脸上露出极为痛苦的神色，仿佛我刚才的话语勾起了他某些不愉快的回忆。）",
                {
                    "type": "hide",
                    "remove": true,
                    "time": 500
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            11,
                            2
                        ]
                    ],
                    "floorId": "MT16",
                    "remove": true
                },
                {
                    "type": "setBlock",
                    "number": "greenKey",
                    "loc": [
                        [
                            10,
                            2
                        ]
                    ],
                    "floorId": "MT16"
                },
                {
                    "type": "setBlock",
                    "number": "A1578",
                    "loc": [
                        [
                            9,
                            1
                        ]
                    ],
                    "floorId": "MT16"
                },
                {
                    "type": "setBlock",
                    "number": "A1579",
                    "loc": [
                        [
                            9,
                            3
                        ]
                    ],
                    "floorId": "MT16"
                },
                {
                    "type": "setBlock",
                    "number": "A1580",
                    "loc": [
                        [
                            11,
                            1
                        ]
                    ],
                    "floorId": "MT16"
                },
                {
                    "type": "setBlock",
                    "number": "A1581",
                    "loc": [
                        [
                            11,
                            3
                        ]
                    ],
                    "floorId": "MT16"
                },
                {
                    "type": "setBlock",
                    "number": "A1582",
                    "loc": [
                        [
                            8,
                            1
                        ]
                    ],
                    "floorId": "MT16"
                },
                {
                    "type": "setBlock",
                    "number": "A1583",
                    "loc": [
                        [
                            8,
                            3
                        ]
                    ],
                    "floorId": "MT16"
                },
                {
                    "type": "setValue",
                    "name": "flag:show16green",
                    "value": "1"
                },
                "\t[勇士,hero]\b[up,null]（不对劲的疑点越来越多了。）"
            ]
        },
        "6,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "show",
                    "loc": [
                        [
                            6,
                            10
                        ]
                    ],
                    "time": 800
                }
            ]
        }
    },
    "changeFloor": {
        "6,0": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT30_6_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT30_5_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT30_7_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "vibrate",
                "direction": "horizontal",
                "time": 800,
                "speed": 10,
                "power": 10
            },
            "\t[勇士,hero]（已经渐渐习惯这种感觉了。）",
            {
                "type": "hideStatusBar"
            },
            {
                "type": "changeFloor",
                "floorId": "EX30",
                "loc": [
                    8,
                    4
                ],
                "direction": "up"
            },
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    8,
                    4
                ]
            },
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    8,
                    3
                ]
            },
            "\t[勇士,hero]\b[down,null]陈，为什么我们要战斗？我们不是最好的兄弟吗？",
            "\t[陈,evilHero]\b[down,null]兄弟？或许我之前的确有把你当成令人敬佩的亲弟弟看待过吧。",
            "\t[陈,evilHero]\b[down,null]明明是黑铁级，却有着深不见底的潜能，以及不输给任何人的意志力，你曾一度是我们王国护卫队的标杆，甚至被贤者誉为王国之剑。",
            "\t[陈,evilHero]\b[down,null]可是，这样的你，居然会有背叛王国护卫队的一天！贤者大人当初从龙窟战场上捡回来你这样一条白眼狼，真是他这辈子最大的错举！",
            "\t[勇士,hero]\b[down,null]不，不是的，我没有背叛你们，我只是在试图揭开一些被掩盖的真相而已。",
            "\t[陈,evilHero]\b[down,null]你不需要弄清楚那些事情！你只要像往常一样，作为贤者大人手中一颗没有思想的棋子去执行任务就行了！懂吗？！！",
            "\t[勇士,hero]\b[down,null]陈，你不觉得很奇怪吗？王国近年来的政策一直在优化改革，人民生活越来越好，可我们每个月杀掉的叛军却越来越多。",
            "\t[勇士,hero]\b[down,null]我前几天暗中调查了那些叛军的家族背景，我发现他们并没有插足过任何反动活动，相反地，他们中的绝大多数人，都在人民口中有着良好的口碑。",
            "\t[勇士,hero]\b[down,null]可这些被我们残杀的无辜之人有一个共同点，那就是他们都站在与贤者大人对立的政治层面上，陈，你还不明白吗？",
            "\t[陈,evilHero]\b[down,null]你竟然敢质疑贤者大人的动机？畜牲！狗一样的人，你怎么敢怀疑贤者大人！你个杀千刀的白眼狼！！",
            "\t[勇士,hero]\b[down,null]醒醒吧，陈，我们无比崇敬的贤者大人，很可能并没有我们想象中的那么圣洁，公正。",
            "\t[勇士,hero]\b[down,null]凭我一个人的力量是不足以与他对抗的，我打算离开王国，去西方的邻国寻求帮助，陈，你愿意陪我同行吗？",
            "\t[陈,evilHero]\b[down,null]我们曾经在王国公民碑面前以血发誓，我们要用手中的利剑，为王国斩获一个公正而和谐，不存在流血与猜忌的光明未来。",
            "\t[陈,evilHero]\b[down,null]如今，你不但背叛了王国护卫队，背叛贤者大人，甚至还要去投靠那群西洋鬼子吗？",
            "\t[勇士,hero]\b[down,null]陈，你还是不明白吗？王国的状况如今每况愈下，甚至沦落到不得不通过牺牲公主跟邻国联姻来谋求和平的地步。",
            "\t[勇士,hero]\b[down,null]阻隔在这光明未来前的最后一道障碍，其实是我们。我们手中的剑上沾满了太多无辜者的鲜血，我们的暴力传播的并不是正义，而是恐惧。",
            "\t[陈,evilHero]\b[down,null]我***！难道你要否定我们的奋斗？否定这一路上抛洒的热血？甚至是否定我们的理想吗？！！",
            "\t[陈,evilHero]\b[down,null]没救了！你已经没救了！从你质疑贤者大人的那一刻起，你就已经跟那群叛军毫无两样了！！",
            "\t[陈,evilHero]\b[down,null]你会成为我们王国护卫队历史上，最肮脏，最恶心，最令人作呕的污点！！！",
            {
                "type": "sleep",
                "time": 500,
                "noSkip": true
            },
            "\t[陈,evilHero]\b[down,null]为了王国，为了贤者大人，为了所有渴望光明未来的人民！我必须要杀了你！！！！",
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    8,
                    4
                ]
            },
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    8,
                    4
                ]
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    8,
                    4
                ]
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    8,
                    3
                ]
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    8,
                    4
                ]
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    8,
                    3
                ]
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    8,
                    3
                ]
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    8,
                    3
                ]
            },
            "\t[陈,evilHero]\b[down,null]你......你这......畜生......我就是死也不会放过你......",
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
            "陈，蓝玉级勇士中公认的最强。",
            "他是东亚人，特别豪爽，重义气，总是冲在最前面保护大家，在王国护卫队里被我们所有人尊称为大哥。",
            "可如今的陈是如此的偏执跟不可理喻，甚至已经听不进任何人话了。",
            "他将贤者视为唯一不可亵渎的信仰。",
            "就像曾经的我一样。",
            "到头来，我背弃了自己曾经奉若神明的贤者大人。",
            "杀掉了自己一生中最好的朋友。",
            "付出如此代价的我，究竟得到了什么？",
            "一无所获。",
            "反倒是让我又体会到了曾经那种......一无所有的感觉。",
            "那天我们在贤者与公民纪念碑下共同高歌的那曲《孤狼的革命》，我至今都没有忘记。",
            "就算眼前的路布满荆棘，一片泥泞，绝望到没有一丝亮光。",
            "我也会带着我们曾经的理想，也是勇者回忆，勇者就不一样继续前行。",
            {
                "type": "hide",
                "loc": [
                    [
                        9,
                        3
                    ]
                ],
                "floorId": "MT30",
                "remove": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        9
                    ]
                ],
                "floorId": "MT30"
            },
            {
                "type": "unfollow",
                "name": "yaojing.png"
            },
            {
                "type": "changeFloor",
                "floorId": "MT30",
                "loc": [
                    6,
                    7
                ],
                "direction": "up"
            },
            {
                "type": "showStatusBar"
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            "\t[勇士,hero]眼泪？我这次昏倒的这段时间里，难道在哭泣吗？",
            "\t[勇士,hero]等等，妖精在哪？",
            "\t[勇士,hero]没有我陪在身边的话，她的处境会很不妙，妖精没有战斗能力，凭她一个人应该去不了更高层的区域。",
            "\t[勇士,hero]但愿她能平安无事。"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,5": {
            "0": {
                "condition": "flag:door_MT30_6_5==1",
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
                        "name": "flag:door_MT30_6_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "5,3": {
            "0": {
                "condition": "flag:door_MT30_5_3==1",
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
                        "name": "flag:door_MT30_5_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "7,3": {
            "0": {
                "condition": "flag:door_MT30_7_3==1",
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
                        "name": "flag:door_MT30_7_3",
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
    [  1,  1,  1,  1,  1,  1, 87,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,10071],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,1269,1283, 21,1263, 85,  0, 85,1262, 47,1290,1276,  1],
    [  1,1269,1283, 21,1263,  1,  0,  1,1262, 22,1290,1276,  1],
    [  1,  1,  1,  1,  1,  1, 85,  1,  1,  1,  1,  1,  1],
    [  1,1269,  1,1269,  1,  0,  0,  0,  1, 21,1264, 22,  1],
    [  1, 21, 82,  0,  1,  0,241,  0,  1,1262,223,1263,  1],
    [  1,1262,  1,236,  1,  1, 83,  1,  1,  1, 82,  1,  1],
    [  1,  1,  1,236,  1,  0,  0,  0,  1,225,236,225,  1],
    [  1,1263, 81,  0,223,  0,121,  0, 81,  0,  1,1276,  1],
    [  1,1283,  1, 22,  1,  0, 88,  0,  1,1264,  1,1276,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}