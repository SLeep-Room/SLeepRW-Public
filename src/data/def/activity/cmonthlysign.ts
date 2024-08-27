
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CMonthlySign {
	dayId : number;
}

class CMonthlySign {
    static DefaultData: CMonthlySign = {
	dayId : 0,
    }

    static Unmarshal(buffer: Buffer): CMonthlySign { 
	const reader = new BufferReader(buffer)
try{
	CMonthlySign.DefaultData.dayId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CMonthlySign.DefaultData);
    }

    static Marshal(data: CMonthlySign): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.dayId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CMonthlySign;