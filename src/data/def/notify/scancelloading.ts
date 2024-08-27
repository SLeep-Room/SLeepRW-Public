
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SCancelLoading {
	protocolType : number;
}

class SCancelLoading {
    static DefaultData: SCancelLoading = {
	protocolType : 0,
    }

    static Unmarshal(buffer: Buffer): SCancelLoading { 
	const reader = new BufferReader(buffer)
try{
	SCancelLoading.DefaultData.protocolType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCancelLoading.DefaultData);
    }

    static Marshal(data: SCancelLoading): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.protocolType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCancelLoading;