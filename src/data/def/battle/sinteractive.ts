
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import obj from '../../bean/battle/interactiveobj';

interface SInterActive {
	obj : typeof obj.DefaultData;
}

class SInterActive {
    static DefaultData: SInterActive = {
	obj : obj.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SInterActive { 
	const reader = new BufferReader(buffer)
try{
	SInterActive.DefaultData.obj = obj.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SInterActive.DefaultData);
    }

    static Marshal(data: SInterActive): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(obj.Marshal(data.obj))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SInterActive;