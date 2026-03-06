///<reference path='../runtime.d.ts'/>
var functions_d6ad677b_427a_4623_b50f_a445a3b0ef8a =
{
	"events": {
		"resetGame": function (hero, hard, floorId, maps, values) {
			core.clearStatus();
			core.status = core.clone(core.initStatus, function (name) {
				return name != 'hero' && name != 'maps';
			});
			core.control._bindRoutePush();
			core.status.played = true;
			core.status.hero = core.clone(hero);
			window.hero = core.status.hero;
			window.flags = core.status.hero.flags;
			core.events.setHeroIcon(core.status.hero.image, true);
			core.control._initStatistics(core.animateFrame.totalTime);
			core.status.hero.statistics.totalTime = core.animateFrame.totalTime =
				Math.max(core.status.hero.statistics.totalTime, core.animateFrame.totalTime);
			core.status.hero.statistics.start = null;
			core.status.hard = hard || "";
			core.status.floorId = floorId;
			core.status.maps = maps;
			core.maps._resetFloorImages();
			core.material.enemys = core.enemys.getEnemys();
			core.material.items = core.items.getItems();
			core.values = core.clone(core.data.values);
			for (var key in values || {})
				core.values[key] = values[key];
			core.flags = core.clone(core.data.flags);
			var globalFlags = core.getFlag("globalFlags", {});
			for (var key in globalFlags)
				core.flags[key] = globalFlags[key];
			core._init_sys_flags();
			core.resize();
			if (core.hasFlag('hideStatusBar'))
				core.hideStatusBar(core.hasFlag('showToolbox'));
			else
				core.showStatusBar();
			core.dom.musicBtn.style.display = 'none';
		},
		"win": function (reason, norank, noexit) {
			// core.status.hero.hp += 2 * core.getRealStatus('atk') + 5 * core.itemCount('yellowKey');
			if (noexit) {
				core.status.extraEvent = core.clone(core.status.event);
			}

			core.ui.closePanel();
			var replaying = core.isReplaying();
			if (replaying) core.stopReplay();
			core.waitHeroToStop(function () {
				if (!noexit) {
					core.clearMap('all');
					core.deleteAllCanvas();
					core.dom.gif2.innerHTML = "";
				}
				reason = core.replaceText(reason);
				core.drawText([
					"\t[" + (reason || "恭喜通关") + "]你的分数是${status:hp}。"
				], function () {
					core.events.gameOver(reason || '', replaying, norank);
				})
			});
		},
		"lose": function (reason) {
			core.ui.closePanel();
			var replaying = core.isReplaying();
			core.stopReplay();
			core.waitHeroToStop(function () {
				core.drawText([
					"\t[" + (reason || "结局1") + "]你死了。\n如题。"
				], function () {
					core.events.gameOver(null, replaying);
				});
			})
		},
		"changingFloor": function (floorId, heroLoc) {
			var currentId = core.status.floorId || null;
			var fromLoad = core.hasFlag('__fromLoad__');
			var isFlying = core.hasFlag('__isFlying__');
			if (!fromLoad && !(isFlying && currentId == floorId)) {
				if (!core.hasFlag("__leaveLoc__")) core.setFlag("__leaveLoc__", {});
				if (currentId != null) core.getFlag("__leaveLoc__")[currentId] = core.clone(core.status.hero.loc);
			}
			if (core.autoRemoveMaps) core.autoRemoveMaps(floorId);
			core.maps.resizeMap(floorId);
			heroLoc.direction = core.turnDirection(heroLoc.direction);
			core.status.hero.loc = heroLoc;
			if (!fromLoad) {
				core.extractBlocks(floorId);
				core.status.maps[floorId].blocks.forEach(function (block) {
					if (block.disable && core.enemys.hasSpecial(block.event.id, 23)) {
						block.disable = false;
						core.setMapBlockDisabled(floorId, block.x, block.y, false);
						core.maps._updateMapArray(floorId, block.x, block.y);
					}
				});
				core.control.gatherFollowers();
			}
			core.drawMap(floorId);
			if (core.status.maps[floorId].bgm) {
				var bgm = core.status.maps[floorId].bgm;
				if (bgm instanceof Array) bgm = bgm[Math.floor(Math.random() * bgm.length)]; // 多个bgm则随机播放一个
				if (!core.hasFlag("__bgm__")) core.playBgm(bgm);
			} else if (fromLoad && !core.hasFlag("__bgm__")) {
				core.pauseBgm();
			}
			var color = core.getFlag('__color__', null);
			if (!color && core.status.maps[floorId].color)
				color = core.status.maps[floorId].color;
			core.clearMap('curtain');
			core.status.curtainColor = color;
			if (color) core.fillRect('curtain', 0, 0, core._PX_ || core.__PIXELS__, core._PY_ || core.__PIXELS__, core.arrayToRGBA(color));
			var weather = core.getFlag('__weather__', null);
			if (!weather && core.status.maps[floorId].weather)
				weather = core.status.maps[floorId].weather;
			if (weather)
				core.setWeather(weather[0], weather[1]);
			else core.setWeather();
		},
		"afterChangeFloor": function (floorId) {
			// 转换楼层结束的事件；此函数会在整个楼层切换完全结束后再执行
			// floorId是切换到的楼层

			// 如果是读档，则进行检查（是否需要恢复事件）
			if (core.hasFlag('__fromLoad__')) {
				core.events.recoverEvents(core.getFlag("__events__"));
				core.removeFlag("__events__");
			} else {
				core.insertAction(core.floors[floorId].eachArrive);

				if (!core.hasVisitedFloor(floorId)) {
					core.insertAction(core.floors[floorId].firstArrive);
					core.visitFloor(floorId);
				}
			}
		},
		"flyTo": function (toId, callback) {
			var fromId = core.status.floorId;
			if (!core.status.maps[fromId].canFlyFrom || !core.status.maps[toId].canFlyTo || !core.hasVisitedFloor(toId)) {
				core.playSound('操作失败');
				core.drawTip("无法飞往" + core.status.maps[toId].title + "！", 'fly');
				return false;
			}
			var stair = null,
				loc = null;
			if (core.flags.flyRecordPosition) {
				loc = core.getFlag("__leaveLoc__", {})[toId] || null;
			}
			if (core.status.maps[toId].flyPoint != null && core.status.maps[toId].flyPoint.length == 2) {
				stair = 'flyPoint';
			}
			if (stair == null && loc == null) {
				var fromIndex = core.floorIds.indexOf(fromId),
					toIndex = core.floorIds.indexOf(toId);
				var stair = fromIndex <= toIndex ? "downFloor" : "upFloor";
				if (fromIndex == toIndex && core.status.maps[fromId].underGround) stair = "upFloor";
			}

			core.status.route.push("fly:" + toId);
			core.ui.closePanel();
			core.setFlag('__isFlying__', true);
			core.changeFloor(toId, stair, loc, null, function () {
				core.removeFlag("__isFlying__");
				if (callback) callback();
			});

			return true;
		},
		"beforeBattle": function (enemyId, x, y) {
			if (x != null && y != null) {
				var index = x + "," + y,
					cache = core.status.checkBlock.cache[index] || {},
					guards = cache.guards || [];
				if (guards.length > 0) {
					core.setFlag("__guards__" + x + "_" + y, guards);
					var actions = [{ "type": "playSound", "name": "跳跃" }];
					guards.forEach(function (g) {
						core.push(actions, { "type": "jump", "from": [g[0], g[1]], "to": [x, y], "time": 300, "keep": false, "async": true });
					});
					core.push(actions, [
						{ "type": "waitAsync" },
						{ "type": "setBlock", "number": enemyId, "loc": [[x, y]] },
						{ "type": "battle", "loc": [x, y] }
					]);
					core.insertAction(actions);
					return false;
				}
			}
			return true;
		},
		"afterBattle": function (enemyId, x, y) {
			var enemy = core.material.enemys[enemyId];
			var special = enemy.special;
			var animate = 'hand';
			var equipId = core.getEquip(0);
			if (equipId && (core.material.items[equipId].equip || {}).animate)
				animate = core.material.items[equipId].equip.animate;
			if (!(core.material.animates[animate] || {}).se)
				core.playSound('attack.mp3');
			if (x != null && y != null)
				core.drawAnimate(animate, x, y);
			else
				core.drawHeroAnimate(animate);

			var damageInfo = core.getDamageInfo(enemyId, null, x, y) || {};
			var damage = damageInfo.damage;
			var turn = damageInfo.turn;
			if (damage == null || damage >= core.status.hero.hp) {
				core.status.hero.hp = 0;
				core.updateStatusBar(false, true);
				core.events.lose('战斗失败');
				return;
			}

			core.status.hero.hp -= damage;
			core.status.hero.statistics.battleDamage += damage;
			core.status.hero.statistics.battle++;

			var guards = [];
			if (x != null && y != null) {
				guards = core.getFlag("__guards__" + x + "_" + y, []);
				core.removeFlag("__guards__" + x + "_" + y);
			}

			// 获得金币
			var money = guards.reduce(function (curr, g) {
				return curr + core.material.enemys[g[2]].money;
			}, core.getEnemyValue(enemy, "money", x, y));
			if (core.hasItem('coin')) money *= 2; // 幸运金币：双倍
			if (core.hasFlag('curse')) money = 0; // 诅咒效果
			core.status.hero.money += money;
			core.status.hero.statistics.money += money;

			// 获得经验
			var exp = guards.reduce(function (curr, g) {
				return curr + core.material.enemys[g[2]].exp;
			}, core.getEnemyValue(enemy, "exp", x, y));
			if (core.hasFlag('curse')) exp = 0;
			core.status.hero.exp += exp;
			core.status.hero.statistics.exp += exp;

			var hint = "打败 " + core.getEnemyValue(enemy, "name", x, y);
			if (core.flags.statusBarItems.indexOf('enableMoney') >= 0)
				hint += '，' + core.getStatusLabel('money') + '+' + money; // hint += "，金币+" + money;
			if (core.flags.statusBarItems.indexOf('enableExp') >= 0)
				hint += '，' + core.getStatusLabel('exp') + '+' + exp; // hint += "，经验+" + exp;
			core.drawTip(hint, enemy.id);

			if (core.enemys.hasSpecial(special, 12)) {
				core.triggerDebuff('get', 'poison');
			}
			if (core.enemys.hasSpecial(special, 13)) {
				core.triggerDebuff('get', 'weak');
			}
			if (core.enemys.hasSpecial(special, 14)) {
				core.triggerDebuff('get', 'curse');
			}
			// 仇恨怪物将仇恨值减半
			if (core.enemys.hasSpecial(special, 17)) {
				core.setFlag('hatred', Math.floor(core.getFlag('hatred', 0) / 2));
			}
			if (core.enemys.hasSpecial(special, 19)) {
				core.status.hero.statistics.battleDamage += core.status.hero.hp - 1;
				core.status.hero.hp = 1;
			}
			if (core.enemys.hasSpecial(special, 21)) {
				core.status.hero.atk -= (enemy.atkValue || 0);
				core.status.hero.def -= (enemy.defValue || 0);
				if (core.status.hero.atk < 0) core.status.hero.atk = 0;
				if (core.status.hero.def < 0) core.status.hero.def = 0;
			}
			core.setFlag('hatred', core.getFlag('hatred', 0) + core.values.hatred);

			if (core.flags.statusBarItems.indexOf('enableSkill') >= 0) {
				var skill = core.getFlag('skill', 0);
				if (skill == 1) {
					core.status.hero.mana -= 5;
				}
				core.setFlag('skill', 0);
				core.setFlag('skillName', '无');
			}

			var todo = [];
			var point = guards.reduce(function (curr, g) {
				return curr + core.material.enemys[g[2]].point;
			}, core.getEnemyValue(enemy, "point", x, y)) || 0;
			if (core.flags.enableAddPoint && point > 0) {
				core.push(todo, [{ "type": "insert", "name": "加点事件", "args": [point] }]);
			}
			if (core.status.floorId != null) {
				core.push(todo, core.floors[core.status.floorId].afterBattle[x + "," + y]);
			}
			core.push(todo, enemy.afterBattle);
			if (todo.length > 0) core.insertAction(todo, x, y);

			delete ((flags.enemyOnPoint || {})[core.status.floorId] || {})[x + "," + y];
			if (core.getBlock(x, y) != null) {
				// 检查是否是重生怪物；如果是则仅隐藏不删除
				if (core.hasSpecial(enemy.special, 23)) {
					core.hideBlock(x, y);
				} else {
					core.removeBlock(x, y);
				}
			} else {
				core.updateStatusBar();
			}
			if (core.status.event.id == null)
				core.continueAutomaticRoute();
			else
				core.clearContinueAutomaticRoute();

		},
		"afterOpenDoor": function (doorId, x, y) {
			// 开一个门后触发的事件

			var todo = [];
			// 检查该点的开门后事件
			if (core.status.floorId) {
				core.push(todo, core.floors[core.status.floorId].afterOpenDoor[x + "," + y]);
			}
			// 检查批量开门事件
			var door = core.getBlockById(doorId);
			if (door && door.event.doorInfo) {
				core.push(todo, door.event.doorInfo.afterOpenDoor);
			}

			if (todo.length > 0) core.insertAction(todo, x, y);

			if (core.status.event.id == null)
				core.continueAutomaticRoute();
			else
				core.clearContinueAutomaticRoute();
		},
		"afterGetItem": function (itemId, x, y, isGentleClick) {
			// 获得一个道具后触发的事件
			// itemId：获得的道具ID；x和y是该道具所在的坐标
			// isGentleClick：是否是轻按触发的
			if (itemId.endsWith('Potion') && core.material.items[itemId].cls == 'items')
				core.playSound('回血');
			else if (itemId.endsWith('Gem') && core.material.items[itemId].cls == 'items')
				core.playSound('宝石')
			else
				core.playSound('获得道具');

			var todo = [];
			// 检查该点的获得道具后事件。
			if (core.status.floorId == null) return;
			var event = core.floors[core.status.floorId].afterGetItem[x + "," + y];
			if (event && (event instanceof Array || !isGentleClick || !event.disableOnGentleClick)) {
				if (event.data) event = event.data;
				core.unshift(todo, event);
			}

			if (todo.length > 0) core.insertAction(todo, x, y);
		},
		"afterPushBox": function () {
			// 推箱子后的事件
			if (core.searchBlock('box').length == 0) {
				// 可以通过if语句来进行开门操作
				/*
				if (core.status.floorId=='xxx') { // 在某个楼层
					core.insertAction([ // 插入一条事件
						{"type": "openDoor", "loc": [x,y]} // 开门
					])
				}
				*/
			}
		}
	},
	"enemys": {
		"getSpecials": function () {
			// 获得怪物的特殊属性，每一行定义一个特殊属性。
			// 分为五项，第一项为该特殊属性的数字，第二项为特殊属性的名字，第三项为特殊属性的描述
			// 第四项为该特殊属性的颜色，可以写十六进制 #RRGGBB 或者 [r,g,b,a] 四元数组
			// 第五项为该特殊属性的标记；目前 1 代表是地图类技能（需要进行遍历全图）
			// 名字和描述可以直接写字符串，也可以写个function将怪物传进去
			return [
				[1, "先攻", "怪物首先攻击", "#ffcc33"],
				[2, "魔攻", "怪物无视角色的防御", "#bbb0ff"],
				[3, "坚固", "怪物防御不小于角色攻击-1", "#c0b088"],
				[4, "2连击", "怪物每回合攻击2次", "#ffee77"],
				[5, "3连击", "怪物每回合攻击3次", "#ffee77"],
				[6, function (enemy) { return (enemy.n || '') + "连击"; }, function (enemy) { return "怪物每回合攻击" + (enemy.n || 4) + "次"; }, "#ffee77"],
				[7, "破甲", function (enemy) { return "战斗前，怪物附加角色防御的" + Math.floor(100 * (enemy.breakArmor || core.values.breakArmor || 0)) + "%作为伤害"; }, "#88c0ff"],
				[8, "反击", function (enemy) { return "战斗时，怪物每回合附加角色攻击的" + Math.floor(100 * (enemy.counterAttack || core.values.counterAttack || 0)) + "%作为伤害，无视角色防御"; }, "#ffaa44"],
				[9, "净化", function (enemy) { return "战斗前，怪物附加角色护盾的" + (enemy.purify || core.values.purify) + "倍作为伤害"; }, "#80eed6"],
				[10, "模仿", "怪物的攻防和角色攻防相等", "#b0c0dd"],
				[11, "吸血", function (enemy) { return "战斗前，怪物首先吸取角色的" + Math.floor(100 * enemy.vampire || 0) + "%生命（约" + Math.floor((enemy.vampire || 0) * core.getStatus('hp')) + "点）作为伤害" + (enemy.add ? "，并把伤害数值加到自身生命上" : ""); }, "#dd4448"],
				[12, "中毒", "战斗后，角色陷入中毒状态，每一步损失生命" + core.values.poisonDamage + "点", "#99ee88"],
				[13, "衰弱", "战斗后，角色陷入衰弱状态，攻防暂时下降" + (core.values.weakValue >= 1 ? core.values.weakValue + "点" : parseInt(core.values.weakValue * 100) + "%"), "#f0bbcc"],
				[14, "诅咒", "战斗后，角色陷入诅咒状态，战斗无法获得金币和经验", "#bbeef0"],
				[15, "领域", function (enemy) { return "经过怪物周围" + (enemy.zoneSquare ? "九宫格" : "十字") + "范围内" + (enemy.range || 1) + "格时自动减生命" + (enemy.zone || 0) + "点"; }, "#c677dd"],
				[16, "夹击", "经过两只相同的怪物中间，角色生命值变成一半", "#bb99ee"],
				[17, "仇恨", "战斗前，怪物附加之前积累的仇恨值作为伤害；战斗后，释放一半的仇恨值。（每杀死一个怪物获得" + (core.values.hatred || 0) + "点仇恨值）", "#b0b666"],
				[18, "阻击", function (enemy) { return "经过怪物周围" + (enemy.zoneSquare ? "九宫格" : "十字") + "时自动减生命" + (enemy.repulse || 0) + "点，同时怪物后退一格"; }, "#8888e6"],
				[19, "自爆", "战斗后角色的生命值变成1", "#ff6666"],
				[20, "无敌", "角色无法打败怪物，除非拥有十字架", "#aaaaaa"],
				[21, "退化", function (enemy) { return "战斗后角色永久下降" + (enemy.atkValue || 0) + "点攻击和" + (enemy.defValue || 0) + "点防御"; }],
				[22, "固伤", function (enemy) { return "战斗前，怪物对角色造成" + (enemy.damage || 0) + "点固定伤害，未开启负伤时无视角色护盾。"; }, "#ff9977"],
				[23, "重生", "怪物被击败后，角色转换楼层则怪物将再次出现", "#a0e0ff"],
				[24, "激光", function (enemy) { return "经过怪物同行或同列时自动减生命" + (enemy.laser || 0) + "点"; }, "#dda0dd"],
				[25, "光环", function (enemy) { return (enemy.range != null ? ((enemy.haloSquare ? "该怪物九宫格" : "该怪物十字") + enemy.haloRange + "格范围内") : "同楼层所有") + "怪物生命提升" + (enemy.hpBuff || 0) + "%，攻击提升" + (enemy.atkBuff || 0) + "%，防御提升" + (enemy.defBuff || 0) + "%，" + (enemy.haloAdd ? "可叠加" : "不可叠加"); }, "#e6e099", 1],
				[26, "支援", "当周围一圈的怪物受到攻击时将上前支援，并组成小队战斗。", "#77c0b6", 1],
				[27, "捕捉", function (enemy) { return "当走到怪物周围" + (enemy.zoneSquare ? "九宫格" : "十字") + "时会强制进行战斗。"; }, "#c0ddbb"],
				[28, "赐宝", "击杀该怪物后会获得额外的道具/金币奖励", "#aaaaaa"]
			];
		},
		"getEnemyInfo": function (enemy, hero, x, y, floorId) {
			// 获得某个怪物变化后的数据；该函数将被伤害计算和怪物手册使用
			// 例如：坚固、模仿、仿攻等等
			// 
			// 参数说明：
			// enemy：该怪物信息
			// hero_hp,hero_atk,hero_def,hero_mdef：勇士的生命攻防护盾数据
			// x,y：该怪物的坐标（查看手册和强制战斗时为undefined）
			// floorId：该怪物所在的楼层
			// 后面三个参数主要是可以在光环等效果上可以适用（也可以按需制作部分范围光环效果）
			floorId = floorId || core.status.floorId;
			var hero_hp = core.getRealStatusOrDefault(hero, 'hp'),
				hero_atk = core.getRealStatusOrDefault(hero, 'atk'),
				hero_def = core.getRealStatusOrDefault(hero, 'def'),
				hero_mdef = core.getRealStatusOrDefault(hero, 'mdef');

			var mon_hp = core.getEnemyValue(enemy, 'hp', x, y, floorId),
				mon_atk = core.getEnemyValue(enemy, 'atk', x, y, floorId),
				mon_def = core.getEnemyValue(enemy, 'def', x, y, floorId),
				mon_special = core.getEnemyValue(enemy, 'special', x, y, floorId);
			var mon_money = core.getEnemyValue(enemy, 'money', x, y, floorId),
				mon_exp = core.getEnemyValue(enemy, 'exp', x, y, floorId),
				mon_point = core.getEnemyValue(enemy, 'point', x, y, floorId);
			// 模仿
			if (core.hasSpecial(mon_special, 10)) {
				mon_atk = hero_atk;
				mon_def = hero_def;
			}
			// 坚固
			if (core.hasSpecial(mon_special, 3) && mon_def < hero_atk - 1) {
				mon_def = hero_atk - 1;
			}

			var guards = [];

			// 光环和支援检查
			if (!core.status.checkBlock) core.status.checkBlock = {};

			if (core.status.checkBlock.needCache) {
				var hp_buff = 0,
					atk_buff = 0,
					def_buff = 0;
				var usedEnemyIds = {};
				var index = x != null && y != null ? (x + "," + y) : floorId;
				if (!core.status.checkBlock.cache) core.status.checkBlock.cache = {};
				var cache = core.status.checkBlock.cache[index];
				if (!cache) {
					core.extractBlocks(floorId);
					core.status.maps[floorId].blocks.forEach(function (block) {
						if (!block.disable) {
							var id = block.event.id,
								enemy = core.material.enemys[id];
							// 检查【光环】技能，数字25
							if (enemy && core.hasSpecial(enemy.special, 25)) {
								var inRange = enemy.haloRange == null;
								if (enemy.haloRange != null && x != null && y != null) {
									var dx = Math.abs(block.x - x),
										dy = Math.abs(block.y - y);
									if (dx + dy <= enemy.haloRange) inRange = true;
									if (enemy.haloSquare && dx <= enemy.haloRange && dy <= enemy.haloRange) inRange = true;
								}
								if (inRange && (enemy.haloAdd || !usedEnemyIds[enemy.id])) {
									hp_buff += enemy.hpBuff || 0;
									atk_buff += enemy.atkBuff || 0;
									def_buff += enemy.defBuff || 0;
									usedEnemyIds[enemy.id] = true;
								}
							}
							// 检查【支援】技能，数字26
							if (enemy && core.hasSpecial(enemy.special, 26) &&
								// 检查支援条件，坐标存在，距离为1，且不能是自己
								// 其他类型的支援怪，比如十字之类的话.... 看着做是一样的
								x != null && y != null && Math.abs(block.x - x) <= 1 && Math.abs(block.y - y) <= 1 && !(x == block.x && y == block.y)) {
								// 记录怪物的x,y，ID
								guards.push([block.x, block.y, id]);
							}

							// TODO：如果有其他类型光环怪物在这里仿照添加检查
							// 注：新增新的类光环属性（需要遍历全图的）需要在特殊属性定义那里的第五项写1，参见光环和支援的特殊属性定义。
						}
					});

					core.status.checkBlock.cache[index] = { "hp_buff": hp_buff, "atk_buff": atk_buff, "def_buff": def_buff, "guards": guards };
				} else {
					// 直接使用缓存数据
					hp_buff = cache.hp_buff;
					atk_buff = cache.atk_buff;
					def_buff = cache.def_buff;
					guards = cache.guards;
				}

				// 增加比例；如果要增加数值可以直接在这里修改
				mon_hp *= (1 + hp_buff / 100);
				mon_atk *= (1 + atk_buff / 100);
				mon_def *= (1 + def_buff / 100);
			}

			// TODO：可以在这里新增其他的怪物数据变化
			// 比如仿攻（怪物攻击不低于勇士攻击）：
			// if (core.hasSpecial(mon_special, 27) && mon_atk < hero_atk) {
			//     mon_atk = hero_atk;
			// }
			// 也可以按需增加各种自定义内容

			return {
				"hp": Math.floor(mon_hp),
				"atk": Math.floor(mon_atk),
				"def": Math.floor(mon_def),
				"money": Math.floor(mon_money),
				"exp": Math.floor(mon_exp),
				"point": Math.floor(mon_point),
				"special": mon_special,
				"guards": guards,
			};
		},
		"getDamageInfo": function (enemy, hero, x, y, floorId) {
			// 获得战斗伤害信息（实际伤害计算函数）
			// 
			// 参数说明：
			// enemy：该怪物信息
			// hero：勇士的当前数据；如果对应项不存在则会从core.status.hero中取。
			// x,y：该怪物的坐标（查看手册和强制战斗时为undefined）
			// floorId：该怪物所在的楼层
			// 后面三个参数主要是可以在光环等效果上可以适用
			floorId = floorId || core.status.floorId;

			var hero_hp = core.getRealStatusOrDefault(hero, 'hp'),
				hero_atk = core.getRealStatusOrDefault(hero, 'atk'),
				hero_def = core.getRealStatusOrDefault(hero, 'def'),
				hero_mdef = core.getRealStatusOrDefault(hero, 'mdef'),
				origin_hero_hp = core.getStatusOrDefault(hero, 'hp'),
				origin_hero_atk = core.getStatusOrDefault(hero, 'atk'),
				origin_hero_def = core.getStatusOrDefault(hero, 'def');

			hero_hp = Math.max(0, hero_hp);
			hero_atk = Math.max(0, hero_atk);
			hero_def = Math.max(0, hero_def);
			hero_mdef = Math.max(0, hero_mdef);

			var enemyInfo = core.enemys.getEnemyInfo(enemy, hero, x, y, floorId);
			var mon_hp = enemyInfo.hp,
				mon_atk = enemyInfo.atk,
				mon_def = enemyInfo.def,
				mon_special = enemyInfo.special;

			if (core.getFlag('skill', 0) == 1) { // 二倍斩
				hero_atk *= 2;
			}

			if (core.hasSpecial(mon_special, 20) && !core.hasItem("cross"))
				return null;

			var init_damage = 0;

			// 吸血
			if (core.hasSpecial(mon_special, 11)) {
				var vampire_damage = hero_hp * enemy.vampire;

				// 如果有神圣盾免疫吸血等可以在这里写
				// 也可以用hasItem和hasEquip来判定装备
				// if (core.hasFlag('shield5')) vampire_damage = 0;

				vampire_damage = Math.floor(vampire_damage) || 0;
				// 加到自身
				if (enemy.add) // 如果加到自身
					mon_hp += vampire_damage;

				init_damage += vampire_damage;
			}

			// 每回合怪物对勇士造成的战斗伤害
			var per_damage = mon_atk - hero_def;
			// 魔攻：战斗伤害就是怪物攻击力
			if (core.hasSpecial(mon_special, 2)) per_damage = mon_atk;
			// 战斗伤害不能为负值
			if (per_damage < 0) per_damage = 0;

			// 2连击 & 3连击 & N连击
			if (core.hasSpecial(mon_special, 4)) per_damage *= 2;
			if (core.hasSpecial(mon_special, 5)) per_damage *= 3;
			if (core.hasSpecial(mon_special, 6)) per_damage *= (enemy.n || 4);

			// 每回合的反击伤害；反击是按照勇士的攻击次数来计算回合
			var counterDamage = 0;
			if (core.hasSpecial(mon_special, 8))
				counterDamage += Math.floor((enemy.counterAttack || core.values.counterAttack) * hero_atk);

			if (core.hasSpecial(mon_special, 1)) init_damage += per_damage;

			if (core.hasSpecial(mon_special, 7))
				init_damage += Math.floor((enemy.breakArmor || core.values.breakArmor) * hero_def);

			if (core.hasSpecial(mon_special, 9))
				init_damage += Math.floor((enemy.purify || core.values.purify) * hero_mdef);

			var hero_per_damage = Math.max(hero_atk - mon_def, 0);
			if (hero_per_damage <= 0) return null;

			// 勇士的攻击回合数；为怪物生命除以每回合伤害向上取整
			var turn = Math.ceil(mon_hp / hero_per_damage);

			// ------ 支援 ----- //
			// 这个递归最好想明白为什么，flag:__extraTurn__是怎么用的
			var guards = core.getFlag("__guards__" + x + "_" + y, enemyInfo.guards);
			var guard_before_current_enemy = false; // ------ 支援怪是先打(true)还是后打(false)？
			turn += core.getFlag("__extraTurn__", 0);
			if (guards.length > 0) {
				if (!guard_before_current_enemy) { // --- 先打当前怪物，记录当前回合数
					core.setFlag("__extraTurn__", turn);
				}
				// 获得那些怪物组成小队战斗
				for (var i = 0; i < guards.length; i++) {
					var gx = guards[i][0],
						gy = guards[i][1],
						gid = guards[i][2];
					// 递归计算支援怪伤害信息，这里不传x,y保证不会重复调用
					// 这里的mdef传0，因为护盾应该只会被计算一次
					var info = core.enemys.getDamageInfo(core.material.enemys[gid], { hp: origin_hero_hp, atk: origin_hero_atk, def: origin_hero_def, mdef: 0 });
					if (info == null) {
						core.removeFlag("__extraTurn__");
						return null;
					}
					core.setFlag("__extraTurn__", info.turn);
					init_damage += info.damage;
				}
				if (guard_before_current_enemy) { // --- 先打支援怪物，增加当前回合数
					turn += core.getFlag("__extraTurn__", 0);
				}
			}
			core.removeFlag("__extraTurn__");
			// ------ 支援END ------ //

			var damage = init_damage + (turn - 1) * per_damage + turn * counterDamage;
			damage -= hero_mdef;

			if (!core.flags.enableNegativeDamage)
				damage = Math.max(0, damage);

			if (core.hasSpecial(mon_special, 17)) {
				damage += core.getFlag('hatred', 0);
			}
			if (core.hasSpecial(mon_special, 22)) {
				damage += enemy.damage || 0;
			}

			return {
				"mon_hp": Math.floor(mon_hp),
				"mon_atk": Math.floor(mon_atk),
				"mon_def": Math.floor(mon_def),
				"init_damage": Math.floor(init_damage),
				"per_damage": Math.floor(per_damage),
				"hero_per_damage": Math.floor(hero_per_damage),
				"turn": Math.floor(turn),
				"damage": Math.floor(damage)
			};
		}
	},
	"actions": {
		"onKeyUp": function (keyCode, altKey) {
			if (core.isMoving()) return;
			if (core.status.onShopLongDown) return core.status.onShopLongDown = false;
			if (altKey && keyCode >= 48 && keyCode <= 57) {
				core.items.quickLoadEquip(keyCode - 48);
				return;
			}

			switch (keyCode) {
				case 27:
					core.openSettings(true);
					break;
				case 88:
					core.openBook(true);
					break;
				case 71:
					core.useFly(true);
					break;
				case 65:
					core.doSL("autoSave", "load");
					break;
				case 87:
					core.doSL("autoSave", "reload");
					break;
				case 83:
					core.save(true);
					break;
				case 68:
					core.load(true);
					break;
				case 69:
					core.ui._drawCursor();
					break;
				case 84:
					core.openToolbox(true);
					break;
				case 81:
					core.openEquipbox(true);
					break;
				case 90:
					core.turnHero();
					break;
				case 86:
					core.openQuickShop(true);
					break;
				case 32:
					core.getNextItem();
					break;
				case 82:
					core.ui._drawReplay();
					break;
				case 33:
				case 34:
					core.ui._drawViewMaps();
					break;
				case 66:
					core.ui._drawStatistics();
					break;
				case 72:
					core.ui._drawHelp();
					break;
				case 77:
					core.actions._clickNotes_show();
					break;
				case 78:
					core.confirmRestart();
					break;
				case 79:
					core.actions._clickGameInfo_openProject();
					break;
				case 80:
					core.actions._clickGameInfo_openComments();
					break;
				case 49:
					if (core.hasItem('pickaxe')) {
						core.status.route.push("key:49"); // 将按键记在录像中
						core.useItem('pickaxe', true); // 第二个参数true代表该次使用道具是被按键触发的，使用过程不计入录像
					}
					break;
				case 50:
					if (core.hasItem('bomb')) {
						core.status.route.push("key:50"); // 将按键记在录像中
						core.useItem('bomb', true); // 第二个参数true代表该次使用道具是被按键触发的，使用过程不计入录像
					}
					break;
				case 51:
					if (core.hasItem('centerFly')) {
						core.ui._drawCenterFly();
					}
					break;
				case 52:
					{
						var list = ["icePickaxe", "freezeBadge", "earthquake", "upFly", "downFly", "jumpShoes", "lifeWand", "poisonWine", "weakWine", "curseWine", "superWine"];
						for (var i = 0; i < list.length; i++) {
							var itemId = list[i];
							if (core.canUseItem(itemId)) {
								core.status.route.push("key:52");
								core.useItem(itemId, true);
								break;
							}
						}
					}
					break;
				case 53:
					core.doSL("autoSave", "load");
					break;
				case 54:
					core.doSL("autoSave", "reload");
					break;
				case 55:
					core.getNextItem();
					break;
				case 118: // F7：开启debug模式
				case 119: // F8：由于F7与部分浏览器有冲突，故新增F8
					core.debug();
					break;
				case 70: // F：开启技能“二倍斩”
					// 检测是否拥有“二倍斩”这个技能道具
					if (core.hasItem('skill1')) {
						core.status.route.push("key:70");
						core.useItem('skill1', true);
					}
					break;
				// 在这里可以任意新增或编辑已有的快捷键内容
				/*
				case 0: // 使用该按键的keyCode
					// 还可以再判定altKey是否被按下，即 if (altKey) { ...
		
					// ... 在这里写你要执行脚本
					// **强烈建议所有新增的自定义快捷键均能给个对应的道具可点击，以方便手机端的行为**
					if (core.hasItem('...')) {
						core.status.route.push("key:0");
						core.useItem('...', true); // 增加true代表该使用道具不计入录像
					}
		
					break;
				*/
			}

		},
		"onStatusBarClick": function (px, py, vertical) {
			var _isVertical = function () {
				if (core.isReplaying() && vertical != null) return vertical;
				return core.domStyle.isVertical;
			}

			if (core.status.lockControl) return;
			if (core.isMoving()) return;
		}
	},
	"control": {
		"saveData": function () {
			var values = {};
			for (var key in core.values) {
				if (!core.same(core.values[key], core.data.values[key]))
					values[key] = core.clone(core.values[key]);
			}

			var data = {
				'floorId': core.status.floorId,
				'hero': core.clone(core.status.hero),
				'hard': core.status.hard,
				'maps': core.clone(core.maps.saveMap()),
				'route': core.encodeRoute(core.status.route),
				'values': values,
				'version': core.firstData.version,
				'guid': core.getGuid(),
				"time": new Date().getTime()
			};

			return data;
		},
		"loadData": function (data, callback) {
			core.resetGame(data.hero, data.hard, data.floorId, core.maps.loadMap(data.maps, null, data.hero.flags), data.values);
			core.status.route = core.decodeRoute(data.route);
			core.control._bindRoutePush();
			core.status.textAttribute = core.getFlag('textAttribute', core.status.textAttribute);
			var toAttribute = core.getFlag('globalAttribute', core.status.globalAttribute);
			if (!core.same(toAttribute, core.status.globalAttribute)) {
				core.status.globalAttribute = toAttribute;
				core.resize();
			}
			core.events.setVolume(core.getFlag("__volume__", 1), 0);
			var icon = core.status.hero.image;
			icon = core.getMappedName(icon);
			if (core.material.images.images[icon]) {
				core.material.images.hero = core.material.images.images[icon];
				core.material.icons.hero.width = core.material.images.images[icon].width / 4;
				core.material.icons.hero.height = core.material.images.images[icon].height / 4;
			}
			core.setFlag('__fromLoad__', true);
			core.changeFloor(data.floorId, null, data.hero.loc, 0, function () {
				if (core.hasFlag("__bgm__")) {
					core.playBgm(core.getFlag("__bgm__"));
				}

				core.removeFlag('__fromLoad__');
				if (callback) callback();
			});
		},
		"getStatusLabel": function (name) {
			return {
				name: "名称",
				lv: "等级",
				hpmax: "生命上限",
				hp: "生命",
				manamax: "魔力上限",
				mana: "魔力",
				atk: "攻击",
				def: "防御",
				mdef: "护盾",
				money: "金币",
				exp: "经验",
				point: "加点",
				steps: "步数",
			}[name] || name;
		},
		"triggerDebuff": function (action, type) {
			if (!(type instanceof Array)) type = [type];

			if (action == 'get') {
				if (core.inArray(type, 'poison') && !core.hasFlag("poison")) {
					core.setFlag('poison', true);
				}
				if (core.inArray(type, 'weak') && !core.hasFlag('weak')) {
					core.setFlag('weak', true);
					if (core.values.weakValue >= 1) {
						core.addStatus('atk', -core.values.weakValue);
						core.addStatus('def', -core.values.weakValue);
					} else {
						core.addBuff('atk', -core.values.weakValue);
						core.addBuff('def', -core.values.weakValue);
					}
				}
				if (core.inArray(type, 'curse') && !core.hasFlag('curse')) {
					core.setFlag('curse', true);
				}
			} else if (action == 'remove') {
				var success = false;
				if (core.inArray(type, "poison") && core.hasFlag("poison")) {
					success = true;
					core.setFlag("poison", false);
				}
				if (core.inArray(type, "weak") && core.hasFlag("weak")) {
					success = true;
					core.setFlag("weak", false);
					if (core.values.weakValue >= 1) {
						core.addStatus('atk', core.values.weakValue);
						core.addStatus('def', core.values.weakValue);
					} else {
						core.addBuff('atk', core.values.weakValue);
						core.addBuff('def', core.values.weakValue);
					}
				}
				if (core.inArray(type, "curse") && core.hasFlag("curse")) {
					success = true;
					core.setFlag("curse", false);
				}
				if (success) core.playSound('回血');
			}
		},
		"updateStatusBar": function () {
			core.events.checkLvUp();
			if (core.flags.statusBarItems.indexOf('enableHPMax') >= 0) {
				core.setStatus('hp', Math.min(core.getRealStatus('hpmax'), core.getStatus('hp')));
			}
			if (core.status.floorId) {
				core.setStatusBarInnerHTML('floor', core.status.maps[core.status.floorId].name);
			}
			core.setStatusBarInnerHTML('name', core.getStatus('name'));
			core.setStatusBarInnerHTML('lv', core.getLvName());
			var statusList = ['hpmax', 'hp', 'mana', 'atk', 'def', 'mdef', 'money', 'exp'];
			statusList.forEach(function (item) {
				core.status.hero[item] = Math.floor(core.status.hero[item]);
				core.setStatusBarInnerHTML(item, core.getRealStatus(item));
			});
			if (core.status.hero.manamax != null && core.getRealStatus('manamax') >= 0) {
				core.status.hero.mana = Math.min(core.status.hero.mana, core.getRealStatus('manamax'));
				core.setStatusBarInnerHTML('mana', core.status.hero.mana + "/" + core.getRealStatus('manamax'));
			} else {
				core.setStatusBarInnerHTML("mana", core.status.hero.mana);
			}
			// 设置技能栏
			// 可以用flag:skill表示当前开启的技能类型，flag:skillName显示技能名；详见文档-个性化-技能塔的支持
			core.setStatusBarInnerHTML('skill', core.getFlag('skillName', '无'));

			// 可以在这里添加自己额外的状态栏信息，比如想攻击显示 +0.5 可以这么写：
			// if (core.hasFlag('halfAtk')) core.setStatusBarInnerHTML('atk', core.statusBar.atk.innerText + "+0.5");
			if (core.flags.statusBarItems.indexOf('enableLevelUp') >= 0) {
				core.setStatusBarInnerHTML('up', core.formatBigNumber(core.getNextLvUpNeed()) || "");
			} else core.setStatusBarInnerHTML('up', "");

			var keys = ['yellowKey', 'blueKey', 'redKey', 'greenKey'];
			keys.forEach(function (key) {
				core.setStatusBarInnerHTML(key, core.setTwoDigits(core.itemCount(key)));
			});
			core.setStatusBarInnerHTML('poison', core.hasFlag('poison') ? "毒" : "");
			core.setStatusBarInnerHTML('weak', core.hasFlag('weak') ? "衰" : "");
			core.setStatusBarInnerHTML('curse', core.hasFlag('curse') ? "咒" : "");
			core.setStatusBarInnerHTML('pickaxe', "破" + core.itemCount('pickaxe'));
			core.setStatusBarInnerHTML('bomb', "炸" + core.itemCount('bomb'));
			core.setStatusBarInnerHTML('fly', "飞" + core.itemCount('centerFly'));
			if (core.statusBar.hard.innerText != core.status.hard) {
				core.statusBar.hard.innerText = core.status.hard;
			}
			var hardColor = core.getFlag('__hardColor__');
			if (hardColor == null) core.statusBar.hard.innerText = '';
			if (core.statusBar.hard.getAttribute('_style') != hardColor) {
				core.statusBar.hard.style.color = hardColor;
				core.statusBar.hard.setAttribute('_style', hardColor);
			}
			core.drawStatusBar();
			core.updateCheckBlock();
			core.updateDamage();
		},
		"updateCheckBlock": function (floorId) {
			floorId = floorId || core.status.floorId;
			if (!floorId || !core.status.maps) return;
			var width = core.floors[floorId].width,
				height = core.floors[floorId].height;
			var blocks = core.getMapBlocksObj(floorId);
			var damage = {},
				type = {},
				repulse = {},
				ambush = {};
			var betweenAttackLocs = {};
			var needCache = false;
			var canGoDeadZone = core.flags.canGoDeadZone;
			core.flags.canGoDeadZone = true;
			for (var loc in blocks) {
				var block = blocks[loc],
					x = block.x,
					y = block.y,
					id = block.event.id,
					enemy = core.material.enemys[id];
				if (block.disable) continue;

				type[loc] = type[loc] || {};

				// 血网
				// 如需调用当前楼层的ratio可使用  core.status.maps[floorId].ratio
				if (id == 'lavaNet' && !core.hasItem('amulet')) {
					damage[loc] = (damage[loc] || 0) + core.values.lavaDamage;
					type[loc][(block.event.name || "血网") + "伤害"] = true;
				}

				// 领域
				// 如果要防止领域伤害，可以直接简单的将 flag:no_zone 设为true
				if (enemy && core.hasSpecial(enemy.special, 15) && !core.hasFlag('no_zone')) {
					// 领域范围，默认为1
					var range = enemy.range || 1;
					// 是否是九宫格领域
					var zoneSquare = false;
					if (enemy.zoneSquare != null) zoneSquare = enemy.zoneSquare;
					// 在范围内进行搜索，增加领域伤害值
					for (var dx = -range; dx <= range; dx++) {
						for (var dy = -range; dy <= range; dy++) {
							if (dx == 0 && dy == 0) continue;
							var nx = x + dx,
								ny = y + dy,
								currloc = nx + "," + ny;
							if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
							// 如果是十字领域，则还需要满足 |dx|+|dy|<=range
							if (!zoneSquare && Math.abs(dx) + Math.abs(dy) > range) continue;
							damage[currloc] = (damage[currloc] || 0) + (enemy.zone || 0);
							type[currloc] = type[currloc] || {};
							type[currloc]["领域伤害"] = true;
						}
					}
				}

				// 阻击
				// 如果要防止阻击伤害，可以直接简单的将 flag:no_repulse 设为true
				if (enemy && core.hasSpecial(enemy.special, 18) && !core.hasFlag('no_repulse')) {
					var scan = enemy.zoneSquare ? core.utils.scan2 : core.utils.scan;
					for (var dir in scan) {
						var nx = x + scan[dir].x,
							ny = y + scan[dir].y,
							currloc = nx + "," + ny;
						if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
						damage[currloc] = (damage[currloc] || 0) + (enemy.repulse || 0);
						type[currloc] = type[currloc] || {};
						type[currloc]["阻击伤害"] = true;

						var rdir = core.turnDirection(":back", dir);
						// 检查下一个点是否存在事件（从而判定是否移动）
						var rnx = x + scan[rdir].x,
							rny = y + scan[rdir].y;
						if (rnx < 0 || rnx >= width || rny < 0 || rny >= height) continue;
						// 如需禁止阻击被推到已隐藏的事件处（如重生怪处），可将这一句的false改为true
						if (core.getBlock(rnx, rny, floorId, false) != null) continue;
						if (core.utils.scan[rdir] && !core.canMoveHero(x, y, rdir, floorId)) continue;
						repulse[currloc] = (repulse[currloc] || []).concat([
							[x, y, id, rdir]
						]);
					}
				}

				// 激光
				// 如果要防止激光伤害，可以直接简单的将 flag:no_laser 设为true
				if (enemy && core.hasSpecial(enemy.special, 24) && !core.hasFlag("no_laser")) {
					for (var nx = 0; nx < width; nx++) {
						var currloc = nx + "," + y;
						if (nx != x) {
							damage[currloc] = (damage[currloc] || 0) + (enemy.laser || 0);
							type[currloc] = type[currloc] || {};
							type[currloc]["激光伤害"] = true;
						}
					}
					for (var ny = 0; ny < height; ny++) {
						var currloc = x + "," + ny;
						if (ny != y) {
							damage[currloc] = (damage[currloc] || 0) + (enemy.laser || 0);
							type[currloc] = type[currloc] || {};
							type[currloc]["激光伤害"] = true;
						}
					}
				}

				// 捕捉
				// 如果要防止捕捉效果，可以直接简单的将 flag:no_ambush 设为true
				if (enemy && core.enemys.hasSpecial(enemy.special, 27) && !core.hasFlag("no_ambush")) {
					var scan = enemy.zoneSquare ? core.utils.scan2 : core.utils.scan;
					// 给周围格子加上【捕捉】记号
					for (var dir in scan) {
						var nx = x + scan[dir].x,
							ny = y + scan[dir].y,
							currloc = nx + "," + ny;
						if (nx < 0 || nx >= width || ny < 0 || ny >= height || (core.utils.scan[dir] && !core.canMoveHero(x, y, dir, floorId))) continue;
						ambush[currloc] = (ambush[currloc] || []).concat([
							[x, y, id, dir]
						]);
					}
				}

				// 夹击；在这里提前计算所有可能的夹击点，具体计算逻辑在下面
				// 如果要防止夹击伤害，可以简单的将 flag:no_betweenAttack 设为true
				if (enemy && core.enemys.hasSpecial(enemy.special, 16) && !core.hasFlag('no_betweenAttack')) {
					for (var dir in core.utils.scan) {
						var nx = x + core.utils.scan[dir].x,
							ny = y + core.utils.scan[dir].y,
							currloc = nx + "," + ny;
						if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
						betweenAttackLocs[currloc] = true;
					}
				}

				// 检查地图范围类技能
				var specialFlag = core.getSpecialFlag(enemy);
				if (specialFlag & 1) needCache = true;
				if (core.status.event.id == 'viewMaps') needCache = true;
				if ((core.status.event.id == 'book' || core.status.event.id == 'bool-detail') && core.status.event.ui) needCache = true;
			}

			// 对每个可能的夹击点计算夹击伤害
			for (var loc in betweenAttackLocs) {
				var xy = loc.split(","),
					x = parseInt(xy[0]),
					y = parseInt(xy[1]);
				// 夹击怪物的ID
				var enemyId1 = null,
					enemyId2 = null;
				// 检查左右夹击
				var leftBlock = blocks[(x - 1) + "," + y],
					rightBlock = blocks[(x + 1) + "," + y];
				var leftId = core.getFaceDownId(leftBlock),
					rightId = core.getFaceDownId(rightBlock);
				if (leftBlock && !leftBlock.disable && rightBlock && !rightBlock.disable && leftId == rightId) {
					if (core.hasSpecial(leftId, 16))
						enemyId1 = leftId;
				}
				// 检查上下夹击
				var topBlock = blocks[x + "," + (y - 1)],
					bottomBlock = blocks[x + "," + (y + 1)];
				var topId = core.getFaceDownId(topBlock),
					bottomId = core.getFaceDownId(bottomBlock);
				if (topBlock && !topBlock.disable && bottomBlock && !bottomBlock.disable && topId == bottomId) {
					if (core.hasSpecial(topId, 16))
						enemyId2 = topId;
				}

				if (enemyId1 != null || enemyId2 != null) {
					var leftHp = core.status.hero.hp - (damage[loc] || 0);
					if (leftHp > 1) {
						// 夹击伤害值
						var value = Math.floor(leftHp / 2);
						// 是否不超过怪物伤害值
						if (core.flags.betweenAttackMax) {
							var enemyDamage1 = core.getDamage(enemyId1, x, y, floorId);
							if (enemyDamage1 != null && enemyDamage1 < value)
								value = enemyDamage1;
							var enemyDamage2 = core.getDamage(enemyId2, x, y, floorId);
							if (enemyDamage2 != null && enemyDamage2 < value)
								value = enemyDamage2;
						}
						if (value > 0) {
							damage[loc] = (damage[loc] || 0) + value;
							type[loc] = type[loc] || {};
							type[loc]["夹击伤害"] = true;
						}
					}
				}
			}

			// 取消注释下面这一段可以让护盾抵御阻激夹域伤害
			/*
			for (var loc in damage) {
				damage[loc] = Math.max(0, damage[loc] - core.getRealStatus('mdef'));
			}
			*/

			core.flags.canGoDeadZone = canGoDeadZone;
			core.status.checkBlock = {
				damage: damage,
				type: type,
				repulse: repulse,
				ambush: ambush,
				needCache: needCache,
				cache: {} // clear cache
			};
		},
		"moveOneStep": function (callback) {
			// 勇士每走一步后执行的操作。callback为行走完毕后的回调
			// 这个函数执行在“刚走完”的时候，即还没有检查该点的事件和领域伤害等。
			// 请注意：瞬间移动不会执行该函数。如果要控制能否瞬间移动有三种方法：
			// 1. 将全塔属性中的cannotMoveDirectly这个开关勾上，即可在全塔中全程禁止使用瞬移。
			// 2, 将楼层属性中的cannotMoveDirectly这个开关勾上，即禁止在该层楼使用瞬移。
			// 3. 将flag:cannotMoveDirectly置为true，即可使用flag控制在某段剧情范围内禁止瞬移。
			core.status.hero.steps++;
			core.updateFollowers();
			core.drawHero();
			// 检查中毒状态的扣血和死亡
			if (core.hasFlag('poison')) {
				core.status.hero.statistics.poisonDamage += core.values.poisonDamage;
				core.status.hero.hp -= core.values.poisonDamage;
				if (core.status.hero.hp <= 0) {
					core.status.hero.hp = 0;
					core.updateStatusBar(false, true);
					core.events.lose();
					return;
				} else {
					core.updateStatusBar(false, true);
				}
			}

			// 从v2.7开始，每一步行走不会再刷新状态栏。
			// 如果有特殊要求（如每走一步都加buff之类），可手动取消注释下面这一句：
			// core.updateStatusBar(true, true);
			core.checkAutoEvents();

			// ------ 检查目标点事件 ------ //
			// 无事件的道具（如血瓶）需要优先于阻激夹域判定
			var nowx = core.getHeroLoc('x'),
				nowy = core.getHeroLoc('y');
			var block = core.getBlock(nowx, nowy);
			var hasTrigger = false;
			if (block != null && block.event.trigger == 'getItem' &&
				!core.floors[core.status.floorId].afterGetItem[nowx + "," + nowy]) {
				hasTrigger = true;
				core.trigger(nowx, nowy, callback);
			}
			core.checkBlock();

			if (!hasTrigger)
				core.trigger(nowx, nowy, callback);
			if (core.onSki()) {
				core.insertAction({ "type": "moveAction" }, null, null, null, true);
			}
			// 如需强行终止行走可以在这里条件判定：
			// core.stopAutomaticRoute();
		},
		"moveDirectly": function (x, y, ignoreSteps) {
			// 瞬间移动；x,y为要瞬间移动的点；ignoreSteps为减少的步数，可能之前已经被计算过
			// 返回true代表成功瞬移，false代表没有成功瞬移

			// 判定能否瞬移到该点
			if (ignoreSteps == null) ignoreSteps = core.canMoveDirectly(x, y);
			if (ignoreSteps >= 0) {
				// 中毒也允许瞬移
				if (core.hasFlag('poison')) {
					var damage = ignoreSteps * core.values.poisonDamage;
					if (damage >= core.status.hero.hp) return false;
					core.status.hero.statistics.poisonDamage += damage;
					core.status.hero.hp -= damage;
				}

				core.clearMap('hero');
				// 获得勇士最后的朝向
				var lastDirection = core.status.route[core.status.route.length - 1];
				if (['left', 'right', 'up', 'down'].indexOf(lastDirection) >= 0)
					core.setHeroLoc('direction', lastDirection);
				// 设置坐标，并绘制
				core.control._moveDirectyFollowers(x, y);
				core.status.hero.loc.x = x;
				core.status.hero.loc.y = y;
				core.drawHero();
				core.status.route.push("move:" + x + ":" + y);
				core.status.hero.statistics.moveDirectly++;
				core.status.hero.statistics.ignoreSteps += ignoreSteps;
				if (core.hasFlag('poison')) {
					core.updateStatusBar(false, true);
				}
				core.ui.drawStatusBar();
				core.checkRouteFolding();
				return true;
			}
			return false;
		},
		"parallelDo": function (timestamp) {
			if (!core.isPlaying()) return;
			if (core.status.floorId) {
				try {
					eval(core.floors[core.status.floorId].parallelDo);
				} catch (e) {
					console.error(e);
				}
			}
		}
	},
	"ui": {
		"getToolboxItems": function (cls) {
			// 获得道具栏中当前某类型道具的显示项和显示顺序
			// cls为道具类型，只可能是 tools, constants 和 equips
			// 返回一个数组，代表当前某类型道具的显示内容和顺序
			// 默认按id升序排列，您可以取消下面的注释改为按名称排列
			return Object.keys(core.status.hero.items[cls] || {})
				.filter(function (id) { return !core.material.items[id].hideInToolbox; })
				.sort( /*function (id1, id2) { return core.material.items[id1].name <= core.material.items[id2].name ? -1 : 1 }*/);
		},
		"drawStatusBar": function () {
			// 这真的是人能写出来的东西？
			var ctx, fill = function (text, x, y, style) {
				core.ui.setFont(ctx, (/\w+/.test(text) ? 'italic ' : '') + 'bold 18px Verdana');
				core.ui.fillBoldText(ctx, text, x, y, style);
			};
			if (core.flags.statusCanvas) { // 系统开关「自绘状态栏」开启
				core.ui.clearMap(ctx = core.dom.statusCanvasCtx);
				core.ui.setFillStyle(ctx, core.status.globalAttribute.statusBarColor);
				if (core.domStyle.isVertical) {
					core.drawImage(ctx, core.statusBar.icons.floor, 6, 6, 25, 25);
					fill((core.status.thisMap || {}).name || "Loading", 42, 26);
					core.drawImage(ctx, core.statusBar.icons.hp, 137, 6, 25, 25);
					fill(core.formatBigNumber(core.getRealStatus('hp')), 173, 26);
					core.drawImage(ctx, core.statusBar.icons.atk, 268, 6, 25, 25);
					fill(core.formatBigNumber(core.getRealStatus('atk')), 304, 26);
					core.drawImage(ctx, core.statusBar.icons.def, 6, 38, 25, 25);
					fill(core.formatBigNumber(core.getRealStatus('def')), 42, 58);
					core.drawImage(ctx, core.statusBar.icons.mdef, 137, 38, 25, 25);
					fill(core.formatBigNumber(core.getRealStatus('mdef')), 173, 58);
					core.drawImage(ctx, core.statusBar.icons.money, 268, 38, 25, 25);
					fill(core.formatBigNumber(core.status.hero.money), 304, 58);
					core.drawImage(ctx, core.statusBar.icons.exp, 6, 70, 25, 25);
					fill(core.formatBigNumber(core.status.hero.exp), 42, 90);
				} else if (!core.flags.hideLeftStatusBar) {
					core.drawImage(ctx, core.statusBar.icons.floor, 6, 9, 25, 25);
					fill((core.status.thisMap || {}).name || "Loading", 42, 29);
					core.drawImage(ctx, core.statusBar.icons.hp, 6, 43, 25, 25);
					fill(core.formatBigNumber(core.getRealStatus('hp')), 42, 63);
					core.drawImage(ctx, core.statusBar.icons.atk, 6, 77, 25, 25);
					fill(core.formatBigNumber(core.getRealStatus('atk')), 42, 97);
					core.drawImage(ctx, core.statusBar.icons.def, 6, 111, 25, 25);
					fill(core.formatBigNumber(core.getRealStatus('def')), 42, 131);
					core.drawImage(ctx, core.statusBar.icons.mdef, 6, 145, 25, 25);
					fill(core.formatBigNumber(core.getRealStatus('mdef')), 42, 165);
					core.drawImage(ctx, core.statusBar.icons.money, 6, 179, 25, 25);
					fill(core.formatBigNumber(core.status.hero.money), 42, 199);
					core.drawImage(ctx, core.statusBar.icons.exp, 6, 213, 25, 25);
					fill(core.formatBigNumber(core.status.hero.exp), 42, 233);
					fill(core.setTwoDigits(core.itemCount('yellowKey')), 11, 267, '#FFCCAA');
					fill(core.setTwoDigits(core.itemCount('blueKey')), 46, 267, '#AAAADD');
					fill(core.setTwoDigits(core.itemCount('redKey')), 81, 267, '#FF8888');
				}
			} else if (core.flags.hideLeftStatusBar && !core.domStyle.isVertical) {
				if (!core.dymCanvas['status'])
					core.ui.createCanvas('status', 0, 0, core._PX_, core._PY_, 66);
				core.ui.clearMap(ctx = core.dymCanvas['status']);
				core.ui.setFillStyle(ctx, core.status.globalAttribute.statusBarColor);
				var offset = core.status.hero.loc.x - core.bigmap.offsetX / 32 >= core._HEIGHT_ ? 0 : core._PY_;
				core.ui.setAlpha(ctx, 0.75);
				core.ui.drawWindowSkin('winskin.png', ctx, offset, 0, core._PX_ - core._PY_, core._PY_);
				core.ui.setAlpha(ctx, 1);
				core.drawImage(ctx, core.statusBar.icons.floor, 6 + offset, 9, 25, 25);
				fill((core.status.thisMap || {}).name || "Loading", 42 + offset, 29);
				core.drawImage(ctx, core.statusBar.icons.hp, 6 + offset, 43, 25, 25);
				fill(core.formatBigNumber(core.getRealStatus('hp')), 42 + offset, 63);
				core.drawImage(ctx, core.statusBar.icons.atk, 6 + offset, 77, 25, 25);
				fill(core.formatBigNumber(core.getRealStatus('atk')), 42 + offset, 97);
				core.drawImage(ctx, core.statusBar.icons.def, 6 + offset, 111, 25, 25);
				fill(core.formatBigNumber(core.getRealStatus('def')), 42 + offset, 131);
				core.drawImage(ctx, core.statusBar.icons.mdef, 6 + offset, 145, 25, 25);
				fill(core.formatBigNumber(core.getRealStatus('mdef')), 42 + offset, 165);
				core.drawImage(ctx, core.statusBar.icons.money, 6 + offset, 179, 25, 25);
				fill(core.formatBigNumber(core.status.hero.money), 42 + offset, 199);
				core.drawImage(ctx, core.statusBar.icons.exp, 6 + offset, 213, 25, 25);
				fill(core.formatBigNumber(core.status.hero.exp), 42 + offset, 233);
				fill(core.setTwoDigits(core.itemCount('yellowKey')), 11 + offset, 267, '#FFCCAA');
				fill(core.setTwoDigits(core.itemCount('blueKey')), 46 + offset, 267, '#AAAADD');
				fill(core.setTwoDigits(core.itemCount('redKey')), 81 + offset, 267, '#FF8888');
			}
		},
		"drawStatistics": function () {
			return [
				'yellowDoor', 'blueDoor', 'redDoor', 'greenDoor', 'steelDoor',
				'yellowKey', 'blueKey', 'redKey', 'greenKey', 'steelKey',
				'redGem', 'blueGem', 'greenGem', 'yellowGem',
				'redPotion', 'bluePotion', 'greenPotion', 'yellowPotion', 'superPotion',
				'pickaxe', 'bomb', 'centerFly', 'icePickaxe', 'freezeBadge',
				'earthquake', 'upFly', 'downFly', 'jumpShoes', 'lifeWand',
				'poisonWine', 'weakWine', 'curseWine', 'superWine',
				'sword1', 'sword2', 'sword3', 'sword4', 'sword5',
				'shield1', 'shield2', 'shield3', 'shield4', 'shield5',
				// 在这里可以增加新的ID来进行统计个数，只能增加道具ID
			];
		},
		"drawAbout": function () {
			core.ui.closePanel();
			core.lockControl();
			core.status.event.id = 'about';

			var left = 48,
				top = 36,
				right = (core._PX_ || core.__PIXELS__) - 2 * left,
				bottom = (core._PY_ || core.__PIXELS__) - 2 * top;

			core.setAlpha('ui', 0.85);
			core.fillRect('ui', left, top, right, bottom, '#000000');
			core.setAlpha('ui', 1);
			core.strokeRect('ui', left - 1, top - 1, right + 1, bottom + 1, '#FFFFFF', 2);

			var text_start = left + 24;
			core.setTextAlign('ui', 'left');
			var globalAttribute = core.status.globalAttribute || core.initStatus.globalAttribute;
			core.fillText('ui', "HTML5 魔塔样板", text_start, top + 35, globalAttribute.selectColor, "bold 22px " + globalAttribute.font);
			core.fillText('ui', "版本： " + main.__VERSION__, text_start, top + 80, "#FFFFFF", "bold 17px " + globalAttribute.font);
			core.fillText('ui', "作者： 艾之葵", text_start, top + 112);
			core.fillText('ui', 'HTML5魔塔交流群：539113091', text_start, top + 112 + 32);
			core.playSound('打开界面');
		}
	}
}