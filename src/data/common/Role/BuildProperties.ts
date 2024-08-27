import AttrType from '../../../data/bean/login/attrtype';
import CRoleEvolutionCfg from '../../../data/excel/role/croleevolutioncfg.json'
import CAttreffectIdName from "../../../data/excel/role/cattreffectidname.json"
import {UserData} from '../../../db/UserData';

export default function BuildProperties(RoleCfg: any, Role:UserData["PlayerInfo"]["Roles"][0]) {
    
    function updateProperties(Properties:[number, number][], Key, Value) {
        for (let i = 0; i < Properties.length; i++) {
            if (Properties[i][0] === Key) {
                Properties[i][1] += Value;
                break;
            }
        }
    }

    const nowProperties = buildPropertiesForLevel(Role.lv, Role.breakLv);
    const nextLvProperties = buildPropertiesForLevel(Role.lv + 1, Role.breakLv);

    return { nowProperties, nextLvProperties};

    function buildPropertiesForLevel(level: number, breaklevel: number): [number, number][] {
        const [hp, atk, def, magicdef, speed] = BuildRoleData(level, breaklevel);
        
        const Properties:[number, number][] = [
            [AttrType.HP, hp],
            [AttrType.MAX_HP, hp],
            [AttrType.ATTACK, atk],
            [AttrType.MAGIC_ATTACK, atk],
            [AttrType.DEFEND, def],
            [AttrType.MAGIC_DEFEND, magicdef],
            [AttrType.SPEED, speed],
            [AttrType.PHYSICALBONUS, 0],
            [AttrType.PHYSICALREDUCE, 0],
            [AttrType.MAGICBONUS, 0],
            [AttrType.MAGICREDUCE, 0],
            [AttrType.CRITRATE, 80],
            [AttrType.CRITDEGREE, 1500],
        ];

        const RoleEvolutionCfg = Object.values(CRoleEvolutionCfg.Data)
        const AttreffectIdName = Object.values(CAttreffectIdName.Data)
        
        RoleEvolutionCfg.filter(data=>
            data.evolutionType === RoleCfg.evolutionType &&
            data.evolutionLevel === Role.evolution
        ).forEach(data=>{
            const Attreffect = AttreffectIdName.find(item=>
                item.ablEffctId === data.addProperty
            );
            updateProperties(Properties,Attreffect.id,data.addPropertyValue)
        });

        return Properties;
    }

    function BuildRoleData(level: number, breaklevel: number): [number, number, number, number, number] {
        let lv = level - [0, 30, 70, 130, 200][breaklevel];

        // 初始值+当前突破剩余的等级
        let hp = RoleCfg.hp + lv * RoleCfg.addhp;
        let atk = RoleCfg.attack + lv * RoleCfg.addattack;
        let def = RoleCfg.def + lv * RoleCfg.adddef;
        let magicdef = RoleCfg.magicDef + lv * RoleCfg.addmagicDef;
        let speed = parseInt(RoleCfg.speed) + lv * RoleCfg.addspeed;

        // 参数校正
        let defFactor: number, magicDefFactor: number;
        if (Math.abs(RoleCfg.breakaddmagicDef - 1.5 * RoleCfg.addmagicDef) < 0.2) {
            defFactor = 1.5 * RoleCfg.addmagicDef / RoleCfg.adddef;
            magicDefFactor = 1.5;
        } else {
            defFactor = 1;
            magicDefFactor = 1;
        }

        const maxlevel = [30, 40, 60, 70];
        const breakgap = [15, 35, 70, 120];

        for (let i = 0; i < breaklevel; i++) {
            hp += RoleCfg.addhp * (maxlevel[i] + breakgap[i]);
            atk += RoleCfg.addattack * (maxlevel[i] + breakgap[i]);
            def += RoleCfg.adddef * (maxlevel[i] + breakgap[i] * defFactor);
            magicdef += RoleCfg.addmagicDef * (maxlevel[i] + breakgap[i] * magicDefFactor);
        }

        return [hp, atk, def, magicdef, speed];
    }
}
