
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CFetchSkinCollectAward {
	taskId : number;
}

class CFetchSkinCollectAward {
    static DefaultData: CFetchSkinCollectAward = {
	taskId : 0,
    }

    static Unmarshal(buffer: Buffer): CFetchSkinCollectAward { 
	const reader = new BufferReader(buffer)
try{
	CFetchSkinCollectAward.DefaultData.taskId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CFetchSkinCollectAward.DefaultData);
    }

    static Marshal(data: CFetchSkinCollectAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.taskId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CFetchSkinCollectAward;