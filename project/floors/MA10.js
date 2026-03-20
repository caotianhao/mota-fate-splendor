main.floors.MA10=
{
    "floorId": "MA10",
    "title": "地下 10 层",
    "name": "地下 10 层",
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
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:door_MA10_6_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA10_7_10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA10_5_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:door_MA10_6_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA10_7_10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA10_5_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_MA10_6_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA10_7_10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA10_5_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_MA10_6_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA10_7_10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA10_5_10",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,9": {
            "0": {
                "condition": "flag:door_MA10_6_9==4",
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
                        "name": "flag:door_MA10_6_9",
                        "value": "null"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MA10_5_10s",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            },
            "1": null
        },
        "7,10": {
            "0": {
                "condition": "flag:door_MA10_7_10==4",
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
                        "name": "flag:door_MA10_7_10",
                        "value": "null"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MA10_5_10s",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            },
            "1": null
        },
        "5,10": {
            "0": {
                "condition": "flag:door_MA10_5_10==4",
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
                        "name": "flag:door_MA10_5_10",
                        "value": "null"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MA10_5_10s",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            },
            "1": null
        },
        "0,0": {
            "0": {
                "condition": "flag:door_MA10_5_10s===3",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "vibrate",
                        "direction": "horizontal",
                        "time": 800,
                        "speed": 10,
                        "power": 10
                    },
                    "\t[勇士,hero]......",
                    "\t[勇士,hero]......（已经渐渐习惯这种感觉了。）",
                    {
                        "type": "hideStatusBar"
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "EXA101",
                        "loc": [
                            6,
                            7
                        ],
                        "direction": "down",
                        "time": 600
                    },
                    {
                        "type": "sleep",
                        "time": 250,
                        "noSkip": true
                    },
                    {
                        "type": "animate",
                        "name": "jianji",
                        "loc": [
                            5,
                            7
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "jianji",
                        "loc": [
                            5,
                            9
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "jianji",
                        "loc": [
                            7,
                            7
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "jianji",
                        "loc": [
                            7,
                            9
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                5,
                                9
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                7,
                                9
                            ]
                        ],
                        "remove": true
                    },
                    "\t[骷髅将军,skeletonKnight]\b[up,null]居然能从骷髅的海洋里杀出一条血路，虽然长着一副黑铁级勇士的大众脸，但你果然不是什么简单的角色。",
                    "\t[骷髅将军,skeletonKnight]\b[up,null]我非常赏识你的潜能，不如这样吧，我们放下剑好好谈一谈，你如果肯加入我的麾下，我可以直接将你提拔为近卫军。",
                    "\t[勇士,hero]\b[up,null]区区一具骨头架子，怎么这么啰嗦，要打就打，哪来那么多话。",
                    "\t[骷髅将军,skeletonKnight]\b[up,null]哦?这么多年来，你可是唯一一个敢用这种口气跟我说话的人类！",
                    "\t[骷髅将军,skeletonKnight]\b[up,null]哼！既然你不肯乖乖就范，那么我就先把你身上的皮肉一块一块割下来，再用咒术把你变成最低级的骷髅士兵！",
                    {
                        "type": "animate",
                        "name": "jianji",
                        "loc": [
                            6,
                            8
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 250,
                        "noSkip": true
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "EXA102",
                        "loc": [
                            6,
                            6
                        ],
                        "direction": "down",
                        "time": 600
                    },
                    {
                        "type": "sleep",
                        "time": 250,
                        "noSkip": true
                    },
                    {
                        "type": "changePos",
                        "loc": [
                            6,
                            5
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "jianji",
                        "loc": [
                            6,
                            5
                        ]
                    },
                    "\t[鬼帝,skeletonKing]\b[up,null]硬抗下我一击平砍却没有倒下的黑铁级勇士，莫非......你跟我一样，也是稀有勇者体质的拥有者吗？",
                    "\t[勇士,hero]\b[up,null]（明明只是一招看上去平凡无常的普通攻击而已，其中蕴含的力道却是让我握剑的手臂骨折多处。）",
                    "\t[勇士,hero]\b[up,null]（这家伙......实力远远强于这座塔里的其他魔物，他对我表现出来的力量，也不过只是冰山一角而已，他要是出全力，恐怕我......）",
                    "\t[勇士,hero]\b[up,null]......切，你会后悔放水的。",
                    "\t[鬼帝,skeletonKing]\b[up,null]嗯？杀气......这个人类身上的斗志突然涨了好几倍，你刚才说什么？",
                    "\t[勇士,hero]\b[up,null]你叫鬼帝是吧？我会让你后悔小瞧我的。",
                    "\t[勇士,hero]\b[up,null]听着，我会让你们这些所有跟我作对的人后悔招惹我的！",
                    {
                        "type": "changePos",
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
                            7
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 250,
                        "noSkip": true
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "EXA103",
                        "loc": [
                            6,
                            9
                        ],
                        "direction": "down",
                        "time": 600
                    },
                    {
                        "type": "sleep",
                        "time": 250,
                        "noSkip": true
                    },
                    {
                        "type": "animate",
                        "name": "jianji",
                        "loc": [
                            6,
                            9
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "jianji",
                        "loc": [
                            6,
                            10
                        ]
                    },
                    "\t[魔神武者,devilWarrior]\b[up,null]痛快！吾镇守第三区域多年，从没遇到过能与吾战得势均力敌难分难解的人类！",
                    "\t[魔神武者,devilWarrior]\b[up,null]勇士！可以告诉吾汝之真名吗？吾要将汝之首级放在收藏品中最显眼的位置！",
                    "\t[勇士,hero]\b[up,null]（说什么势均力敌，其实这家伙心里很清楚我与他之间的实力差距到底有多大。）",
                    "\t[勇士,hero]\b[up,null]（这些武者魔物都是天生的完美战士，随手挥出的一记劈斩都能与最老练的人类武士毕生修炼的奥义相媲美。）",
                    "\t[勇士,hero]\b[up,null]（这个世界，任何时候都是不平等的。）",
                    "\t[勇士,hero]\b[up,null]抱歉，这场决斗我必须要赢。",
                    {
                        "type": "animate",
                        "name": "jianji",
                        "loc": [
                            6,
                            10
                        ]
                    },
                    "\t[魔神武者,devilWarrior]\b[up,null]不错，汝这次的斩击无论是力道还是角度都有了极大的进步，可是......远远不够。",
                    {
                        "type": "animate",
                        "name": "jianji",
                        "loc": [
                            6,
                            9
                        ]
                    },
                    "\t[魔神武者,devilWarrior]\b[up,null]这回汝居然完全放弃闪避，以肉身与吾之刀锋正面对抗，虽然这样做的确能把更多的精力放在进攻上......",
                    "\t[魔神武者,devilWarrior]\b[up,null]但是，汝再怎么说也只是个脆弱的人类，这种以伤换伤的打法，怎么都谈不上明智啊。",
                    {
                        "type": "animate",
                        "name": "jianji",
                        "loc": [
                            6,
                            10
                        ]
                    },
                    "\t[魔神武者,devilWarrior]\b[up,null]是错觉吗？......生命值流失得越来越迅速，汝脸上的表情也越来越痛苦，为什么汝的每次斩击都比上一次更精准，更迅猛？",
                    "\t[魔神武者,devilWarrior]\b[up,null]难道说，汝一直在模仿吾之动作吗？",
                    {
                        "type": "animate",
                        "name": "jianji",
                        "loc": [
                            6,
                            10
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 250,
                        "noSkip": true
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
                    "不能输，我必须要赢。",
                    "我不是任何人的棋子，我是属于我自己的棋子，棋盘上最后一颗面对万马千军却仍不肯放弃的小小卒兵。",
                    "不论面对再强大，再蛮不讲理的敌人，我也绝不能退缩。",
                    "为了得到足以对抗贤者的力量。",
                    "前进，或者死。",
                    {
                        "type": "changeFloor",
                        "floorId": "EXA104",
                        "loc": [
                            6,
                            6
                        ],
                        "direction": "up",
                        "time": 10
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    {
                        "type": "sleep",
                        "time": 250,
                        "noSkip": true
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            4,
                            3
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            4,
                            6
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            8,
                            6
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            8,
                            3
                        ]
                    },
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            5
                        ],
                        "time": 200
                    },
                    {
                        "type": "animate",
                        "name": "thunder",
                        "loc": [
                            6,
                            6
                        ]
                    },
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            4
                        ],
                        "time": 200
                    },
                    {
                        "type": "animate",
                        "name": "thunder",
                        "loc": [
                            7,
                            5
                        ]
                    },
                    {
                        "type": "jumpHero",
                        "loc": [
                            5,
                            5
                        ],
                        "time": 200
                    },
                    {
                        "type": "animate",
                        "name": "thunder",
                        "loc": [
                            7,
                            4
                        ]
                    },
                    {
                        "type": "jumpHero",
                        "loc": [
                            6,
                            4
                        ],
                        "time": 200
                    },
                    {
                        "type": "animate",
                        "name": "jianji",
                        "loc": [
                            6,
                            3
                        ]
                    },
                    "\t[黑暗大法师,magicMaster]\b[down,null]没想到你居然真的杀到这里来了，打败骷髅将军跟魔神武者倒是意料之中，不过你竟然能从鬼帝手下活着走出来......",
                    "\t[黑暗大法师,magicMaster]\b[down,null]呵呵，看来他也看出你具备稀有勇者体质了，那家伙虽然冥顽不化，倒也算个爱才之人。",
                    {
                        "type": "animate",
                        "name": "jianji",
                        "loc": [
                            6,
                            3
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 1000,
                        "noSkip": true
                    },
                    "\t[黑暗大法师,magicMaster]\b[down,null]zeno先生，为什么我们不能放下武器，好好坐下来面对面谈一谈呢？",
                    "\t[勇士,hero]\b[down,null]为什么你会知道我的名字？",
                    "\t[黑暗大法师,magicMaster]\b[down,null]永不服输的黑铁级勇士zeno，你的大名在我们西洋国可谓是人尽皆知，我怎么可能会不知道？",
                    "\t[勇士,hero]\b[down,null]你究竟是什么人？",
                    "\t[黑暗大法师,magicMaster]\b[down,null]zeno先生，要想在短时间内获得足以匹敌贤者的力量，只有一个选择，那就是突破魔塔最顶层，获得存放于此地的无上圣水。",
                    "\t[黑暗大法师,magicMaster]\b[down,null]老实说，一开始我对你黑铁级的实力并未抱有任何期待，我故意给你指了一条死路，算是对你太过高看自己能力的责罚。",
                    "\t[黑暗大法师,magicMaster]\b[down,null]没想到你居然凭借着连我们魔物都难以想象的意志力，一路杀到了最后一个区域，甚至是站到了我面前。",
                    "\t[勇士,hero]\b[down,null]你伪装成西洋国智者的目的是什么？你到底用这些花言巧语迷惑了多少勇士？",
                    "\t[黑暗大法师,magicMaster]\b[down,null]目的？我没有别的目的，不瞒你说，我正在为这座魔塔寻找下一任继承者。也就是......下一任魔王。",
                    "\t[黑暗大法师,magicMaster]\b[down,null]总而言之，你已经完美通过了我们的考验，欢迎加入魔物势力，zeno先生，不对，现在我应该叫你——",
                    {
                        "type": "sleep",
                        "time": 250,
                        "noSkip": true
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
                    "魔王zeno。",
                    {
                        "type": "changeFloor",
                        "floorId": "MA10",
                        "loc": [
                            6,
                            7
                        ],
                        "direction": "down",
                        "time": 600
                    },
                    {
                        "type": "showStatusBar"
                    },
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[勇士,hero]......",
                    "\t[勇士,hero]不知不觉又昏过去了......",
                    "\t[勇士,hero]zeno......是谁的名字？",
                    "\t[勇士,hero]还是别想这么多乱七八糟的东西了，杰克和妖精还没有脱离危险，我得抓紧时间找到行凶者才行。"
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2,1269,  2,1262,  2,1263, 87,1262,  2, 21,  2,1276,  2],
    [  2,1515,525,1262, 81,  0,  0,  0, 82,897, 82,836,  2],
    [  2,1269,  2,1262,  2,1261,  0, 21,  2,1264,  2,1276,  2],
    [  2,  2,  2,  2,  2,  2, 83,  2,  2,  2,  2,  2,  2],
    [  2,  2,  2,  2,  2,  2,  0,  2,  2,  2,  2,  2,  2],
    [  2,  2,  2,  2,  2,240,  0,238,  2,  2,  2,  2,  2],
    [  2,  2,  2,  2,  2,  0,  0,  0,  2,  2,  2,  2,  2],
    [  2,  2,  2,  2,  2,242,  0,247,  2,  2,  2,  2,  2],
    [  2,  2,  2,  2,  2,  2, 85,  2,  2,  2,  2,  2,  2],
    [  2,1269,1276,1283,1290, 85,  0, 85,1290,1283,1276,1269,  2],
    [  2, 21,1262,1263, 22,  2, 88,  2, 22,1263,1262, 21,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
],
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}