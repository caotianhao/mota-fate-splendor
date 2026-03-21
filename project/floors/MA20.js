main.floors.MA20=
{
    "floorId": "MA20",
    "title": "地下 20 层",
    "name": "地下 20 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 3,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_MA20_5_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MA20_7_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        6
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        6
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        6
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
                        4,
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
                        4,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "vibrate",
                "direction": "horizontal",
                "time": 800,
                "speed": 10,
                "power": 10
            },
            "\t[勇士,hero]......（已经渐渐习惯这种感觉了。）",
            {
                "type": "hideStatusBar"
            },
            {
                "type": "setHeroOpacity",
                "opacity": 0
            },
            {
                "type": "changeFloor",
                "floorId": "EXA201",
                "loc": [
                    0,
                    0
                ],
                "direction": "down",
                "time": 600
            },
            {
                "type": "sleep",
                "time": 250,
                "noSkip": true
            },
            "\t[魔王,redKing]\b[down,null]（总算是让这家伙暂时消停下来了。）",
            "\t[骷髅将军,skeletonKnight]\b[down,null]可恶，这条突然冒出来的巨龙竟然比我们倾心培养的血影跟魔龙还要强大！打个喷嚏就消灭了我上千骷髅士兵，害我变成光杆司令！",
            "\t[骷髅将军,skeletonKnight]\b[down,null]不可原谅！",
            "\t[魔神武者,devilWarrior]\b[down,null]这条龙的鳞甲硬如磐石，只打了四个照面就让吾的刀断了刃......魔塔底层居然封印着一只如此可怕的生物，这可真是闻所未闻。",
            "\t[鬼帝,skeletonKing]\b[down,null]我活了这么多年，还是第一次碰到这么难缠的敌人......连我们几大区域首领的合力攻击都未能伤它分毫。",
            "\t[鬼帝,skeletonKing]\b[down,null]为了保护魔塔里的子民们，看来我只能在这里祭出我稀有勇者体质的专属能力了，各位，我先走一步。",
            "\t[黑暗大法师,magicMaster]\b[down,null]慢着鬼帝，不要冲动，你难道想让我们所有人因为你的鲁莽而白白送命吗？",
            "\t[鬼帝,skeletonKing]\b[down,null]黑暗大法师，我们消耗了几乎全部的兵力才让这条巨龙暂时停止了暴动，这是唯一一次除掉它的机会。",
            "\t[黑暗大法师,magicMaster]\b[down,null]别急，先听我把话说完，我曾经在某本古书中看到过关于这条巨龙的记载。",
            "\t[黑暗大法师,magicMaster]\b[down,null]这条与我们战斗了三天三夜整的龙名叫地脉守护者，是保卫着塔底地脉的神明，换言之，它不是站在我们对立面的生物。",
            "\t[骷髅将军,skeletonKnight]\b[down,null]哈啊？这三天里它残杀了我们数不尽的同胞，现在这个战场上还站着的魔物就只剩下我们几个区域头目跟魔王大人了。",
            "\t[骷髅将军,skeletonKnight]\b[down,null]你敢说这家伙不是我们的敌人？",
            "\t[黑暗大法师,magicMaster]\b[down,null]我曾经通过意识跟它交流过，它的谈吐跟思维完全符合一个高智慧生命体的标准。",
            "\t[黑暗大法师,magicMaster]\b[down,null]它现在之所以会失去理智，变得如此狂暴，我想......应该是它负责保卫的地脉遭受了外界污染的原因吧。",
            "\t[鬼帝,skeletonKing]\b[down,null]就是说，黑暗大法师。你从一开始就知道地脉守护者的存在？但你可从没跟我们提起过这件事情，你是何居心？",
            "\t[黑暗大法师,magicMaster]\b[down,null]好吧，我承认，我一开始的确是打算借助它的力量巩固我对魔塔的统治来着。",
            "\t[黑暗大法师,magicMaster]\b[down,null]但现在可是非常时期，如果我们没能在这里阻止这条狂暴的巨龙，整座塔的魔物都要跟我们一起陪葬。",
            "\t[鬼帝,skeletonKing]\b[down,null]那你刚才就更不应该阻止我了，瞎扯这么久，这条龙已经快要从昏厥中再度苏醒了，到时候我们都得完蛋。",
            "\t[黑暗大法师,magicMaster]\b[down,null]我说过，这条龙是塔底地脉的保卫者，它若死于你的绝杀，地脉就会彻底损毁，到时候不止是魔塔，整片地脉经过的地区都会生灵涂炭。",
            "\t[魔神武者,devilWarrior]\b[down,null]悲哉......因为吾等的无能，而让其他生命遭受此等灾难，这跟吾所信奉的武者道义，完全不符。",
            "\t[骷髅将军,skeletonKnight]\b[down,null]现在还没到放弃的时候啊！我们新任的魔王大人一定会有办法的！",
            "\t[黑暗大法师,magicMaster]\b[down,null]......魔王大人，我们把决定权交给你，让它生还是让它死？",
            "\t[鬼帝,skeletonKing]\b[down,null]魔王大人，只要你一声令下，我就会毫不犹豫地对它使用我的特殊能力。",
            "\t[魔王,redKing]\b[down,null]......",
            "\t[魔王,redKing]\b[down,null]黑暗大法师，准备布置取引阵。",
            "\t[黑暗大法师,magicMaster]\b[down,null]什么？......难道说你想？",
            "\t[魔王,redKing]\b[down,null]动作麻溜点，我们没时间犹豫了。",
            {
                "type": "vibrate",
                "direction": "horizontal",
                "time": 600,
                "speed": 10,
                "power": 10
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
            {
                "type": "sleep",
                "time": 125,
                "noSkip": true
            },
            {
                "type": "setBlock",
                "number": "I1377",
                "loc": [
                    [
                        5,
                        5
                    ]
                ],
                "floorId": "EXA201"
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            "\t[魔王,redKing]\b[down,null]......",
            "\t[黑暗大法师,magicMaster]\b[down,null]魔王大人，你还好吧？",
            "\t[骷髅将军,skeletonKnight]\b[down,null]废话！抽出这么多灵魂能量还能站着都是个奇迹了，要不抽几斤你的试试？",
            "\t[鬼帝,skeletonKing]\b[down,null]消耗自己几乎九成的灵魂能量来封印地脉守护者吗？......这等觉悟跟胆识，我果然没有跟错人。",
            "\t[魔神武者,devilWarrior]\b[down,null]魔王大人，这颗流转着蓝光的宝石是？",
            "\t[魔王,redKing]\b[down,null]我余留了一部分灵魂能量储存在这颗精魂宝石里，来延缓地脉守护者冲破封印的时间。",
            "\t[鬼帝,skeletonKing]\b[down,null]等等，都被取引阵抽出将近九成的灵魂能量了，你怎么还有余力临时用自己的魔力造出一颗如此精纯的精魂宝石？",
            "\t[黑暗大法师,magicMaster]\b[down,null]魔王大人，你是不是用自己珍贵的记忆作为填充精魂宝石的替代品了？",
            "\t[魔王,redKing]\b[down,null]......",
            "\t[黑暗大法师,magicMaster]\b[down,null]如果不封印地脉守护者，整片地脉经过的地区都会生灵涂炭......这其中也包括人类王国。",
            "\t[黑暗大法师,magicMaster]\b[down,null]你之所以如此笃定地选择付出九成魔力的代价来封印它......是为了保护那个公主吗？",
            "\t[魔王,redKing]\b[down,null]......别瞎想了，此地不宜久留，我们还是先上楼继续商讨对这条龙的处理方案吧。",
            {
                "type": "changeFloor",
                "floorId": "MA20",
                "loc": [
                    6,
                    7
                ],
                "direction": "left",
                "time": 600
            },
            {
                "type": "setHeroOpacity",
                "opacity": 1
            },
            {
                "type": "showStatusBar"
            },
            "\t[勇士,hero]......",
            "\t[勇士,hero]我是不是在什么地方见过这颗宝石？",
            "\t[勇士,hero]大概是错觉吧。"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "5,3": {
            "0": {
                "condition": "flag:door_MA20_5_3==1",
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
                        "name": "flag:door_MA20_5_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "7,3": {
            "0": {
                "condition": "flag:door_MA20_7_3==1",
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
                        "name": "flag:door_MA20_7_3",
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
    [  5,  5,  5,  5,  5,  2,  2,  2,  5,  5,  5,  5,  5],
    [  5,  2,  2,  2,  2,  2, 87,  2,  2,  2,  2,  2,  5],
    [  5,  2,1270, 21,1367,  2,  0,  2,1367, 21,1270,  2,  5],
    [  5,  2, 22,1277, 21, 85,  0, 85, 21,1277, 22,  2,  5],
    [  5,  2,1367, 21,1284,  2,  0,  2,1284, 21,1367,  2,  5],
    [  5,  2,  2,  2,  2,  2, 83,  2,  2,  2,  2,  2,  5],
    [  5,  2,340,1627,1626,1625,  0,  2,  2,  5,  5,  5,  5],
    [  5,  2,  0,1624,1623,1619,  0,  2,  2,  5,  5,  5,  5],
    [  5,  2,1377,1622,1621,1620,  0,  2,  2,  5,  5,  5,  5],
    [  5,  2,  2,  2,  2,  2,  2,  2,  2,  5,  5,  5,  5],
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5],
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5],
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5]
],
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}