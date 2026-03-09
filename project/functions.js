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

			var money = guards.reduce(function (curr, g) {
				return curr + core.material.enemys[g[2]].money;
			}, core.getEnemyValue(enemy, "money", x, y));
			if (core.hasItem('coin')) money *= 2;
			if (core.hasFlag('curse')) money = 0;
			core.status.hero.money += money;
			core.status.hero.statistics.money += money;

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
			var todo = [];
			if (core.status.floorId) {
				core.push(todo, core.floors[core.status.floorId].afterOpenDoor[x + "," + y]);
			}
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
			if (itemId.endsWith('Potion') && core.material.items[itemId].cls == 'items')
				core.playSound('回血');
			else if (itemId.endsWith('Gem') && core.material.items[itemId].cls == 'items')
				core.playSound('宝石')
			else
				core.playSound('获得道具');

			var todo = [];
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
			if (core.hasSpecial(mon_special, 10)) {
				mon_atk = hero_atk;
				mon_def = hero_def;
			}
			if (core.hasSpecial(mon_special, 3) && mon_def < hero_atk - 1) {
				mon_def = hero_atk - 1;
			}

			var guards = [];

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
							if (enemy && core.hasSpecial(enemy.special, 26) &&
								x != null && y != null && Math.abs(block.x - x) <= 1 && Math.abs(block.y - y) <= 1 && !(x == block.x && y == block.y)) {
								guards.push([block.x, block.y, id]);
							}
						}
					});

					core.status.checkBlock.cache[index] = { "hp_buff": hp_buff, "atk_buff": atk_buff, "def_buff": def_buff, "guards": guards };
				} else {
					hp_buff = cache.hp_buff;
					atk_buff = cache.atk_buff;
					def_buff = cache.def_buff;
					guards = cache.guards;
				}
				mon_hp *= (1 + hp_buff / 100);
				mon_atk *= (1 + atk_buff / 100);
				mon_def *= (1 + def_buff / 100);
			}

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

			if (core.getFlag('skill', 0) == 1) {
				hero_atk *= 2;
			}

			if (core.hasSpecial(mon_special, 20) && !core.hasItem("cross"))
				return null;

			var init_damage = 0;
			if (core.hasSpecial(mon_special, 11)) {
				var vampire_damage = hero_hp * enemy.vampire;

				vampire_damage = Math.floor(vampire_damage) || 0;
				if (enemy.add)
					mon_hp += vampire_damage;

				init_damage += vampire_damage;
			}

			var per_damage = mon_atk - hero_def;
			if (core.hasSpecial(mon_special, 2)) per_damage = mon_atk;
			if (per_damage < 0) per_damage = 0;

			if (core.hasSpecial(mon_special, 4)) per_damage *= 2;
			if (core.hasSpecial(mon_special, 5)) per_damage *= 3;
			if (core.hasSpecial(mon_special, 6)) per_damage *= (enemy.n || 4);

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

			var turn = Math.ceil(mon_hp / hero_per_damage);

			var guards = core.getFlag("__guards__" + x + "_" + y, enemyInfo.guards);
			var guard_before_current_enemy = false;
			turn += core.getFlag("__extraTurn__", 0);
			if (guards.length > 0) {
				if (!guard_before_current_enemy) {
					core.setFlag("__extraTurn__", turn);
				}
				for (var i = 0; i < guards.length; i++) {
					var gx = guards[i][0],
						gy = guards[i][1],
						gid = guards[i][2];
					var info = core.enemys.getDamageInfo(core.material.enemys[gid], { hp: origin_hero_hp, atk: origin_hero_atk, def: origin_hero_def, mdef: 0 });
					if (info == null) {
						core.removeFlag("__extraTurn__");
						return null;
					}
					core.setFlag("__extraTurn__", info.turn);
					init_damage += info.damage;
				}
				if (guard_before_current_enemy) {
					turn += core.getFlag("__extraTurn__", 0);
				}
			}
			core.removeFlag("__extraTurn__");

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
						core.status.route.push("key:49");
						core.useItem('pickaxe', true);
					}
					break;
				case 50:
					if (core.hasItem('bomb')) {
						core.status.route.push("key:50");
						core.useItem('bomb', true);
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
				case 118:
				case 119:
					core.debug();
					break;
				case 70:
					if (core.hasItem('skill1')) {
						core.status.route.push("key:70");
						core.useItem('skill1', true);
					}
					break;
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
			core.setStatusBarInnerHTML('skill', core.getFlag('skillName', '无'));

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

				if (id == 'lavaNet' && !core.hasItem('amulet')) {
					damage[loc] = (damage[loc] || 0) + core.values.lavaDamage;
					type[loc][(block.event.name || "血网") + "伤害"] = true;
				}

				if (enemy && core.hasSpecial(enemy.special, 15) && !core.hasFlag('no_zone')) {
					var range = enemy.range || 1;
					var zoneSquare = false;
					if (enemy.zoneSquare != null) zoneSquare = enemy.zoneSquare;
					for (var dx = -range; dx <= range; dx++) {
						for (var dy = -range; dy <= range; dy++) {
							if (dx == 0 && dy == 0) continue;
							var nx = x + dx,
								ny = y + dy,
								currloc = nx + "," + ny;
							if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
							if (!zoneSquare && Math.abs(dx) + Math.abs(dy) > range) continue;
							damage[currloc] = (damage[currloc] || 0) + (enemy.zone || 0);
							type[currloc] = type[currloc] || {};
							type[currloc]["领域伤害"] = true;
						}
					}
				}

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
						var rnx = x + scan[rdir].x,
							rny = y + scan[rdir].y;
						if (rnx < 0 || rnx >= width || rny < 0 || rny >= height) continue;
						if (core.getBlock(rnx, rny, floorId, false) != null) continue;
						if (core.utils.scan[rdir] && !core.canMoveHero(x, y, rdir, floorId)) continue;
						repulse[currloc] = (repulse[currloc] || []).concat([
							[x, y, id, rdir]
						]);
					}
				}

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

				if (enemy && core.enemys.hasSpecial(enemy.special, 27) && !core.hasFlag("no_ambush")) {
					var scan = enemy.zoneSquare ? core.utils.scan2 : core.utils.scan;
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

				if (enemy && core.enemys.hasSpecial(enemy.special, 16) && !core.hasFlag('no_betweenAttack')) {
					for (var dir in core.utils.scan) {
						var nx = x + core.utils.scan[dir].x,
							ny = y + core.utils.scan[dir].y,
							currloc = nx + "," + ny;
						if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
						betweenAttackLocs[currloc] = true;
					}
				}

				var specialFlag = core.getSpecialFlag(enemy);
				if (specialFlag & 1) needCache = true;
				if (core.status.event.id == 'viewMaps') needCache = true;
				if ((core.status.event.id == 'book' || core.status.event.id == 'bool-detail') && core.status.event.ui) needCache = true;
			}

			for (var loc in betweenAttackLocs) {
				var xy = loc.split(","),
					x = parseInt(xy[0]),
					y = parseInt(xy[1]);
				var enemyId1 = null,
					enemyId2 = null;
				var leftBlock = blocks[(x - 1) + "," + y],
					rightBlock = blocks[(x + 1) + "," + y];
				var leftId = core.getFaceDownId(leftBlock),
					rightId = core.getFaceDownId(rightBlock);
				if (leftBlock && !leftBlock.disable && rightBlock && !rightBlock.disable && leftId == rightId) {
					if (core.hasSpecial(leftId, 16))
						enemyId1 = leftId;
				}
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
						var value = Math.floor(leftHp / 2);
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

			core.flags.canGoDeadZone = canGoDeadZone;
			core.status.checkBlock = {
				damage: damage,
				type: type,
				repulse: repulse,
				ambush: ambush,
				needCache: needCache,
				cache: {}
			};
		},
		"moveOneStep": function (callback) {
			core.status.hero.steps++;
			core.updateFollowers();
			core.drawHero();
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

			core.checkAutoEvents();
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
		},
		"moveDirectly": function (x, y, ignoreSteps) {
			if (ignoreSteps == null) ignoreSteps = core.canMoveDirectly(x, y);
			if (ignoreSteps >= 0) {
				if (core.hasFlag('poison')) {
					var damage = ignoreSteps * core.values.poisonDamage;
					if (damage >= core.status.hero.hp) return false;
					core.status.hero.statistics.poisonDamage += damage;
					core.status.hero.hp -= damage;
				}

				core.clearMap('hero');
				var lastDirection = core.status.route[core.status.route.length - 1];
				if (['left', 'right', 'up', 'down'].indexOf(lastDirection) >= 0)
					core.setHeroLoc('direction', lastDirection);
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
			return Object.keys(core.status.hero.items[cls] || {})
				.filter(function (id) { return !core.material.items[id].hideInToolbox; })
				.sort( /*function (id1, id2) { return core.material.items[id1].name <= core.material.items[id2].name ? -1 : 1 }*/);
		},
		"drawStatusBar": function () {
			var ctx, fill = function (text, x, y, style) {
				core.ui.setFont(ctx, (/\w+/.test(text) ? 'italic ' : '') + 'bold 18px Verdana');
				core.ui.fillBoldText(ctx, text, x, y, style);
			};
			if (core.flags.statusCanvas) {
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