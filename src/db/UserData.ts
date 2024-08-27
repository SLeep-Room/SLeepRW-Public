
interface UserInfo {
  userid : bigint;
  username : string;
  userlevel : number;
  userexp : number;
  strengthLimit : number;
  serverId : number;
  isNew : number;
  guides : [number,number][];
  buffGuides : [number,number][];
  procedures : [number,number][];
  power : number;
  avatarId : number;
  frameId : number;
  introduce : string;
  configs : [number,number][];
  phoneNum : string;
  mailAddr : string;
  isGM : number;
  tips : number[];
  npcTips : number[];
  enchant_MaNa : number;
  createTime : bigint;
  backgroundRole : number;
  backgroundSkin : number;
  guest : number;
  likedNum : number;
  iplocaladdr : string;
};
interface Lineups{
  id : number;
  name : string;
  roles : [number,number][];
  skill : number;
  power : number;
};
interface DungeonInfo {
  id: number;
  lineupId: number;
  point: {
      x: number;
      y: number;
      dir: number;
  };
  lastbattleid: number;
  battleresult: number;
};
interface Role {
  isLeader : number;
  id : number;
  birthday : bigint;
  breakLv : number;
  lv : number;
  exp : bigint;
  lock : number;
  properties : [number,number][];
  contractSkill : {
    skillItemId : number;
    skillLevel : number;
    power : number;
    selected : number;
  }[];
  passiveskill : {
    id : number;
    lock : number;
  }[];
  equips : [number,number][];
  preSetEquips : [number,number][];
  evolution : number;
  curLvBasePro : [number,number][];
  nextLvBasePro : [number,number][];
  breakLvRange : number[];
  nextEvolutionLvBasePro : [number,number][];
  power : number;
  energy : number;
  redDot : number;
  relationLevel : number;
  skin : number;
  goodProgress : number;
  receiveList : number[];
  unlockedNode : number[];
  suitSkills : [number,{
    skillIds : number[];
  }][];
  specialWeaponLevel : number;
  addPercent : [number,number][];
  runeLevel : number;
}
interface Bag {
  capacity : number;
  items : {
    id : number;
    itemtype : number;
    flags : number;
    key : number;
    position : number;
    number : number;
    delTime : bigint[];
    extra : {
      equipType : number;
      stage : number;
      level : number;
      exp : number;
      power : number;
      baseAttr : [number,number][];
      finalAttr : [number,number][];
      randomEntry : {
        index : number;
        randomId : number;
        kind : number;
        attr : number;
        attrValue : number;
        skill : number;
      }[];
      preRandomEntry : {
        index : number;
        randomId : number;
        kind : number;
        attr : number;
        attrValue : number;
        skill : number;
      }[];
      skillRandomEntry : {
        index : number;
        randomId : number;
        kind : number;
        attr : number;
        attrValue : number;
        skill : number;
      };
      finalAttrRandomEntry : {
        index : number;
        randomId : number;
        kind : number;
        attr : number;
        attrValue : number;
        skill : number;
      };
      preFinalAttrRandomEntry : {
        index : number;
        randomId : number;
        kind : number;
        attr : number;
        attrValue : number;
        skill : number;
      };
      roleId : number;
      lock : number;
      viewDetails : number;
      range : [number,string][];
      recommend : number;
      luck : number;
      nextEnchantCost : number;
      enchant : number;
    };
  }[];
};
interface Friend {
  userId:bigint;
  identity:number;
  friendTime:bigint;
  likeStatus:number;
  sparkStatus:number;
  message:{
    msg : string;
    hyperlinks : {
      userId : bigint;
      linkType : number;
      linkText : number;
    }[];
    time : bigint;
  }[];
};
interface AssetsRoleInfo{
  supportRole : number;
  displayRole : number[];
};
interface HeadInfo{
  avatars : [number,number][];//角色头像
  frames : [number,number][];//头像框
};
interface Mail{
  uniqueId : bigint;
  id : number;
  title : string;
  titleParameter : [string,string][];
  appellation : string;
  content : string;
  contentParameter : [string,string][];
  signature : string;
  attachment : {
    items : {
      id : number;
      itemtype : number;
      flags : number;
      key : number;
      position : number;
      number : number;
      delTime : bigint[];
      extra : {
        equipType : number;
        stage : number;
        level : number;
        exp : number;
        power : number;
        baseAttr : [number,number][];
        finalAttr : [number,number][];
        randomEntry : {
          index : number;
          randomId : number;
          kind : number;
          attr : number;
          attrValue : number;
          skill : number;
        }[];
        preRandomEntry : {
          index : number;
          randomId : number;
          kind : number;
          attr : number;
          attrValue : number;
          skill : number;
        }[];
        skillRandomEntry : {
          index : number;
          randomId : number;
          kind : number;
          attr : number;
          attrValue : number;
          skill : number;
        };
        finalAttrRandomEntry : {
          index : number;
          randomId : number;
          kind : number;
          attr : number;
          attrValue : number;
          skill : number;
        };
        preFinalAttrRandomEntry : {
          index : number;
          randomId : number;
          kind : number;
          attr : number;
          attrValue : number;
          skill : number;
        };
        roleId : number;
        lock : number;
        viewDetails : number;
        range : [number,string][];
        recommend : number;
        luck : number;
        nextEnchantCost : number;
        enchant : number;
      };
    }[],
  };
  mailType : number;
  receiveTime : bigint;
  deleteTime : bigint;
  status : number;
  questId : number;
};
interface ActivityInfo{//活动数据
  undrChallengeLogs:{
    finishTime:bigint,
    score: number,
    time: bigint,
    roleIdList: number[],
    roleLvList: number[],
    roleBreakList: number[],
    roleSkinList: number[],
    runeLevelList: number[],
  }[],//未定之路的挑战记录
  undrChallengeInfo:{
    entries:number,//下线后回恢复0
    score:number,//下线后回恢复0
    buffs:{
      id:number,
      num:number,
    }[],//下线后回恢复[]
  }
};
interface DungeonData{
  dungeonId: number;
  reconnect : {
    kind:number,
    value:number,
  },
  traps : {
      instanceid: number,
      id: number,
      state: number
  }[],
  switches : {
      instanceid: number,
      id: number,
      state: number,
      touch: number
  }[],
  objects : {
    items : {
      id : number;
      key : number;
      x : number;
      z : number;
      status : number;
    }[];
    objs : {
      id : number;
      objType : number;
      objId : number;
      status : number;
      x : number;
      y : number;
    }[];
    npcs : {//交互完的npc
      id : number;
      x : number;
      z : number;
      state : number;
    }[];
    monsterIds : number[];
    movableMonstersPosition : [number,{
      x : 0,
      y : 0,
      dir : 0,
    }][];
    box : number[];//已经开启的宝箱
  },
  points : number[],
  prePoints :number[],
  activedOptionIds : number[],
  specialPoint : {
    x : number;
    y : number;
    dir : number;
  }[],
  mapOpened : boolean;
	buffs : [number,number][];
};
interface HandbookInfo {
	equips : number[];
	monsters : number[];
	roles : [number,number][];
	npc : number[];
	worlds : number[];
	forces : number[];
	activities : number[];
	soulNums : [number,number][];
	lockedRoles : number[];
}
interface TaskInfo {
	majorTasks : {
    taskid : number;
    taskstatus : number;
    conditions : {
      conditionIndex : number;
      value : number;
      destValue : number;
    }[];
    acceptTime : bigint;
    visitable : number;
  }[];
	branchTasks : {
    taskid : number;
    taskstatus : number;
    conditions : {
      conditionIndex : number;
      value : number;
      destValue : number;
    }[];
    acceptTime : bigint;
    visitable : number;
  }[];
	dailyTasks : {
    taskid : number;
    taskstatus : number;
    conditions : {
      conditionIndex : number;
      value : number;
      destValue : number;
    }[];
    acceptTime : bigint;
    visitable : number;
  }[];
	characterTasks : {
    taskid : number;
    taskstatus : number;
    conditions : {
      conditionIndex : number;
      value : number;
      destValue : number;
    }[];
    acceptTime : bigint;
    visitable : number;
  }[];
	achieveTasks : {
    taskid : number;
    taskstatus : number;
    conditions : {
      conditionIndex : number;
      value : number;
      destValue : number;
    }[];
    acceptTime : bigint;
    visitable : number;
  }[];
	weekBossTasks : {
    taskid : number;
    taskstatus : number;
    conditions : {
      conditionIndex : number;
      value : number;
      destValue : number;
    }[];
    acceptTime : bigint;
    visitable : number;
  }[];
	taskChoices : {
    taskid : number;
	  choices : string[];
  }[];
}
interface SpiritInfo{
  spirit : number;
	strengthLimit : number;
	leftTime : bigint;
	recoverTimes : [number,number][];
}
interface YardInfo{
  magicTree : {
    level : number;
    tasks : [number,{
      statue : number;
      buildId : number;
      buildLvId : number;
      progress : number;
      leftTime : bigint;
    }][];
    speed : number;
  };
	cavern : {
    level : number;
    tasks : [number,{
      statue : number;
      Id : number;
      cavernId : number;
      product : {
        itemId : number;
	      nums : number;
      }[];
      progress : number;
      leftReceiveTime : bigint;
      roles : {
        roleId : number;
	      energy : bigint;
      }[];
      leftDeadline : bigint;
      exploreTimes : number;
    }][];
    refreshNums : number;
    leftRefreshTime : bigint;
  };
	lampStand : {
    id : number;
    level : number;
    leftRefreshTime : bigint;
    lampTask : [number,{
      id : number;
      level : number;
      glowwormNums : number;
    }][];
    LightSpots : {
      key : number;
	    itemId : number;
    }[];
    leftRefreshLightSpotTime : bigint;
    glowwormLevel : number;
    speed : number;
    white : bigint;
    dark : bigint;
    mix : bigint;
  };
	alchemy : {
    id : number;
    buildLevel : number;
    alchemyLevel : number;
    alchemyStage : number;
    alchemyExperience : number;
    roleId : number;
  };
	room : {
    name : string;
    id : number;
    level : number;
    floors : [number,{
      id : number;
      recovery : number;
      good : number;
      furniture : {
        key : number;
        itemId : number;
        point : {
          x : number;
	        y : number;
        };
      }[];
      rolesLeftRecoveryTime : [number,bigint][];
    }][];
    defaultTheme : {
      key : number;
      name : string;
      furniturePositions : {
        itemId : number;
	      point : {
          x : number;
	        y : number;
        };
      }[];
    }[];
  };
	trainRoom : {
    id : number;
    level : number;
    trainList : {
      id : number;
      status : number;
      roleId : number;
      leftTime : bigint;
    }[];
  };
	music : {
    id : number;
    level : number;
    songs : {
      id : number;
	    statue : number;
    }[];
  };
}

