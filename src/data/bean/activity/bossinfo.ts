
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface BossInfo {
	bossID : number;
	result : number;
	bassPassExpRewards : number;
}

class BossInfo {
    static DefaultData: BossInfo = {
	bossID : 0,
	result : 0,
	bassPassExpRewards : 0,
    }

    static Unmarshal(buffer: BufferReader): BossInfo { 
	const reader = buffer
try{
	BossInfo.DefaultData.bossID = reader.readInt32()
	BossInfo.DefaultData.result = reader.readInt32()
	BossInfo.DefaultData.bassPassExpRewards = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},BossInfo.DefaultData);
    }

    static Marshal(data: BossInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.bossID)
	buffer.writeInt32(data.result)
	buffer.writeInt32(data.bassPassExpRewards)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default BossInfo;