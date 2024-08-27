
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendQueueInfo {
	order : number;
	queuelength : number;
	minutes : number;
}

class SSendQueueInfo {
    static DefaultData: SSendQueueInfo = {
	order : 0,
	queuelength : 0,
	minutes : 0,
    }

    static Unmarshal(buffer: Buffer): SSendQueueInfo { 
	const reader = new BufferReader(buffer)
try{
	SSendQueueInfo.DefaultData.order = reader.readInt32()
	SSendQueueInfo.DefaultData.queuelength = reader.readInt32()
	SSendQueueInfo.DefaultData.minutes = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendQueueInfo.DefaultData);
    }

    static Marshal(data: SSendQueueInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.order)
	buffer.writeInt32(data.queuelength)
	buffer.writeInt32(data.minutes)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendQueueInfo;