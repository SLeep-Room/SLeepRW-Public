
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CIslandTouchAltar {
	islandID : number;
}

class CIslandTouchAltar {
    static DefaultData: CIslandTouchAltar = {
	islandID : 0,
    }

    static Unmarshal(buffer: Buffer): CIslandTouchAltar { 
	const reader = new BufferReader(buffer)
try{
	CIslandTouchAltar.DefaultData.islandID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CIslandTouchAltar.DefaultData);
    }

    static Marshal(data: CIslandTouchAltar): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.islandID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CIslandTouchAltar;