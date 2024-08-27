
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SLightPartyCancelRedpoint {
	redpointType : number;
}

class SLightPartyCancelRedpoint {
    static DefaultData: SLightPartyCancelRedpoint = {
	redpointType : 0,
    }

    static Unmarshal(buffer: Buffer): SLightPartyCancelRedpoint { 
	const reader = new BufferReader(buffer)
try{
	SLightPartyCancelRedpoint.DefaultData.redpointType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLightPartyCancelRedpoint.DefaultData);
    }

    static Marshal(data: SLightPartyCancelRedpoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.redpointType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLightPartyCancelRedpoint;