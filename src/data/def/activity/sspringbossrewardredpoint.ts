
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSpringBossRewardRedPoint {
	show : number;
}

class SSpringBossRewardRedPoint {
    static DefaultData: SSpringBossRewardRedPoint = {
	show : 0,
    }

    static Unmarshal(buffer: Buffer): SSpringBossRewardRedPoint { 
	const reader = new BufferReader(buffer)
try{
	SSpringBossRewardRedPoint.DefaultData.show = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSpringBossRewardRedPoint.DefaultData);
    }

    static Marshal(data: SSpringBossRewardRedPoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.show)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSpringBossRewardRedPoint;