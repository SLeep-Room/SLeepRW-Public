
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SysConfig {
}

class SysConfig {
    static DefaultData: SysConfig = {
    }

    static Unmarshal(buffer: BufferReader): SysConfig { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SysConfig.DefaultData);
    }

    static Marshal(data: SysConfig): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}
const SysConfigEnum={
    music : 1,
    musicNum : 2,
    soundEffect : 3,
    soundEffectNum : 4,
    dubbing : 5,
    dubbingNum : 6,
    quality : 7,
    UIDisplay : 8,
    sysChat : 9,
    worldChat : 10,
    guideChat : 11,
    boxOpen : 12,
    moveType : 13,
    showBuff : 14,
    rockerType : 15,
    autoBattleMode : 16,
};

export default SysConfigEnum;