interface DrawCardLog{
  time : bigint;//抽卡时间
	poolId : number;//卡池id
	drawType : number;//抽卡类型
	cardList : number[];
	cardNumList : number[];
}

interface UserData {
  AccountInfo:{
    account:string;
    userid: bigint;
    token: string;
    needActive: boolean;
    online: boolean;
    lastLogoutTime: bigint;
    lastOnLineTime: bigint;
  };
  PlayerInfo:{
    UserInfo: UserInfo;
    HeadInfo:HeadInfo;
    AssetsRoleInfo:AssetsRoleInfo;
    HandbookInfo:HandbookInfo;
    TaskInfo:TaskInfo;
    SpiritInfo:SpiritInfo;
    YardInfo:YardInfo;
    Bags: [number,Bag][];
    Roles: Role[];
    Lineups:Lineups[];
    Friends:Friend[];
    Mails:Mail[];
    Skins:[number,number][];//roleid skinid 
    DrawCardLogs:DrawCardLog[];
  };
  BattleInfo:{
    DungeonInfo: DungeonInfo;
    DungeonDatas: DungeonData[];
  }
  ActivityInfo:ActivityInfo;
}

class UserData  {
  constructor(UserData:Partial<UserData>) {
    this.AccountInfo={
      account:UserData.AccountInfo.account || "",
      userid:UserData.AccountInfo.userid || 0n,
      token: UserData.AccountInfo.token || "",
      needActive: UserData.AccountInfo.needActive || false,
      online: UserData.AccountInfo.online || false,
      lastLogoutTime : UserData.AccountInfo.lastLogoutTime || 0n,
      lastOnLineTime : UserData.AccountInfo.lastOnLineTime || 0n,
    };
    this.PlayerInfo={
      UserInfo:UserData.PlayerInfo.UserInfo || {
        userid:0n,
        username:"",
        userlevel:0,
        userexp:0,
        strengthLimit:0,
        serverId:0,
        isNew:0,
        guides:[],
        buffGuides:[],
        procedures:[],
        power:0,
        avatarId:0,
        frameId:0,
        introduce:"",
        configs:[],
        phoneNum:"",
        mailAddr:"",
        isGM:0,
        tips:[],
        npcTips:[],
        enchant_MaNa:0,
        createTime:0n,
        backgroundRole:0,
        backgroundSkin:0,
        guest:0,
        likedNum:0,
        iplocaladdr:""
      },
      HeadInfo : UserData.PlayerInfo.HeadInfo || {
        avatars: [],
        frames: []
      },
      AssetsRoleInfo: UserData.PlayerInfo.AssetsRoleInfo || {
        supportRole:0,
        displayRole:[]
      },
      HandbookInfo:UserData.PlayerInfo.HandbookInfo||{
        equips : [],
        monsters : [],
        roles : [],
        npc : [],
        worlds : [],
        forces : [],
        activities : [],
        soulNums : [],
        lockedRoles : [],
      },
      TaskInfo:{
        majorTasks : [],
        branchTasks : [],
        dailyTasks : [],
        characterTasks : [],
        achieveTasks : [],
        weekBossTasks : [],
        taskChoices : [],
      },
      SpiritInfo:{
        spirit : 0,//精神
        strengthLimit : 0,//精神上限
        leftTime : 0n,//剩余时间
        recoverTimes : [],//回复次数数组
      },
      YardInfo:{
        magicTree: {
          level: 0,
          tasks: [],
          speed: 0
        },
        cavern: {
          level: 0,
          tasks: [],
          refreshNums: 0,
          leftRefreshTime: 0n
        },
        lampStand: {
          id: 0,
          level: 0,
          leftRefreshTime: 0n,
          lampTask: [],
          LightSpots: [],
          leftRefreshLightSpotTime: 0n,
          glowwormLevel: 0,
          speed: 0,
          white: 0n,
          dark: 0n,
          mix: 0n
        },
        alchemy: {
          id: 0,
          buildLevel: 0,
          alchemyLevel: 0,
          alchemyStage: 0,
          alchemyExperience: 0,
          roleId: 0
        },
        room: {
          name: "",
          id: 0,
          level: 0,
          floors: [],
          defaultTheme: []
        },
        trainRoom: {
          id: 0,
          level: 0,
          trainList: []
        },
        music: {
          id: 0,
          level: 0,
          songs: []
        }
      },
      Bags:UserData.PlayerInfo.Bags || [],
      Roles:UserData.PlayerInfo.Roles || [],
      Lineups:UserData.PlayerInfo.Lineups||[],
      Friends:UserData.PlayerInfo.Friends || [],
      Mails:UserData.PlayerInfo.Mails||[],
      Skins:UserData.PlayerInfo.Skins||[],
      DrawCardLogs:UserData.PlayerInfo.DrawCardLogs||[]
    };
    this.BattleInfo={
      DungeonInfo:UserData.BattleInfo.DungeonInfo || {
        id: 0,
        lineupId: 0,
        point: {
          x: 0,
          y: 0,
          dir: 0
        },
        lastbattleid: 0,
        battleresult: 0
      },
      DungeonDatas:UserData.BattleInfo.DungeonDatas || [],
    };
    this.ActivityInfo={
      undrChallengeInfo:UserData.ActivityInfo.undrChallengeInfo ||{
        entries:0,
        score:0,
        buffs:[]
      },
      undrChallengeLogs:[]
    };
  };
}

export { UserData };