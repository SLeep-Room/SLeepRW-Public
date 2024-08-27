
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CActivityExchange {
	activityId : number;
	exchangeNum : number;
	exchangeType : number;
}

class CActivityExchange {
    static DefaultData: CActivityExchange = {
	activityId : 0,
	exchangeNum : 0,
	exchangeType : 0,
    }

    static Unmarshal(buffer: Buffer): CActivityExchange { 
	const reader = new BufferReader(buffer)
try{
	CActivityExchange.DefaultData.activityId = reader.readInt32()
	CActivityExchange.DefaultData.exchangeNum = reader.readInt32()
	CActivityExchange.DefaultData.exchangeType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CActivityExchange.DefaultData);
    }

    static Marshal(data: CActivityExchange): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeInt32(data.exchangeNum)
	buffer.writeInt32(data.exchangeType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CActivityExchange;