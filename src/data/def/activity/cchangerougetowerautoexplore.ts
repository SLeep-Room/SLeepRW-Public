
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeRougeTowerAutoExplore {
	switchState : number;
}

class CChangeRougeTowerAutoExplore {
    static DefaultData: CChangeRougeTowerAutoExplore = {
	switchState : 0,
    }

    static Unmarshal(buffer: Buffer): CChangeRougeTowerAutoExplore { 
	const reader = new BufferReader(buffer)
try{
	CChangeRougeTowerAutoExplore.DefaultData.switchState = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeRougeTowerAutoExplore.DefaultData);
    }

    static Marshal(data: CChangeRougeTowerAutoExplore): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.switchState)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeRougeTowerAutoExplore;