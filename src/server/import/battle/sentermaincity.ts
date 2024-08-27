import { CmdID } from '../../../data/CmdID';
import SEnterMainCity from '../../../data/def/battle/sentermaincity';

export default async function(socket:any) { 
    const CBattleStartProtocol = {
        TOWER: 1,
        SHATTERED: 2,
        DUNGEON: 3,
        TEST: 4,
        RESOURCE: 5,
        BOSS_RUSH: 6,
        ARENA: 7,
        STARRY: 8,
        UNDECIDEDROAD: 9,
        SUMMER: 10,
        CHRISTMAS: 11,
        SPRING_FESTIVAL: 12,
        LOVER: 13,
        WEEK_BOSS: 14,
        ANNIVERSARY: 15,
        STARRY_MIRROR: 16,
        SUMMER_ECHO: 17,
      }

      const DungeonType = {
        NONE: 0,
        SPECIAL: 1,
        MAIN: 2,
        RESOURCE: 3,
        BOSS: 4,
        AUTO: 5,
        TOWER: 6,
        SIDE_QUEST: 7,
        ACTIVITY: 8,
    }

    const TipStatus = {
        TIP_VOID: 0,
        TIP_FAIL: 1,
        TIP_NORMAL: 2,
        TIP_JUMP: 3,
        TIP_NO_TALK: 4,
        TIP_EXCEPTION: 5,
        TIP_DO_NOTHING: 6,
        TOWER_BACK: 66,
    }

    const BattleResultEnum = {
        FAILED: 0,
        SUCCESS: 1,
        SETTLE: 2,
    }

    const AttrType = {
        HP: 10,
        MAX_HP: 20,
        ATTACK: 30,
        MAGIC_ATTACK: 40,
        DEFEND: 50,
        MAGIC_DEFEND: 60,
        SPEED: 70,
        DAMAGE: 80,
        PHYSICALBONUS: 90,
        PHYSICALREDUCE: 100,
        MAGICBONUS: 110,
        MAGICREDUCE: 120,
        CRITRATE: 130,
        CRITDEGREE: 140,
        MAGICCRITRATE: 150,
        MAGICCRITRATEDEGREE: 160,
        ATTACKSPEED: 170,
        EVASION: 180,
        PHYSICALLIFESTEAL: 190,
        MAGICLIFESTEAL: 200,
        PHYSICALBLOCK: 210,
        MAGICBLOCK: 220,
        TOTALDMG: 230,
        MAGICEVASION: 240,
        PHYSICALDEFBREAK: 250,
        MAGICDEFBREAK: 260,
        CRITRATERESISTANCE: 270,
        EXTRAPHYSICALDAMAGE: 290,
        EXTRAMAGICDAMAGE: 300,
        CURATIVEBONUS: 310,
        ACCURACY: 320,
        ORDER_PWR: 330,
        CHAOS_PWR: 340,
        DMG_SKILL_ADD: 350,
        HEAL_SKILL_ADD: 360,
        SKILL_DAMAGE: 370,
        ORDER_COST: 380,
        CHAOS_COST: 390,
        DISPEL_BUFF_NUM: 400,
        MONSTER_TYPE: 410,
        SHEILD: 420,
        COMBO_NUM: 430,
        COOL_DOWN_REDUCE: 440,
        PASSIVE_SKILL: 450,
        IS_DEBUFF: 460,
        ORDER_COST_REDUCE: 470,
        CHAOS_COST_REDUCE: 480,
        BOSS_COMBO_NUM: 490,
        CRIT_LEVEL: 500,
        CRIT_DEGREE_LEVEL: 510,
        HEALING_POWER: 530,
        BASIC_ATTACK_PERCENT: 550,
        BASIC_DEFEND_PERCENT: 560,
        BASIC_MAGIC_DEFEND_PERCENT: 570,
        BASIC_MAX_HP_PERCENT: 580,
        COMBORATE1: 670,
        COMBORATE2: 680,
        CRITDEGREERESISTANCE: 830,
        DAMAGE_REDUCE: 1060,
        RUNE_LV: 1070,
    }
    
    const Fighter = {
        FIGHTER_ROLE: 1,
        FIGHTER_MONSTER: 2,
    }

    

    socket.send(CmdID.battle.sentermaincity,
        SEnterMainCity.Marshal({
            lastFloorId:1,
            battleResult:{
                battleId:0,
                result:BattleResultEnum.SETTLE,
                failTime:0,
                resourceFirstWin:1,
            },
            money:[],
            exploreawards:[],
            resourceParams:[],
            firstPassAward:[],
            tip:TipStatus.TIP_VOID,//进入提示 比如获得挂机马纳
            dungeonType:DungeonType.AUTO,
            curBattleInfo:{
                id: 1,
                battleType: CBattleStartProtocol.TOWER,
                battleid: 0,
                battleSceneId: 10001,
                lineId: 1,
                left: [
                    [1,{
                        fightertype: Fighter.FIGHTER_ROLE, // 战斗者类型（默认为0）
                        id: 1, // ID（默认为0）
                        attrs: [
                            [AttrType.HP,6000 ],
                            [AttrType.MAX_HP,6000],
                            [AttrType.ATTACK,60],
                            [AttrType.DEFEND,0],
                            [AttrType.MAGIC_ATTACK,0],
                            [AttrType.MAGIC_DEFEND,0],
                            [AttrType.SPEED,20],
                        ], // 属性（空Map对象）
                        baseSkill: 0, // 基础技能（默认为0）
                        skills: [], // 技能（空数组）
                        passiveSkills: [], // 被动技能（空数组）
                        deadtype: 0, // 死亡类型（默认为0）
                        hpStrip: "", // 生命条（空字符串）
                        level: 8, // 等级（默认为0）
                        evolutionLevel: 0, // 进化等级（默认为0）
                        exclusiveLevel: 0, // 独特等级（默认为0）
                        equipSkills: [], // 装备技能（空数组）
                        skinId: 0, // 皮肤ID（默认为0）
                        autoExploreSkill: [], // 自动探索技能（空数组）
                        runeSkill: [], // 符文技能（空数组）
                    }],
                ],
                right:[
                    [1,{
                        fightertype: Fighter.FIGHTER_MONSTER, // 战斗者类型（默认为0）
                        id: 20056, // ID（默认为0）
                        attrs: [
                            [AttrType.HP,6000 ],
                            [AttrType.MAX_HP,6000],
                            [AttrType.ATTACK,60],
                            [AttrType.DEFEND,0],
                            [AttrType.MAGIC_ATTACK,0],
                            [AttrType.MAGIC_DEFEND,0],
                            [AttrType.SPEED,20],
                            [AttrType.MONSTER_TYPE,107]
                        ], // 属性（空Map对象）
                        baseSkill: 0, // 基础技能（默认为0）
                        skills: [], // 技能（空数组）
                        passiveSkills: [], // 被动技能（空数组）
                        deadtype: 2, // 死亡类型（默认为0）
                        hpStrip: "10000", // 生命条（空字符串）
                        level: 8, // 等级（默认为0）
                        evolutionLevel: 0, // 进化等级（默认为0）
                        exclusiveLevel: 0, // 独特等级（默认为0）
                        equipSkills: [], // 装备技能（空数组）
                        skinId: 0, // 皮肤ID（默认为0）
                        autoExploreSkill: [], // 自动探索技能（空数组）
                        runeSkill: [], // 符文技能（空数组）
                    }],
                ],
                assist: {
                    fightertype: 0, // 默认为 0
                    id: 0, // 默认为 0
                    attrs: [], // 空 Map 对象
                    baseSkill: 0, // 默认为 0
                    skills: [], // 空数组
                    passiveSkills: [], // 空数组
                    deadtype: 0, // 默认为 0
                    hpStrip: "1000", // 空字符串
                    level: 0, // 默认为 0
                    evolutionLevel: 0, // 默认为 0
                    exclusiveLevel: 0, // 默认为 0
                    equipSkills: [], // 空数组
                    skinId: 0, // 默认为 0
                    autoExploreSkill: [], // 空数组
                    runeSkill: [], // 空数组 
                }, // 使用 Fighter 的默认值
                leftAssistNum: 0,
                totalAssistNum: 0,
                seed: 0,
                guide: 1120,
                auto:{
                    autoFight:0,
                    orderSKill:{
                        roleId:0,
                        skillId:0,
                    },

                    disorderSkill:{
                        roleId:0,
                        skillId:0,
                    },

                    eruptSkill:[],
                    speed:1,
                    lock:0,
                },
                battleVerifyNum: 1n, // 对于 int64 使用 BigInt
                battleDuration: 9999999999n, // 同上
                battleBuffs: [], // 使用 BattleBuff 的默认值
            }
        })
    );

    
}