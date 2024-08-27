
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SCancelChallenge {
	result : number;
}

class SCancelChallenge {
    static DefaultData: SCancelChallenge = {
	result : 0,
    }

    static Unmarshal(buffer: Buffer): SCancelChallenge { 
	const reader = new BufferReader(buffer)
try{
	SCancelChallenge.DefaultData.result = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCancelChallenge.DefaultData);
    }

    static Marshal(data: SCancelChallenge): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCancelChallenge;