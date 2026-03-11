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
            "\t[勇士,hero]\b[down,null]呵呵，事到如今你还在纠结什么？"
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