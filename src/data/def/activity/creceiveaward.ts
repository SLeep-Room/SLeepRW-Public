
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveAward {
	actId : number;
}

class CReceiveAward {
    static DefaultData: CReceiveAward = {
	actId : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveAward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveAward.DefaultData.actId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveAward.DefaultData);
    }

    static Marshal(data: CReceiveAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.actId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveAward;