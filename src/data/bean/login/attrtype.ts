
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface AttrType {
}

class AttrType {
    static DefaultData: AttrType = {
    }

    static Unmarshal(buffer: BufferReader): AttrType { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},AttrType.DefaultData);
    }

    static Marshal(data: AttrType): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}

const AttrTypeEnum = {
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

export default AttrTypeEnum;