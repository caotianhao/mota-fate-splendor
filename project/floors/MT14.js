main.floors.MT14=
{
    "floorId": "MT14",
    "title": "主塔 14 层",
    "name": "主塔 14 层",
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
        "6,9": [
            {
                "type": "if",
                "condition": "(flag:Shop14===0)",
                "true": [
                    "\t[妖精,fairy]\b[up,null]竟然是少见的，出售钥匙的贪婪神龛，不知道该说你运气是好是坏。",
                    "\t[妖精,fairy]\b[up,null]这个区域的石头人拥有坚固属性，是非常难缠的魔物，要想以较低的消耗解决掉这类魔物的话，就必须要拼命提升攻防属性了。",
                    "\t[妖精,fairy]\b[up,null]不过别灰心，比起属性值，充足的钥匙才是让你能在魔塔里一方通行的重要因素。",
                    "\t[妖精,fairy]\b[up,null]好好权衡属性与钥匙之间的优劣，合理分配你为数不多的金币吧。",
                    {
                        "type": "setValue",
                        "name": "flag:Shop14",
                        "value": "1"
                    },
                    {
                        "type": "if",
                        "condition": "(flag:Shop4+flag:Shop14===1)",
                        "true": [
                            "全局商店已开启，按V可开启快捷商店。",
                            {
                                "type": "setValue",
                                "name": "flag:SHOP_GLOBAL_VALUE",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": []
            },
            {
                "type": "openShop",
                "id": "shop14",
                "open": true
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,233,233,233,  1, 27,  1, 29,  1, 30,  1, 28,  1],
    [  1, 34, 34, 34,  1,  0,216,  0,213,  0,255, 33,  1],
    [  1,  1, 82,  1,  1,  1, 81,  1, 82,  1, 81,  1,  1],
    [  1, 29, 21,218, 27,  1,218,  1,  0,218,  0, 28,  1],
    [  1,  1,  1,  1,  0, 81,  0,214,  0,  1, 81,  1,  1],
    [  1, 33,  1,  1,218,  1,213,  1,213,  1,  0, 34,  1],
    [  1, 28,277,  0,  0,277,  0, 81, 34, 81,214,  1,  1],
    [  1, 81,  1,213,  1,  1,  1,  1,  1,  1, 28, 21,  1],
    [  1, 81,  1,213,  1,  7,131,  8,  1,  1, 32, 27,  1],
    [  1,  0,  0,  0,  1, 32,  0, 34,  1,  1,  1, 82,  1],
    [  1, 88,  0,  0, 81,  0, 30,  0,215, 27,  0, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}