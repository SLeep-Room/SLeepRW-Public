
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBuyMonthSignNum {
	num : number;
}

class CBuyMonthSignNum {
    static DefaultData: CBuyMonthSignNum = {
	num : 0,
    }

    static Unmarshal(buffer: Buffer): CBuyMonthSignNum { 
	const reader = new BufferReader(buffer)
try{
	CBuyMonthSignNum.DefaultData.num = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBuyMonthSignNum.DefaultData);
    }

    static Marshal(data: CBuyMonthSignNum): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.num)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBuyMonthSignNum;