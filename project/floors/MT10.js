main.floors.MT10=
{
    "floorId": "MT10",
    "title": "主塔 10 层",
    "name": "主塔 10 层",
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
        "\t[勇士,hero]前面房间里的那个魔物是怎么回事，好强的压迫力。",
        "\t[妖精,fairy]那家伙可是这个区域的头目，虽然只是一只级别最低的窟龙，不过小瞧它的话会大吃苦头哦。",
        "\t[勇士,hero]头目吗？对了，你之前一直有提到的区域又是怎么一回事？",
        "\t[妖精,fairy]在魔塔里，通常每十层算做一个区域，每个区域都有相应的小头目镇守着，只有击败它们才能继续前进。",
        "\t[勇士,hero]没有办法绕开这个难缠的家伙吗？竟然挡在必经之路上，真是狡猾。",
        "\t[妖精,fairy]当然不行，战胜强敌才能继续前行，这可是魔塔里最基础的规则之一。",
        "\t[妖精,fairy]做好充分准备再去挑战这个区域的头目吧，当心一点。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_5_10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT10_7_10",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "5,10": {
            "0": {
                "condition": "flag:door_MT10_5_10==1",
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
                        "name": "flag:door_MT10_5_10",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,9": {
            "0": {
                "condition": "flag:door_MT10_6_9==1",
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
                        "name": "flag:door_MT10_6_9",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "7,10": {
            "0": {
                "condition": "flag:door_MT10_7_10==1",
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
                        "name": "flag:door_MT10_7_10",
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
    [  1,  1,  1,  1,  1,  1, 88,  1,  1,  1,  1,  1,  1],
    [  1,  1, 28,  1, 32,  1,  0,  1, 22,  1, 29,  1,  1],
    [  1, 29,212,  1,217,  1, 32,  1, 81,  1,207, 21,  1],
    [  1,  1, 34, 82,  0, 81,  0,203, 34, 82, 34,  1,  1],
    [  1, 27,217,  1, 27,  1,221,  1, 30,  1,221, 28,  1],
    [  1,  1, 21,  1,  1,  1, 83,  1,  1,  1, 32,  1,  1],
    [  1,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  0,884,  0,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 85,  1,  1,  1,  1,  1,  1],
    [  1, 30, 30, 21, 21, 85,  0, 85, 22, 22, 29, 29,  1],
    [  1, 27, 27, 32, 32,  1,  0,  1, 32, 32, 28, 28,  1],
    [  1,  1,  1,  1,  1,  1, 87,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}