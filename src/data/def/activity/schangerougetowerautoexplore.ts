
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeRougeTowerAutoExplore {
	result : number;
	switchState : number;
}

class SChangeRougeTowerAutoExplore {
    static DefaultData: SChangeRougeTowerAutoExplore = {
	result : 0,
	switchState : 0,
    }

    static Unmarshal(buffer: Buffer): SChangeRougeTowerAutoExplore { 
	const reader = new BufferReader(buffer)
try{
	SChangeRougeTowerAutoExplore.DefaultData.result = reader.readInt32()
	SChangeRougeTowerAutoExplore.DefaultData.switchState = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeRougeTowerAutoExplore.DefaultData);
    }

    static Marshal(data: SChangeRougeTowerAutoExplore): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)
	buffer.writeInt32(data.switchState)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeRougeTowerAutoExplore;