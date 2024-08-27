
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SNpcService {
	npcId : number;
	serviceId : number;
	childServiceIds : number[];
}

class SNpcService {
    static DefaultData: SNpcService = {
	npcId : 0,
	serviceId : 0,
	childServiceIds : [],
    }

    static Unmarshal(buffer: Buffer): SNpcService { 
	const reader = new BufferReader(buffer)
try{
	SNpcService.DefaultData.npcId = reader.readInt32()
	SNpcService.DefaultData.serviceId = reader.readInt32()
	const childServiceIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < childServiceIdsLength; i++) {
	    SNpcService.DefaultData.childServiceIds.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SNpcService.DefaultData);
    }

    static Marshal(data: SNpcService): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.npcId)
	buffer.writeInt32(data.serviceId)
	buffer.writeCompactInt32(Object.keys(data.childServiceIds).length);
	data.childServiceIds.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SNpcService;