main.floors.MT19=
{
    "floorId": "MT19",
    "title": "主塔 19 层",
    "name": "主塔 19 层",
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
    "events": {
        "6,3": [
            "\t[勇士,hero]（又是那个人类老人。）",
            "\t[勇士,hero]（跟上次相比，他身上的伤好像更多了。）",
            "\t[妖精,fairy]怎么又是你这个老叫花子！",
            "\t[老人,man]（老人面对妖精凶恶的眼神，唯唯诺诺低下了头。）",
            "\t[妖精,fairy]又脏又臭的，快滚开啦！",
            {
                "type": "move",
                "time": 500,
                "keep": true,
                "steps": [
                    "down:1"
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        3
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        4
                    ]
                ],
                "remove": true,
                "time": 500
            },
            "\t[老人,man]（老人后退一步，拖着残破的身体缓缓消失在了我们的视线中。）",
            "\t[勇士,hero]妖精，别对老人家这么无礼。",
            "\t[妖精,fairy]哼！我对脏东西的忍耐度为零。别管他了，继续前进吧！"
        ]
    },
    "changeFloor": {
        "3,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT19_6_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT19_6_9",
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
                "condition": "flag:door_MT19_6_9==2",
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
                        "name": "flag:door_MT19_6_9",
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 27,  1, 28,  1,  1, 88,  0,  1, 33,  1,233,  1],
    [  1, 27,215,  0,216,218,  0,  0,218, 21,216, 28,  1],
    [  1,  1,  1, 81,  1,  1,121,  1,  1, 81,  1, 82,  1],
    [  1,233, 22, 21,215,218,  0,255, 27,214,  0,  0,  1],
    [  1,  1,  1, 82,  1,  1, 81,  1,  1,  1,215,  1,  1],
    [  1,  0,255,  0,255,218,  0, 30,  1, 33, 34,  1,  1],
    [  1,222,  1,  1,  1,  1, 81,  1,  1,  1, 82,  1,  1],
    [  1, 21, 81, 33,  1,222, 34,222,  1, 28, 28, 29,  1],
    [  1,255,  1,  1,  1,  1, 85,  1,  1,  1,  1,255,  1],
    [  1,  0, 28,  1,  1, 22,  0, 21,  1,233,  1,255,  1],
    [  1, 27,  0, 87,  1,  0, 23,  0, 82, 27, 82, 22,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}