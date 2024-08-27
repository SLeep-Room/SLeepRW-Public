
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveForesightAct {
	activityId : number;
	dayNum : number;
}

class CReceiveForesightAct {
    static DefaultData: CReceiveForesightAct = {
	activityId : 0,
	dayNum : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveForesightAct { 
	const reader = new BufferReader(buffer)
try{
	CReceiveForesightAct.DefaultData.activityId = reader.readInt32()
	CReceiveForesightAct.DefaultData.dayNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveForesightAct.DefaultData);
    }

    static Marshal(data: CReceiveForesightAct): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeInt32(data.dayNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveForesightAct;