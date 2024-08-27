
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CFetchConsumptionAward {
	taskId : number;
}

class CFetchConsumptionAward {
    static DefaultData: CFetchConsumptionAward = {
	taskId : 0,
    }

    static Unmarshal(buffer: Buffer): CFetchConsumptionAward { 
	const reader = new BufferReader(buffer)
try{
	CFetchConsumptionAward.DefaultData.taskId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CFetchConsumptionAward.DefaultData);
    }

    static Marshal(data: CFetchConsumptionAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.taskId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CFetchConsumptionAward;