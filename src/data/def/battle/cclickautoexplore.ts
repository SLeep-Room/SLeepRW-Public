
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CClickAutoExplore {
	zoneId : number;
}

class CClickAutoExplore {
    static DefaultData: CClickAutoExplore = {
	zoneId : 0,
    }

    static Unmarshal(buffer: Buffer): CClickAutoExplore { 
	const reader = new BufferReader(buffer)
try{
	CClickAutoExplore.DefaultData.zoneId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CClickAutoExplore.DefaultData);
    }

    static Marshal(data: CClickAutoExplore): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.zoneId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CClickAutoExplore;