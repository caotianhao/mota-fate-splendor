main.floors.MT20=
{
    "floorId": "MT20",
    "title": "主塔 20 层",
    "name": "主塔 20 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "10,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "2,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT20_5_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT20_7_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT20_7_11",
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
            "\t[勇士,hero]头又痛了起来，糟糕，又来了。",
            {
                "type": "changeFloor",
                "floorId": "EX20",
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
                    3
                ]
            },
            "\t[勇士,hero]\b[down,null]快说，那份机密文件到底被你们藏哪去了？",
            "\t[反叛者统领,E817]\b[down,null]呸！王国的走狗，我就算是死，也不会把组织最重要的机密抖落给你们！",
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    8,
                    3
                ]
            },
            "\t[勇士,hero]\b[down,null]你到底说不说？",
            "\t[反叛者统领,E817]\b[down,null]你知道你在为一个怎样昏庸的君主卖命吗？睁开眼睛看看现实吧，混帐！",
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    8,
                    3
                ]
            },
            "\t[勇士,hero]\b[down,null]闭嘴，你的贴身守卫已经全部被我解决掉了，现在的你除了乖乖就范以外，没有其他选择。",
            "\t[反叛者统领,E817]\b[down,null]咳咳......你，你这......",
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    8,
                    3
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
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    8,
                    3
                ]
            },
            "\t[勇士,hero]\b[down,null]痛觉是让人头脑变清醒的最佳良药，如果你说，我就留你一条命。",
            "\t[反叛者统领,E817]\b[down,null]我生平最大的错误，就是小瞧了一个黑铁级勇士对局势的影响，以你的能力胆识跟手腕，你不该为他们卖命的......咳咳......",
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    8,
                    3
                ]
            },
            "\t[勇士,hero]\b[down,null]别用黑铁级勇士来称呼我，你究竟说还是不说？",
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    8,
                    3
                ]
            },
            "\t[勇士,hero]\b[down,null]自灭符文？！你想干什么？",
            "\t[反叛者统领,E817]\b[down,null]其貌不扬却锋利非常的剐心之刃，只可惜走上了一条错误的不归路，像你这样的存在，留着必然是个无穷祸患。",
            "\t[反叛者统领,E817]\b[down,null]必须要趁你还没完全成长起来之前彻底除掉你才行，咳咳......没想到我这枚珍藏已久的符文，居然要对一个黑铁级勇士使用。",
            "\t[勇士,hero]\b[down,null]......",
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    8,
                    3
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
            "\t[勇士,hero]\b[down,null]绝对壁垒？看来你这是铁了心要跟我同归于尽。",
            "\t[勇士,hero]\b[down,null]（自灭符文会波及到范围三英里内的圆形区域，这其中涵盖了上万无辜的王国公民。）",
            "\t[勇士,hero]\b[down,null]（我记得这栋叛军建筑物里应该存在用黑曜石修筑的地下室。）",
            "\t[勇士,hero]\b[down,null]（如果把这家伙即将爆炸的身体搬运到那里，就能让王国承受的损失达到最小值。）",
            "\t[勇士,hero]\b[down,null]呵呵，事到如今你还在纠结什么？",
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
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        3
                    ]
                ],
                "remove": true,
                "time": 200
            },
            {
                "type": "setBlock",
                "number": "N1577",
                "loc": [
                    [
                        8,
                        2
                    ]
                ],
                "time": 500
            },
            "\t[勇士,hero]\b[down,null]贤者大人？",
            {
                "type": "move",
                "loc": [
                    8,
                    2
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "down:1"
                ]
            },
            "\t[贤者,N1577]\b[down,null]放心吧，他的尸体我已经传送到荒无人烟的大沙漠里去了，没有任何人会因他而丧命。",
            "\t[勇士,hero]\b[down,null]是吗......那就好。",
            "\t[贤者,N1577]\b[down,null]实话告诉我，你刚才是不是想顺着他的意思，跟他同归于尽？",
            "\t[勇士,hero]\b[down,null]是的，王国护卫队信条第一句，在王国财产与个人性命之间，任何时候都要舍弃后者。",
            "\t[勇士,hero]\b[down,null]再说了，对方是反叛者的统领，而我只是个黑铁级勇士，一命换一命，怎么说都是稳赚不赔的。",
            "\t[贤者,N1577]\b[down,null]我准你这样轻视自己的性命了吗？",
            "\t[贤者,N1577]\b[down,null]你可是当年在龙窟一役中唯一活下来的黑铁级。",
            "\t[贤者,N1577]\b[down,null]你以为我是看中你的什么能力，才破例让你成为王国护卫队有史以来第一个黑铁级勇士的？",
            "\t[贤者,N1577]\b[down,null]血性，旺盛的求生欲，跟绝不服输的根性，这是你的獠牙，你的武器。",
            "\t[贤者,N1577]\b[down,null]今后的你将会成为替王国执行正义的利剑，而那个反叛者统领只不过是个不值一提的小喽啰，这样的存在，你以后肯定还会遇到数十上百个。",
            "\t[贤者,N1577]\b[down,null]你还认为你所追求的崇高牺牲，是一笔稳赚不赔的买卖吗？",
            {
                "type": "sleep",
                "time": 500,
                "noSkip": true
            },
            "\t[勇士,hero]\b[down,null]我明白了，贤者大人。",
            "\t[贤者,N1577]\b[down,null]抱歉，其实我说的也有点过分。",
            "\t[贤者,N1577]\b[down,null]不管怎么说，这次镇压也算圆满结束了，我们一起回去吧，好好喝上一杯。",
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
            "贤者，王国有史以来公认的最强勇者。",
            "果敢而坚韧，对待敌人犹如最严厉的凛冬。",
            "仁慈而博爱，对待人民犹如最和煦的春风。",
            "他是救世主，是引领我们走向光明的灯塔。",
            "我会永远陪伴在他身边，成为一柄让他自豪的正义之剑。",
            "至死不渝。",
            {
                "type": "changeFloor",
                "floorId": "MT20",
                "loc": [
                    6,
                    2
                ],
                "direction": "down",
                "time": 500
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            "\t[妖精,fairy]\b[down,null]你确定以及肯定自己没有低血糖吗？",
            "\t[勇士,hero]\b[down,null]我刚才又昏过去了对吧。",
            "\t[妖精,fairy]\b[down,null]是的，不过这次你昏倒的时间里，脸上的表情十分安详，嘴边还挂着一丝暧昧的笑意。这次你梦到了什么东西？情人？",
            "\t[勇士,hero]\b[down,null]我不知道。",
            "\t[妖精,fairy]\b[down,null]算了，管他什么情人不情人的，继续前进吧。"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "5,5": {
            "0": {
                "condition": "flag:door_MT20_5_5==1",
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
                        "name": "flag:door_MT20_5_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "7,5": {
            "0": {
                "condition": "flag:door_MT20_7_5==1",
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
                        "name": "flag:door_MT20_7_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "7,11": {
            "0": {
                "condition": "flag:door_MT20_7_11==1",
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
                        "name": "flag:door_MT20_7_11",
                        "value": "null"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  0,817,  0,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 83,  1,  1,  1,  1,  1,  1],
    [  1, 21, 21, 21,  1,  1, 83,  1,  1, 22,1515, 22,  1],
    [  1, 27, 28, 29, 30, 85,  0, 85, 30, 34, 34, 34,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,233, 33,  1, 33, 82,  0,  1, 28,  1, 27,233,  1],
    [  1,  1, 81,  1, 27,  1,  0,  1, 28,  1, 81,  1,  1],
    [  1,233, 21,215, 27,222,  0, 81, 28,255,215, 33,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  1, 88,  0,  0,  0,  0, 85,  0,  0, 87,  1,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}