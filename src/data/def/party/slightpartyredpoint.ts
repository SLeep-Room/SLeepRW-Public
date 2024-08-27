
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SLightPartyRedpoint {
	redpointType : number[];
}

class SLightPartyRedpoint {
    static DefaultData: SLightPartyRedpoint = {
	redpointType : [],
    }

    static Unmarshal(buffer: Buffer): SLightPartyRedpoint { 
	const reader = new BufferReader(buffer)
try{
	const redpointTypeLength = reader.readCompactUInt32();

	for (let i = 0; i < redpointTypeLength; i++) {
	    SLightPartyRedpoint.DefaultData.redpointType.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLightPartyRedpoint.DefaultData);
    }

    static Marshal(data: SLightPartyRedpoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.redpointType).length);
	data.redpointType.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLightPartyRedpoint;