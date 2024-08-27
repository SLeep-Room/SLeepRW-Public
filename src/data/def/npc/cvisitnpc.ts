
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CVisitNpc {
	npcId : number;
}

class CVisitNpc {
    static DefaultData: CVisitNpc = {
	npcId : 0,
    }

    static Unmarshal(buffer: Buffer): CVisitNpc { 
	const reader = new BufferReader(buffer)
try{
	CVisitNpc.DefaultData.npcId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CVisitNpc.DefaultData);
    }

    static Marshal(data: CVisitNpc): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.npcId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CVisitNpc;