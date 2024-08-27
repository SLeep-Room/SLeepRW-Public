
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface WitchInfo {
	witchLv : number;
	upLvAble : number;
}

class WitchInfo {
    static DefaultData: WitchInfo = {
	witchLv : 0,
	upLvAble : 0,
    }

    static Unmarshal(buffer: BufferReader): WitchInfo { 
	const reader = buffer
try{
	WitchInfo.DefaultData.witchLv = reader.readInt32()
	WitchInfo.DefaultData.upLvAble = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},WitchInfo.DefaultData);
    }

    static Marshal(data: WitchInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.witchLv)
	buffer.writeInt32(data.upLvAble)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default WitchInfo;