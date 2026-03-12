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
            },
            {
                "type": "vibrate",
                "direction": "horizontal",
                "time": 800,
                "speed": 10,
                "power": 10
            },
            "\t[勇士,hero]头好痛，好奇怪的感觉。",
            {
                "type": "hideStatusBar"
            },
            {
                "type": "changeFloor",
                "floorId": "EX10",
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
                "name": "hand",
                "loc": [
                    6,
                    5
                ]
            },
            "\t[勇士,hero]\b[down,null]开什么玩笑啊，明明是最低等级的龙，力量居然比黑铁顶尖的人类强出那么多。",
            "\t[勇士,hero]\b[down,null]生来就站在我们只能仰望的起点，真是让人嫉妒的种族啊！",
            {
                "type": "changePos",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    6,
                    7
                ]
            },
            {
                "type": "animate",
                "name": "sword",
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
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    6
                ]
            },
            "\t[勇士,hero]\b[down,null]唔啊！！！糟糕，大意了，硬生生吃了一记龙吼，唔！",
            "\t[勇士,hero]\b[down,null]耳孔在不停地往外冒血，听觉已经被剥夺了，但是这痛觉却无时无刻不在提醒我紧绷精神。",
            "\t[勇士,hero]\b[down,null]它看上去有点疲惫，看来龙吼的释放需要消耗这家伙相当的精力，机会！",
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    6,
                    7
                ]
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    6,
                    7
                ]
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    6,
                    7
                ]
            },
            "\t[勇士,hero]\b[down,null]（虽然听不见声音，不过这条龙现在一定在声嘶力竭地大喊大叫吧。）",
            "\t[勇士,hero]\b[down,null]（它看样子是被眼前弱小的人类逼急了，祭出作为杀手锏的粗壮尾巴，用力抽打着我的身体。）",
            "\t[勇士,hero]\b[down,null]（唔！！这家伙，在拼命挣扎！）",
            "\t[勇士,hero]\b[down,null]（动作太快了，根本没有机会回避。剑好像卡在这家伙的鳞片里了，没办法抽出来，力气也所剩无几。）",
            "\t[勇士,hero]\b[down,null]（已经没有退路了，再让它反抗下去的话，先一步倒下的一方必然是身为人类的我。必须要让这把剑砍的更深才行！）",
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    6,
                    7
                ]
            },
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    6,
                    7
                ]
            },
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    6,
                    7
                ]
            },
            "\t[勇士,hero]\b[down,null]（剑锋几乎砍到了这条龙的脊骨，不过剑身却被鳞片给磨断了。）",
            "\t[勇士,hero]\b[down,null]（它看上去活不了多久，我赢了！虽然代价是身负几乎连移动身体都办不到的重伤。）",
            "\t[勇士,hero]\b[down,null]（希望在部队那边的医疗兵发现我之前，不会再有其他龙族经过这里。）",
            {
                "type": "sleep",
                "time": 500,
                "noSkip": true
            },
            "\t[勇士,hero]\b[down,null]......！！",
            "\t[勇士,hero]\b[down,null]（它身体上的伤口正在以肉眼可见的速度复原。）",
            "\t[勇士,hero]\b[down,null]糟糕！贤者大人在攻打龙窟之前就有嘱咐过我们，龙族的恢复力十分惊人。",
            "\t[勇士,hero]\b[down,null]如果不彻底摧毁它们右心房的精核，就算造成再严重的伤害，也会迅速恢复如初。该死，我怎么会忘记这么重要的事情！",
            "\t[勇士,hero]\b[down,null]（那条龙圆睁着一双猩红的兽眼，恶狠狠地瞪着我这边，我从中窥见了最为原始的杀意。）",
            "\t[勇士,hero]\b[down,null]（看样子它很快就要恢复成战斗之前的状态了，必须得抢在它复原之前摧毁精核，不然的话我毫无疑问会被瞬间撕成碎片。）",
            "\t[勇士,hero]\b[down,null]（可是，我现在连起身的力气都没有，剑也在刚才的缠斗中报废了，手无寸铁。已经，没救了吗？）",
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    6,
                    7
                ]
            },
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    6,
                    7
                ]
            },
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    6,
                    7
                ]
            },
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    6,
                    7
                ]
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
            "没有退路，我就如象棋盘上的那一颗颗卒子，我生来就没有任何退路，只能前进。",
            "它似乎没有料到。浑身是血的几乎已经是一具尸体的弱小人类，竟然会大吼着扑向自己。",
            "我用拳头，肘部，膝盖......用尽一切有可能伤害到这家伙的手段，拼命的，不知多少次的击打着这条龙身上最薄弱的鳞甲。",
            "直到我的双手变得血肉模糊，直到我痛到感受不到疼痛，直到眼前的视野变成一片虚幻的红色。",
            "终于，龙号称坚不可摧的鳞甲上裂开了一道细纹。",
            "已经能隐约看见那颗埋藏在鳞甲下的精核了，可是我手脚的关节在刚才那番不要命的攻击下，似乎已经扭断，再也无法发力了。",
            "要在这里放弃吗？",
            "在龙窟这个战场上，我只是一个最不起眼的，被他们断定为“在任何战略活动中都能作为可以随意牺牲的消耗品”的黑铁级士兵。",
            "没人会在意我的死活。",
            "除了我自己！！！！！",
            "我要活下去！我一定要活下去给你们看！！",
            "失去了剑，我还有拳头！失去了拳头，我还有牙齿！失去了牙齿，我还有不服输的灵魂！！",
            "知道吗？兽性从来都不是你们这些畜生的专属武器！！",
            "面对着双眼发红犹如失心疯，压在自己身上用牙齿疯狂撕咬的，所谓弱小的人类。这条龙终于露出了恐惧的神色，它终于放下了高位生命体的自尊与骄傲，也扑到我身上拼命撕咬起来。",
            "一人，一龙，操弄着相同的武器，怀揣着同样想要活下去的强烈执念。",
            "不知过了多久，也许是几分钟几小时，在战役结束后我才从医疗兵口中得知，我与那条龙的缠斗持续了整整三天。",
            "在那漫长的三天里，我如同一台高效率高精度的机械，每时每刻都在用牙齿拼命撕咬它的身体。",
            "似乎在第二天的时候，它的精核就已经被我咬成碎渣给吞进了肚里，可那时的我除了扭曲的求生欲望以外，脑子里已经不剩下任何东西了。",
            "我赢了，我活下来了。",
            {
                "type": "changeFloor",
                "floorId": "MT10",
                "loc": [
                    6,
                    8
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
            "\t[妖精,fairy]\b[up,null]谢天谢地，你终于醒过来了。",
            "\t[勇士,hero]\b[up,null]我刚才怎么了？",
            "\t[妖精,fairy]\b[up,null]跟在0层的时候一样，毫无征兆的昏过去了。你是不是有什么特殊的疾病？低血糖之类的？",
            "\t[勇士,hero]\b[up,null]我不知道，我连自己叫什么都不知道。",
            "\t[妖精,fairy]\b[up,null]是吗，那说不定是战斗中被这怪物砸中头了。顺带一提，你昏倒的这段时间里，表情一直都很狰狞哦。",
            "\t[妖精,fairy]\b[up,null]就好像是在跟什么难缠的家伙拼死战斗似的。你梦到了什么东西？我有点好奇。",
            "\t[勇士,hero]\b[up,null]抱歉，我完全没有印象了。",
            "\t[妖精,fairy]\b[up,null]那算了......真没意思。以后不要随随便便昏倒哦，魔塔里的食尸系魔物可不少，要不是我刚才一直陪在你身边你就早没了。",
            "\t[勇士,hero]\b[up,null]这种事情好像不是我自己可以控制的吧？",
            "\t[妖精,fairy]\b[up,null]这我可管不着！嘛嘛！总之别在这种话题上纠缠太久了，赶紧前往下一个区域吧。"
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