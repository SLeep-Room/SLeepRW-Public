
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CNpcService {
	npcId : number;
	serviceId : number;
}

class CNpcService {
    static DefaultData: CNpcService = {
	npcId : 0,
	serviceId : 0,
    }

    static Unmarshal(buffer: Buffer): CNpcService { 
	const reader = new BufferReader(buffer)
try{
	CNpcService.DefaultData.npcId = reader.readInt32()
	CNpcService.DefaultData.serviceId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CNpcService.DefaultData);
    }

    static Marshal(data: CNpcService): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.npcId)
	buffer.writeInt32(data.serviceId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CNpcService;