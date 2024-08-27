
import AttrType from '../../../data/bean/login/attrtype';
import CDungeonSelectMainline from '../../../data/excel/dungeonselect/cdungeonselectmainline.json'


const Fighter = {
    FIGHTER_ROLE: 1,
    FIGHTER_MONSTER: 2,
}

export default function(socket:any, Monster: { id: any; hpConstant: string; attackConstant: string; defConstant: string; magicDefConstant: string; speedConstant: string; MonsterType: any; attackID: any; skillid: any; deadtype: any; npcLevel: any; }[] ) { 
    let right = [];

    if(Monster.length == 1){
        right.push([2,{
            fightertype: Fighter.FIGHTER_MONSTER, // 战斗者类型（默认为0）
            id: Monster[0].id, // ID（默认为0）
            attrs: [
                [AttrType.HP,parseInt(Monster[0].hpConstant) ],
                [AttrType.MAX_HP,parseInt(Monster[0].hpConstant)],
                [AttrType.ATTACK,parseInt(Monster[0].attackConstant)],
                [AttrType.DEFEND,parseInt(Monster[0].defConstant)],
                [AttrType.MAGIC_ATTACK,parseInt(Monster[0].attackConstant)],
                [AttrType.MAGIC_DEFEND,parseInt(Monster[0].magicDefConstant)],
                [AttrType.SPEED,parseInt(Monster[0].speedConstant)],
                [AttrType.MONSTER_TYPE,Monster[0].MonsterType]
            ], // 属性（空Map对象）
            baseSkill: Monster[0].attackID, // 基础技能
            skills: Monster[0].skillid, // 技能
            passiveSkills: Monster[0].skillid, // 被动技能
            deadtype: Monster[0].deadtype, // 死亡类型
            hpStrip: `${Monster[0].hpConstant};1`, // 生命条 可以分为很多条
            level: Monster[0].npcLevel, // 等级（默认为0）
            evolutionLevel: 0, // 进化等级（默认为0）
            exclusiveLevel: 0, // 独特等级（默认为0）
            equipSkills: [], // 装备技能（空数组）
            skinId: 0, // 皮肤ID（默认为0）
            autoExploreSkill: [], // 自动探索技能（空数组）
            runeSkill: [], // 符文技能（空数组）
        }]);
    }else if (Monster.length > 1){
        
         Monster.forEach((Monsters,key)=>{
            if(Monsters.id == 66060){//牛头人周本 削弱
                Monsters.hpConstant="100000";
                Monsters.attackConstant="300";
                Monsters.defConstant="0";
                Monsters.magicDefConstant="0";
            }

            right.push([key+1,{
                fightertype: Fighter.FIGHTER_MONSTER, // 战斗者类型（默认为0）
                id: Monsters.id, // ID（默认为0）
                attrs: [
                    [AttrType.HP,parseInt(Monsters.hpConstant) ],
                    [AttrType.MAX_HP,parseInt(Monsters.hpConstant)],
                    [AttrType.ATTACK,parseInt(Monsters.attackConstant)],
                    [AttrType.DEFEND,parseInt(Monsters.defConstant)],
                    [AttrType.MAGIC_ATTACK,parseInt(Monsters.attackConstant)],
                    [AttrType.MAGIC_DEFEND,parseInt(Monsters.magicDefConstant)],
                    [AttrType.SPEED,parseInt(Monsters.speedConstant)],
                    [AttrType.MONSTER_TYPE,Monsters.MonsterType]
                ], // 属性（空Map对象）
                baseSkill: Monsters.attackID, // 基础技能
                skills: Monsters.skillid, // 技能
                passiveSkills: Monsters.skillid, // 被动技能
                deadtype: Monsters.deadtype, // 死亡类型
                hpStrip: `${Monsters.hpConstant};1`, // 生命条 可以分为很多条
                level: Monsters.npcLevel, // 等级（默认为0）
                evolutionLevel: 0, // 进化等级（默认为0）
                exclusiveLevel: 0, // 独特等级（默认为0）
                equipSkills: [], // 装备技能（空数组）
                skinId: 0, // 皮肤ID（默认为0）
                autoExploreSkill: [], // 自动探索技能（空数组）
                runeSkill: [], // 符文技能（空数组）
            }]);
         })
    }
    //console.log(DungeonBattleConfig)
    console.log(right)
    //添加到战斗者right列表

    return right;
}

