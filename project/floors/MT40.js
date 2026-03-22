main.floors.MT40=
{
    "floorId": "MT40",
    "title": "主塔 40 层",
    "name": "主塔 40 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "images": [],
    "ratio": 2,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "firstArrive": [
        {
            "type": "vibrate",
            "direction": "horizontal",
            "time": 700,
            "speed": 10,
            "power": 10
        },
        "\t[勇士,hero]\b[down,null]......",
        "\t[妖精,fairy]\b[down,null]喂，发生什么事了？你的脸色怎么突然变得这么差？",
        "\t[勇士,hero]\b[down,null]前方房间里的那个小头目，我好像曾经在哪里见过她。",
        "\t[妖精,fairy]\b[down,null]哈啊？你在开什么玩笑？你这可是第一次来到这个区域啊。",
        "\t[勇士,hero]\b[down,null]我不知道，我只是感觉她特别眼熟。",
        "\t[勇士,hero]\b[down,null]（那股从精魂宝石中吸收的记忆流，似乎又开始躁动起来了。）",
        {
            "type": "hideStatusBar"
        },
        {
            "type": "changeFloor",
            "floorId": "EX40",
            "loc": [
                9,
                12
            ],
            "direction": "up",
            "time": 600
        },
        {
            "type": "unfollow",
            "name": "yaojing.png"
        },
        {
            "type": "setHeroIcon",
            "name": "king.png"
        },
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up:3"
            ]
        },
        "\t[公主,princess]\b[up,null]......什么人？",
        "\t[魔王,redKing]\b[up,null]......",
        "\t[魔王,redKing]\b[up,null]（魔王从红袍中伸出左手，似是想要触碰监牢里囚禁着的公主，可下一秒，他仿佛意识到了什么，滞在她脸庞前两寸半的手如触电般慌忙收回。）",
        "\t[公主,princess]\b[up,null]喂，我说啊，至少你得让人质知道绑架她的人是谁吧？",
        "\t[魔王,redKing]\b[up,null]我是这座魔塔的主人，你叫我魔王就好。",
        "\t[公主,princess]\b[up,null]魔王，你们把我绑进这座塔的目的是什么？",
        "\t[魔王,redKing]\b[up,null]我们魔物是你们人类的死对头，你说身为魔物统领的我挟持身为人类公主的你想干什么？",
        "\t[公主,princess]\b[up,null]眼神一直在乱飘，演技真差劲，别装腔作势了，我知道你是不会伤害我的。",
        "\t[魔王,redKing]\b[up,null]为什么你敢这么断言？......我可是魔王啊？其他人类一听见我的名字都会浑身发颤。",
        "\t[魔王,redKing]\b[up,null]为什么你一介弱女子会如此冷静？",
        "\t[公主,princess]\b[up,null]在我十八岁诞辰的那晚，你也在场对吧？那时我亲耳听见你嘱咐你的手下们“下手越轻越好，要是伤到她一根毫毛，我就拿你们喂血影！”",
        "\t[公主,princess]\b[up,null]还有，这间用来囚禁我的监牢是你们临时修建的吧？......油漆跟腻子粉的味道还没有完全散去，明显是最近翻修过的。",
        "\t[公主,princess]\b[up,null]而且，这间牢房的家具......采光度......布局......都在尽力仿照我母后的房间，你们甚至还专门为我准备了一架崭新的钢琴。",
        "\t[公主,princess]\b[up,null]你们若是想害我，根本就没理由做到这种程度。",
        "\t[公主,princess]\b[up,null]现在可以告诉我你们真正的目的了吗？呆头呆脑的魔王大人？",
        "\t[魔王,redKing]\b[up,null]不瞒你说，我们魔塔势力最近刚经历了一场前所未有的苦战。",
        "\t[魔王,redKing]\b[up,null]超过半数的魔物战士死在了这场战斗中，各个区域头目的手下也死伤惨重，若是有其他势力在这个节骨眼上攻进塔内，我们的结局只有败亡。",
        "\t[魔王,redKing]\b[up,null]最近我安插在人类王国的眼线传来消息，贤者在暗地蓄积兵力，准备对魔塔发动总攻。",
        "\t[魔王,redKing]\b[up,null]为了阻止他的暴行，我们商讨了很久才得出了一个还算可行的提案。",
        "\t[公主,princess]\b[up,null]那就是抓我当人质，好让贤者不敢轻举妄动咯？",
        "\t[魔王,redKing]\b[up,null]......嗯，抱歉了公主，等我们魔物势力的兵力恢复如前之后，我会亲自把你完好无损的送回人类王国的。",
        "\t[公主,princess]\b[up,null]这样吗？比起这个，zeno，我又想吃吐司皮了。",
        "\t[魔王,redKing]\b[up,null]好，我这就帮你去厨房偷，......嗯？......",
        "\t[公主,princess]\b[up,null]我就知道是你。",
        "\t[魔王,redKing]\b[up,null]不，你认错人了。",
        "\t[公主,princess]\b[up,null]他跟你一样，也是个左撇子。",
        "\t[公主,princess]\b[up,null]他知道我喜欢弹钢琴。",
        "\t[公主,princess]\b[up,null]他知道我喜欢一个人待在母后的房间里发呆。",
        "\t[公主,princess]\b[up,null]他会在我半夜饿肚子的时候，溜进厨房替我偷来一大堆难嚼的吐司皮。",
        "\t[公主,princess]\b[up,null]与其让我相信他真的因为背叛王国护卫队而被处死......我宁愿相信，你就是他，你就是zeno。",
        "\t[魔王,redKing]\b[up,null]......",
        "\t[公主,princess]\b[up,null]为什么你要一声不响的离开我？你不是答应过我，会在我十八岁生日那天带我离开人类王国，远走高飞吗？",
        "\t[公主,princess]\b[up,null]为什么你会变成现在这个样子？",
        "\t[魔王,redKing]\b[up,null]你认错人了，我是被世间所有人惧怕与怨恨着的魔物之王，我不认识什么zeno，我的名字，就叫魔王。",
        "\t[公主,princess]\b[up,null]可以摘下面具，让我看看你的脸吗？",
        "\t[魔王,redKing]\b[up,null]......不行。",
        "\t[公主,princess]\b[up,null]为什么不行？你在心虚！",
        "\t[魔王,redKing]\b[up,null]我说不行就是不行。",
        "\t[公主,princess]\b[up,null]那我偏要！",
        {
            "type": "move",
            "loc": [
                9,
                7
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "down:1"
            ]
        },
        "\t[公主,princess]\b[up,null]怎么会......这样......？面具跟脸......完全连在一起了......为什么？",
        "\t[魔王,redKing]\b[up,null]......你还不明白吗？已经再也无法回到从前了。",
        "\t[魔王,redKing]\b[up,null]......所以，让我们舍弃掉那些过去的包袱，目视前方吧。",
        "\t[公主,princess]\b[up,null]......",
        {
            "type": "setBlock",
            "number": "N1630",
            "loc": [
                [
                    9,
                    8
                ]
            ],
            "floorId": "EX40"
        },
        {
            "type": "move",
            "loc": [
                9,
                8
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "left:3",
                "up:6"
            ]
        },
        "\t[公主,princess]\b[down,null]愣着干什么？呆子，还不搬个小板凳过来认真听。还有啊，该鼓掌的时候要鼓掌，不然我饶不了你！",
        "\t[魔王,redKing]\b[down,null]......",
        {
            "type": "changeFloor",
            "floorId": "MT40",
            "loc": [
                6,
                1
            ],
            "direction": "down",
            "time": 600
        },
        {
            "type": "follow",
            "name": "yaojing.png"
        },
        {
            "type": "setHeroIcon",
            "name": "brave_black.png"
        },
        {
            "type": "showStatusBar"
        },
        "\t[妖精,fairy]\b[down,null]喂喂，你没事吧？站着发了好半晌的呆，不管我怎么推你打你都没反应。",
        "\t[勇士,hero]\b[down,null]......",
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "down:1"
            ]
        },
        "\t[勇士,hero]\b[down,null]公主，你是公主吗？",
        "\t[妖精,fairy]\b[down,null]......！（难道说他回想起了那些往事吗？......不可能的，那段记忆明明早就被他自己给封印了。）",
        "\t[妖精,fairy]\b[down,null]什么公主？你在胡言乱语什么呢？",
        "\t[勇士,hero]\b[down,null]我不知道，我的头好痛......我不记得她的样子，也不记得她的名字，我只知道她对我来说很重要。",
        "\t[勇士,hero]\b[down,null]她究竟是什么人......为什么我一看到她，连心尖都在因为痛苦而发颤，纵然我和她素未谋面。",
        "\t[妖精,fairy]\b[down,null]振作起来勇士！你一定是中了这个区域头目的幻术！千万不要被这些混乱的记忆所迷惑啊！",
        "\t[妖精,fairy]\b[down,null]赶紧冷静下来，排除这些渗进内心的杂念！不然的话，你肯定会被她给杀掉的！",
        "\t[勇士,hero]\b[down,null]......",
        {
            "type": "animate",
            "name": "yongchang",
            "loc": [
                6,
                2
            ]
        },
        "\t[妖精,fairy]\b[down,null]怎样？你感觉好些了吗？",
        "\t[勇士,hero]\b[down,null]头疼的感觉完全消失了，那些乱七八糟的记忆也变模糊了......妖精，你对我做了什么？",
        "\t[妖精,fairy]\b[down,null]针对精神层面的基础治愈魔法而已，别谢我，要是你因为这种级别的幻术而倒下，那我们之前一起经历过的那些战斗岂不是都成了笑话？",
        "\t[勇士,hero]\b[down,null]原来是这样吗？......抱歉，看来我还需要多加修炼。",
        "\t[妖精,fairy]\b[down,null]（稍微施加了一点小手段，进一步加固了记忆锁的强度。）",
        "\t[妖精,fairy]\b[down,null]（但现在他的记忆已经接近“饱和”，我所做的这一切不过是延缓他完全觉醒的时机而已。）",
        "\t[妖精,fairy]\b[down,null]（为了让那位大人的计划顺利进行，我必须得再扇风点火一番，让他亲手杀掉公主的意识体才行。）",
        "\t[妖精,fairy]\b[down,null]继续前进吧，这里离塔顶已经不远了，一生都用不完的俸禄跟公主的芳心还在等着你呢。",
        "\t[勇士,hero]\b[down,null]......嗯。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,10": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,5": [
            {
                "type": "setBlock",
                "number": "princess",
                "loc": [
                    [
                        6,
                        5
                    ]
                ],
                "floorId": "MT40"
            },
            "\t[勇士,hero]\b[down,null]（......她轻声哭泣着，似乎没有注意到站在她面前的我。）",
            "\t[勇士,hero]\b[down,null]......这个哭声让我想起了一个人。",
            "\t[妖精,fairy]\b[down,null]不好！这是魔女蛊惑人心的哭声！勇士，快捂住耳朵，千万不要直视她的眼睛！",
            "\t[勇士,hero]\b[down,null]魔女吗......你究竟是谁？",
            "\t[勇士,hero]\b[down,null]（......她抬头看了我一眼，含泪的双眼猛然睁大，一张写满痛苦的丑脸变得更加扭曲可怖。）",
            "\t[勇士,hero]\b[down,null]（看到她这副痛苦而悲伤的样子，我的心脏居然感受到了一瞬间的刺痛。）",
            "\t[勇士,hero]\b[down,null]（一股不知从何而来的勇气驱使着我向前走去，朝她伸出了左手。）",
            "\t[勇士,hero]\b[down,null]......能告诉我，你的名字吗？",
            "\t[妖精,fairy]\b[down,null]喂！你疯了吗？离她这么近会被袭击的！",
            "\t[勇士,hero]\b[down,null]（面对我的反常举动，魔女的表情变得更加痛苦，泪水犹如决堤。）",
            "\t[勇士,hero]\b[down,null]......",
            "\t[勇士,hero]\b[down,null]（在我的手指触碰到她的那一刻，魔女突然躁动起来，她尖叫着起身扑向我。）",
            "\t[勇士,hero]\b[down,null]......",
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    6,
                    4
                ]
            },
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    6,
                    4
                ]
            },
            "\t[勇士,hero]\b[down,null]......",
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    6,
                    4
                ]
            },
            "\t[妖精,fairy]\b[down,null]你在发什么神经啊！你明明完全有机会躲开的！为什么要傻傻站在原地硬挨她的攻击！",
            "\t[勇士,hero]\b[down,null]我不想跟她战斗。",
            "\t[妖精,fairy]\b[down,null]哈啊？喂喂，不打败她的话就不能打开下个区域的通道了啊！你在想什么？",
            "\t[勇士,hero]\b[down,null]我知道，但我......真的不忍心对她下手。",
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "pickaxe",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "floorId": "MT40"
            },
            "\t[勇士,hero]\b[down,null]（在魔女拼命用身体撞击着我的时候，一个奇怪的东西从她裙中掉了下来，仔细一看......）",
            "\t[勇士,hero]\b[down,null]（是一把被折成两截的破墙镐。）",
            "\t[妖精,fairy]\b[down,null]是杰克的破墙镐......",
            "\t[妖精,fairy]\b[down,null]体型跟我差不多大小的女孩......拥有足以制服一个成年人类男性的怪力......以及，似乎对你非常了解......不会错了，她就是对我跟杰克施虐的凶手。",
            "\t[妖精,fairy]\b[down,null]这样一来所有的事情就都能说通了，她想方设法阻止你上楼，就是为了不让你来到这个区域打败自己。",
            "\t[妖精,fairy]\b[down,null]刚才她对你使用的那些幻术也是为了谋害你的性命......她甚至在刚才对你大打出手！勇士！你还在犹豫什么？你还有什么好犹豫的？！",
            "\t[勇士,hero]\b[down,null]（魔女似乎听懂了妖精的话，她停止对我的殴打，拼命摇着头。）",
            "\t[妖精,fairy]\b[down,null]勇士，快点动手啊！快点！",
            "\t[魔女,princess]\b[down,null]......ze......no......zeno......",
            "\t[魔女,princess]\b[down,null]......我......好想你......",
            {
                "type": "unfollow",
                "name": "yaojing.png"
            },
            {
                "type": "setBlock",
                "number": "fairy",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            {
                "type": "sleep",
                "time": 1000,
                "noSkip": true
            },
            "\t[勇士,hero]\b[down,null]......",
            "\t[勇士,hero]\b[down,null]............",
            "\t[勇士,hero]\b[down,null]..................",
            {
                "type": "changePos",
                "loc": [
                    6,
                    4
                ],
                "direction": "up"
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    3
                ]
            },
            "\t[妖精,fairy]\b[down,null]诶？",
            "\t[妖精,fairy]\b[down,null]喂！你砍错人了诶！痛痛痛......你是不是被这该死的魔女给蛊惑了神智，变得敌我不分了啊？",
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    3
                ]
            },
            "\t[妖精,fairy]\b[down,null]骗人的吧？这样砍下去的话，我会死的......",
            "\t[妖精,fairy]\b[down,null]这一路上，我一直陪伴着你，分担你的喜悦与悲伤，替你排忧解难。",
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    3
                ]
            },
            "\t[妖精,fairy]\b[down,null]......快点......冷静下来，回想起你跟我的那些点点滴滴......不要......被这个魔女给欺骗了......",
            "\t[勇士,hero]\b[down,null]不，我现在比任何时候都要冷静，清醒，多亏了你刚才那番拙劣的表演，让我看清了真相。",
            "\t[妖精,fairy]\b[down,null]哈啊？你在说什么啊？你脑子坏掉了吗？看来还得让我再对你用一次精神治疗才行。",
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    3
                ]
            },
            "\t[勇士,hero]\b[down,null]（妖精的翅膀被连根斩裂，失去了平衡的她摔在地上，抬眼用难以形容的恶毒眼神死盯着我。）",
            "\t[妖精,fairy]\b[down,null]为什么......为什么要对我出手？我做错了什么？",
            "\t[勇士,hero]\b[down,null]在三区趁我昏倒，拿走了镐头并下楼劫持杰克，将他关进地下层的暗房里不断折磨。",
            "\t[勇士,hero]\b[down,null]为了打消我对你的疑惑，你甚至故意弄伤了自己的翅膀，试图让自己站在跟杰克相同的受害者立场上......真亏你下的去手啊。",
            "\t[勇士,hero]\b[down,null]把镐头被盗一事故意嫁祸给这个无辜的魔女也是......我猜你不停催促我上楼的目的，就是想让我亲手杀了她吧？",
            "\t[妖精,fairy]\b[down,null]你是从什么时候开始怀疑我的？",
            "\t[勇士,hero]\b[down,null]从吸收掉那颗精魂宝石里储存的记忆流以后，我就不再是任你摆布的棋子了。",
            "\t[妖精,fairy]\b[down,null]呵呵......那颗我无法干涉跟观测的精魂宝石，果然有古怪吗？",
            "\t[勇士,hero]\b[down,null]妖精，你到底是什么人？不惜将我们所有人愚弄于鼓掌之中......你究竟有什么目的？",
            "\t[妖精,fairy]\b[down,null]呵呵呵呵......没想到，居然被你从这个无限的轮回中找到了突破口，不过很可惜。",
            "\t[妖精,fairy]\b[down,null]到此为止了，我将会在这里杀掉你，然后再狠狠地加固一次你的记忆锁。",
            "\t[妖精,fairy]\b[down,null]这样一来，这座塔里的魔物跟机关便会重置。",
            "\t[妖精,fairy]\b[down,null]而我将会跟再次失去所有记忆的你重新在0层相遇，共同踏上向塔顶进发的冒险之路。",
            "\t[勇士,hero]\b[down,null]让我失忆的人果然也是你吗？等等，重置是什么意思？无限轮回又是什么意思？",
            "\t[妖精,fairy]\b[down,null]嘻嘻......带着这些你永世无法解开的疑问，前往下一次......也就是794次轮回吧！",
            "\t[妖精,fairy]\b[down,null]为了达成那位大人的计划！让我们共同努力吧！魔王zeno！",
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    3
                ],
                "time": 500,
                "keep": true,
                "async": true,
                "steps": [
                    "up:1"
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    5
                ],
                "time": 500,
                "keep": true,
                "async": true,
                "steps": [
                    "up:2"
                ]
            },
            {
                "type": "waitAsync"
            },
            "\t[勇士,hero]\b[down,null]（魔女愤怒地嚎叫着，她冲上前去撞开了妖精，打断了她即将完成的施法，展开双手挡在我面前的她，让我的眼眶感觉有些发酸。）",
            "\t[魔女,princess]\b[down,null]......ze......no......不要伤害他......！！",
            "\t[勇士,hero]\b[down,null]你，是她没错吧？",
            "\t[妖精,fairy]\b[down,null]可恶......不愧是公主执念产生意识体之一，你还真是顽强啊......不过......",
            "\t[妖精,fairy]\b[down,null]反正这次轮回也已经基本以失败告终了，不管是谁杀掉你都无所谓了。",
            "\t[妖精,fairy]\b[down,null]所以，来尝尝这个吧！",
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    3
                ]
            },
            "\t[魔女,princess]\b[down,null]......ze......no......",
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
            "\t[勇士,hero]\b[down,null]......死？",
            "\t[勇士,hero]\b[down,null]（魔女在我面前化为了一滩血水，别说是尸体，她连痕迹都不剩。）",
            "\t[勇士,hero]\b[down,null]不要......",
            "\t[勇士,hero]\b[down,null]我再也不想看到心爱的人死在自己面前了。",
            {
                "type": "sleep",
                "time": 500,
                "noSkip": true
            },
            {
                "type": "hideStatusBar"
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
                "type": "setHeroIcon",
                "name": "brave.png"
            },
            {
                "type": "changeFloor",
                "floorId": "EX402",
                "loc": [
                    6,
                    6
                ],
                "direction": "up",
                "time": 600
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    5
                ]
            },
            {
                "type": "animate",
                "name": "sword",
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
            "\t[魔王,redKing]\b[down,null]终于结束了。",
            "\t[魔王,redKing]\b[down,null]这具充溢着罪恶的身躯终于化为了尘土。",
            "\t[魔王,redKing]\b[down,null]这明明是最完美的结局，为什么你们都在流泪？",
            "\t[勇者,hero]\b[down,null]......",
            "\t[魔王,redKing]\b[down,null]快带这丫头回到她的故乡吧......这些天她真是差点把我折腾死。",
            "\t[魔王,redKing]\b[down,null]不过......跟她一起度过的这些日子，倒也是我这不怎么光彩的一生中最快乐的时光。",
            "\t[魔王,redKing]\b[down,null]就这样结束吧......再见了。",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        5
                    ]
                ],
                "floorId": "EX402",
                "remove": true,
                "time": 500
            },
            "\t[公主,princess]\b[down,null]不要！不要消失啊！",
            "\t[公主,princess]\b[down,null]求求你......不要丢下我一个人！",
            "\t[公主,princess]\b[down,null]为什么......为什么啊啊啊啊！",
            "\t[勇者,hero]\b[down,null]......",
            "\t[勇者,hero]\b[down,null].....公主大人，跟我回去吧。",
            "\t[勇者,hero]\b[down,null]大家都很担心你。",
            "\t[公主,princess]\b[down,null]......",
            {
                "type": "move",
                "loc": [
                    6,
                    4
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "right:4"
                ]
            },
            {
                "type": "move",
                "loc": [
                    10,
                    4
                ],
                "time": 15,
                "steps": [
                    "down:8"
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
            {
                "type": "setHeroIcon",
                "name": "brave_black.png"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "floorId": "MT40",
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "floorId": "MT40",
                "remove": true
            },
            {
                "type": "setBlock",
                "number": "fairy",
                "loc": [
                    [
                        6,
                        3
                    ]
                ],
                "floorId": "MT40"
            },
            {
                "type": "changeFloor",
                "floorId": "MT40",
                "loc": [
                    6,
                    4
                ],
                "direction": "up",
                "time": 600
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            {
                "type": "showStatusBar"
            },
            "\t[妖精,fairy]\b[down,null]好了，下一个就是你了。",
            "\t[妖精,fairy]\b[down,null]乖乖被我封印记忆，然后堕入下一次轮回吧！",
            "\t[勇士,hero]\b[down,null]......",
            "\t[勇士,hero]\b[down,null]......我的名字叫zeno，我是骁勇善战的黑铁勇士，也是罪大恶极的最强魔王。",
            "\t[勇士,hero]\b[down,null]我跟公主，其实早就已经死掉了，而魔塔，也在圣水被拿走之后倒塌了。",
            "\t[妖精,fairy]\b[down,null]哦？看来你全部都回想起来了啊，可惜，下一秒你就会完全忘掉这些事情了。",
            "\t[勇士,hero]\b[down,null]可以告诉我，我现在所面对的这些本该死去的怪物，这座本该已经成为一堆废墟的魔塔......以及本该不复存在的我，究竟是怎么一回事吗？",
            "\t[妖精,fairy]\b[down,null]反正你的记忆很快就会被删得一干二净，稍微给你透露一些真相也无妨。",
            "\t[妖精,fairy]\b[down,null]这座魔塔里的所有事物，包括你......一切都是虚幻的意识体。",
            "\t[妖精,fairy]\b[down,null]那天魔塔倒塌之前，公主为你坠楼殉情，你迫切想要拯救她的执念跟她想要永远跟你在一起的执念相互交织，形成了这个无限循环的意识空间。",
            "\t[勇士,hero]\b[down,null]为什么这个意识空间里会有数量如此众多的魔物？",
            "\t[妖精,fairy]\b[down,null]你应该知道自己是通过稀有勇者体质吸收无数敌人的灵魂能量，才会成长到魔王这一步的。",
            "\t[妖精,fairy]\b[down,null]在你被勇者杀死后，你的灵魂能量分为两部分，一部分是现在的你，曾经的黑铁勇士zeno，另一部分则是那些曾经被你杀死的魔物们。",
            "\t[妖精,fairy]\b[down,null]而那些镇守在每个区域最后关卡的头目，则是关系到你每个人生转折点的强敌。",
            "\t[勇士,hero]\b[down,null]那......无限循环又是怎么一回事？",
            "\t[妖精,fairy]\b[down,null]这个意识空间是以你们二人的执念为苗床而诞生的，公主的执念是跟你永远在一起，正是她潜意识里的这个想法让你的灵魂被永远困在这个空间里。",
            "\t[妖精,fairy]\b[down,null]而你的执念则是拯救她，这会导致你一直一直无数次向顶层进攻，然后因为种种原因死在半路上。",
            "\t[妖精,fairy]\b[down,null]每当你死亡后，你之前击杀并吸收的那些魔物灵魂将会被再次释放，回归原位，而你的灵魂将会回到起点，也就是0层。",
            "\t[勇士,hero]\b[down,null]同时，我也会因为灵魂能量的释放而失去大部分的记忆......对吧？",
            "\t[妖精,fairy]\b[down,null]但是这个记忆丢失是很不彻底的，还残留着一部分上一周目记忆的你会导致这个意识空间产生崩坏，我的任务，就是在每次重置后把你的记忆删光。",
            "\t[勇士,hero]\b[down,null]妖精，你究竟是什么人？",
            "\t[妖精,fairy]\b[down,null]无可奉告，好了，我说的已经够多了。",
            "\t[妖精,fairy]\b[down,null]真想不通为什么我要跟你白费这么多口舌？大概是期待看到你得知真相后崩溃的样子？可惜......你现在的表情，让我很失望。",
            "\t[妖精,fairy]\b[down,null]嘻嘻，我们0层见。",
            {
                "type": "sleep",
                "time": 500,
                "noSkip": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    3
                ]
            },
            "\t[妖精,fairy]\b[down,null]......唔！什么人？",
            {
                "type": "setBlock",
                "number": "man",
                "loc": [
                    [
                        5,
                        1
                    ]
                ],
                "time": 800
            },
            "\t[老人,man]\b[down,null]趁现在！勇士，砍下她的脑袋！",
            {
                "type": "animate",
                "name": "sword",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    3
                ]
            },
            "\t[妖精,fairy]\b[down,null]......你......竟敢......我不会......放过你们的......等着瞧吧......",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        3
                    ]
                ],
                "floorId": "MT40",
                "remove": true,
                "time": 800
            },
            {
                "type": "moveHero",
                "time": 800,
                "steps": [
                    "up:1"
                ]
            },
            "\t[勇士,hero]\b[down,null]多谢相助......等等，你不是之前那个老人家吗？不对，我记得你的眼睛跟嘴巴明明都是被钢丝绞合的......",
            {
                "type": "setBlock",
                "number": "thief",
                "loc": [
                    [
                        7,
                        1
                    ]
                ],
                "time": 800
            },
            "\t[杰克,thief]\b[down,null]多亏你缠住妖精这么久，我才有足够多的时间替老人解除这个诅咒。",
            "\t[勇士,hero]\b[down,null]......诅咒？",
            "\t[杰克,thief]\b[down,null]没错，我刚才在暗房里寻找的东西，就是用来帮他解除诅咒的各类道具，那间暗房则是妖精平时用来囚禁我们的场所。",
            "\t[勇士,hero]\b[down,null]跟这个意识空间里的其他事物不同，你们拥有自己独立的思想，你们到底是什么人？妖精为什么要这样对待你们？",
            "\t[老人,man]\b[down,null]现在妖精在这个空间的意识体已经暂时死亡，无法实时监测我们的精神，杰克，我们可以畅所欲言了。",
            "\t[杰克,thief]\b[down,null]呼，能够自由发言的感觉，真是久违啊。",
            "\t[老人,man]\b[down,null]zeno，你现在应该已经知道自己的身世，以及这座塔的由来了吧？",
            {
                "type": "sleep",
                "time": 500,
                "noSkip": true
            },
            "\t[勇士,hero]\b[down,null]嗯。",
            "\t[老人,man]\b[down,null]有一点我需要补充一下，这个意识空间并不是单靠你跟公主的执念堆砌而成的，你跟她的执念只能算容器里的水。",
            "\t[老人,man]\b[down,null]而真正的容器，也就是你现在所处的意识空间，其实是魔塔本身的执念。",
            "\t[勇士,hero]\b[down,null]嗯？执念属于灵魂能量的一种存在形式，但魔塔这种死物按理来说是没有灵魂的啊？",
            "\t[老人,man]\b[down,null]实则不然，魔塔虽然没有生命，但它在漫长悠久的岁月演化中，逐渐拥有了独立的自我意识，也就拥有了灵魂。",
            "\t[老人,man]\b[down,null]它在这数百年来默默见证了无数次种族之争，也见证了无数勇者救公主的老套戏码......但魔王跟公主的羁绊，它还是第一次见到。",
            "\t[老人,man]\b[down,null]你与公主之间的真情打动了魔塔，所以它决定赋予你们二人一次新的生命。",
            "\t[老人,man]\b[down,null]虽然魔塔倒塌，但魔塔的意识却没有磨灭，它创造了这个意识空间，将你们二人的执念与剩余的灵魂能量吸纳至此，也就是为了考验你们。",
            "\t[老人,man]\b[down,null]当你成功到达塔顶救出公主，这个无限轮回就会结束，而你跟公主则会重获新生。",
            "\t[勇士,hero]\b[down,null]可是，公主刚才不是已经惨遭妖精的毒手了吗？",
            "\t[老人,man]\b[down,null]那家伙不是公主，她是公主执念体的一部分，代表公主心中的全部负面能量。",
            "\t[老人,man]\b[down,null]真正的公主意识体还在塔顶等着你的拯救，放心吧，现状还不算太糟。",
            "\t[勇士,hero]\b[down,null]我现在最想知道的是，妖精是谁？她在这个意识空间中到底扮演着怎样的角色？",
            "\t[老人,man]\b[down,null]她不是属于这个意识空间的人，准确来说，她是外来者。",
            "\t[杰克,thief]\b[down,null]所以她能自由干涉这个意识空间里的大部分事物，甚至是检测我跟老人这两个纯粹意识体的精神世界。",
            "\t[杰克,thief]\b[down,null]但即便是她也有无法观测跟干涉的事物，比如那颗存放在-20层的精魂宝石。",
            "\t[老人,man]\b[down,null]没错，因为她能力有限，只能做到干涉跟观测到原本存在于这个意识空间内的事物。",
            "\t[老人,man]\b[down,null]而那颗精魂宝石是跟随着你的执念一同来到这个意识空间里的东西，所以她无法观测亦无法干涉。",
            "\t[勇士,hero]\b[down,null]那颗精魂宝石里储存着我跟公主的珍贵回忆，如果我没有捡起它的话，估计我现在还蒙在鼓里吧。",
            "\t[杰克,thief]\b[down,null]这是一场赌局，我故意让妖精检测到我“用镐头挖开零层的墙壁，让你知道这座魔塔的真相”的想法。",
            "\t[杰克,thief]\b[down,null]一旦她认为我的想法对自己的计划不利，她就会把我拉进地下层的暗房里疯狂施虐，以此磨钝我反抗这不公命运的心。",
            "\t[杰克,thief]\b[down,null]这次也不例外，她抢走了镐头，拉着我进地下层，幸亏我用了点小手段让你找到了我的行踪。",
            "\t[勇士,hero]\b[down,null]是那把遗落在16层的绿钥匙，以及16层故意留下的血迹吧？",
            "\t[杰克,thief]\b[down,null]是的，妖精在每次对我们施虐的过程中，为了防止意识体死亡导致意识空间发生崩坏的情况，会在我们濒死之际用治愈魔法拉回一口气。",
            "\t[杰克,thief]\b[down,null]如此反复，她的魔力槽就会见底，而我也有充分的理由提醒你去地下二区寻找那颗储存着珍贵记忆的精魂宝石。",
            "\t[勇士,hero]\b[down,null]多谢了兄弟，真是难为你了。",
            "\t[老人,man]\b[down,null]没事，我们存在的意义即是引导你走上正途，为了达到这个目的，不管遭受怎样残忍的对待都无所谓。",
            "\t[勇士,hero]\b[down,null]怪不得妖精会各种针对你们，话说回来，你们到底是什么人？为什么要帮我？",
            "\t[杰克,thief]\b[down,null]我是魔塔意识的具象化，开辟者。",
            "\t[老人,man]\b[down,null]我是魔塔意识的具象化，告诫者。",
            "\t[杰克,thief]\b[down,null]我们的任务是引导你突破这个勇士救公主的无限轮回，让你们离开这个意识的囚牢，迎来新生。",
            "\t[老人,man]\b[down,null]在这次轮回中，你已经知悉了大部分的真相，没有了妖精那家伙的干扰，你一定能比之前走的更远，甚至是到达塔顶。",
            "\t[勇士,hero]\b[down,null]杰克，老人家，你们能告诉我，魔塔的顶层，究竟有什么东西在等待着我？",
            "\t[勇士,hero]\b[down,null]这个......我们不能告诉你，也算是考验中的一部分吧，对不住了兄弟。",
            {
                "type": "setBlockOpacity",
                "loc": [
                    [
                        5,
                        1
                    ]
                ],
                "opacity": 0.3,
                "time": 1200,
                "async": true
            },
            {
                "type": "setBlockOpacity",
                "loc": [
                    [
                        7,
                        1
                    ]
                ],
                "opacity": 0.3,
                "time": 1200,
                "async": true
            },
            {
                "type": "waitAsync"
            },
            "\t[勇士,hero]\b[down,null]等一下......你们的身体，好像正在逐渐消失。",
            "\t[老人,man]\b[down,null]因为意识空间判定我们已经完成了自己的任务，我们将会被像数据冗余一样被自动清除，最后，祝你能够早日脱离这个无尽的轮回。",
            "\t[杰克,thief]\b[down,null]接下来你将独自一人踏上旅途，面对最后一个区域的挑战，你能交上一份怎样的答卷？",
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        1
                    ]
                ],
                "remove": true,
                "time": 800,
                "async": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        1
                    ]
                ],
                "remove": true,
                "time": 800,
                "async": true
            },
            {
                "type": "waitAsync"
            },
            "\t[勇士,hero]\b[down,null]......",
            {
                "type": "sleep",
                "time": 520,
                "noSkip": true
            },
            "\t[勇士,hero]\b[down,null]等我。",
            {
                "type": "openDoor",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    5,
                    9
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    9
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 21,  1,1591,  1,  0, 88,  0,  1,1591,  1, 22,  1],
    [  1,1369,  1,1369, 82,1366,  0,1366, 82,1369,  1,1368,  1],
    [  1,1366,570,569,  1,  1,773,  1,  1,528,249,1367,  1],
    [  1,  1, 81,  1,  1,  1, 83,  1,  1,  1, 82,  1,  1],
    [  1,1270,1366,1270,  1,  0,251,  0,  1,1277,1367,1277,  1],
    [  1,  1,1366,  1,  1,  0,  0,  0,  1,  1,1367,  1,  1],
    [  1,  1,  1,  1,  1,  1, 85,  1,  1,  1,  1,  1,  1],
    [  1,1270,  1, 21, 21,  1,  0,  1, 22, 22,  1,1277,  1],
    [  1,1284,1291,1367,1367, 85,  0, 85,1366,1366,1291,1284,  1],
    [  1,  1,  1,  1,  1,  1, 87,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}