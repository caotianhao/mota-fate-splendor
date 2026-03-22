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
    "afterBattle": {},
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