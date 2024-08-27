
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface IslandMonsterInfo {
	monserid : number;
	hppercent : number;
}

class IslandMonsterInfo {
    static DefaultData: IslandMonsterInfo = {
	monserid : 0,
	hppercent : 0,
    }

    static Unmarshal(buffer: BufferReader): IslandMonsterInfo { 
	const reader = buffer
try{
	IslandMonsterInfo.DefaultData.monserid = reader.readInt32()
	IslandMonsterInfo.DefaultData.hppercent = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},IslandMonsterInfo.DefaultData);
    }

    static Marshal(data: IslandMonsterInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.monserid)
	buffer.writeInt32(data.hppercent)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default IslandMonsterInfo;