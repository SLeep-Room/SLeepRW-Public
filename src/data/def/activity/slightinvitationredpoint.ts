
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SLightInvitationRedPoint {
	redpoint : number[];
}

class SLightInvitationRedPoint {
    static DefaultData: SLightInvitationRedPoint = {
	redpoint : [],
    }

    static Unmarshal(buffer: Buffer): SLightInvitationRedPoint { 
	const reader = new BufferReader(buffer)
try{
	const redpointLength = reader.readCompactUInt32();

	for (let i = 0; i < redpointLength; i++) {
	    SLightInvitationRedPoint.DefaultData.redpoint.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLightInvitationRedPoint.DefaultData);
    }

    static Marshal(data: SLightInvitationRedPoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.redpoint).length);
	data.redpoint.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLightInvitationRedPoint;