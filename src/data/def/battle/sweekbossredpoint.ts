
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SWeekBossRedPoint {
	redType : number;
}

class SWeekBossRedPoint {
    static DefaultData: SWeekBossRedPoint = {
	redType : 0,
    }

    static Unmarshal(buffer: Buffer): SWeekBossRedPoint { 
	const reader = new BufferReader(buffer)
try{
	SWeekBossRedPoint.DefaultData.redType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SWeekBossRedPoint.DefaultData);
    }

    static Marshal(data: SWeekBossRedPoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.redType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SWeekBossRedPoint;