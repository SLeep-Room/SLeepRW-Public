
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SVisitNpc {
	npcId : number;
	serviceIds : number[];
	effectid : number;
}

class SVisitNpc {
    static DefaultData: SVisitNpc = {
	npcId : 0,
	serviceIds : [],
	effectid : 0,
    }

    static Unmarshal(buffer: Buffer): SVisitNpc { 
	const reader = new BufferReader(buffer)
try{
	SVisitNpc.DefaultData.npcId = reader.readInt32()
	const serviceIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < serviceIdsLength; i++) {
	    SVisitNpc.DefaultData.serviceIds.push(reader.readInt32());
	}
	SVisitNpc.DefaultData.effectid = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SVisitNpc.DefaultData);
    }

    static Marshal(data: SVisitNpc): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.npcId)
	buffer.writeCompactInt32(Object.keys(data.serviceIds).length);
	data.serviceIds.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.effectid)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SVisitNpc;