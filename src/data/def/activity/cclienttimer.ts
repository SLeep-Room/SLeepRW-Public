
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCLientTimer {
	timeId : number;
}

class CCLientTimer {
    static DefaultData: CCLientTimer = {
	timeId : 0,
    }

    static Unmarshal(buffer: Buffer): CCLientTimer { 
	const reader = new BufferReader(buffer)
try{
	CCLientTimer.DefaultData.timeId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCLientTimer.DefaultData);
    }

    static Marshal(data: CCLientTimer): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.timeId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCLientTimer;