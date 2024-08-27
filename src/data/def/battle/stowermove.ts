
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface STowerMove {
	nextIsland : number;
}

class STowerMove {
    static DefaultData: STowerMove = {
	nextIsland : 0,
    }

    static Unmarshal(buffer: Buffer): STowerMove { 
	const reader = new BufferReader(buffer)
try{
	STowerMove.DefaultData.nextIsland = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},STowerMove.DefaultData);
    }

    static Marshal(data: STowerMove): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.nextIsland)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default STowerMove;