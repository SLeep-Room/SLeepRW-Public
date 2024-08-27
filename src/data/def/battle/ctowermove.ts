
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CTowerMove {
	nextIsland : number;
}

class CTowerMove {
    static DefaultData: CTowerMove = {
	nextIsland : 0,
    }

    static Unmarshal(buffer: Buffer): CTowerMove { 
	const reader = new BufferReader(buffer)
try{
	CTowerMove.DefaultData.nextIsland = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CTowerMove.DefaultData);
    }

    static Marshal(data: CTowerMove): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.nextIsland)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CTowerMove;