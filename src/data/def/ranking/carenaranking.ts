
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CArenaRanking {
	index : number;
}

class CArenaRanking {
    static DefaultData: CArenaRanking = {
	index : 0,
    }

    static Unmarshal(buffer: Buffer): CArenaRanking { 
	const reader = new BufferReader(buffer)
try{
	CArenaRanking.DefaultData.index = reader.readInt16()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CArenaRanking.DefaultData);
    }

    static Marshal(data: CArenaRanking): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt16(data.index)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CArenaRanking;