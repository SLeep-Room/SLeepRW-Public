
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDungeonOption {
	optionId : number;
}

class CDungeonOption {
    static DefaultData: CDungeonOption = {
	optionId : 0,
    }

    static Unmarshal(buffer: Buffer): CDungeonOption { 
	const reader = new BufferReader(buffer)
try{
	CDungeonOption.DefaultData.optionId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDungeonOption.DefaultData);
    }

    static Marshal(data: CDungeonOption): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.optionId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDungeonOption;