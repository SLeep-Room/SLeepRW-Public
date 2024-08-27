
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SDeleteTheme {
	key : number;
}

class SDeleteTheme {
    static DefaultData: SDeleteTheme = {
	key : 0,
    }

    static Unmarshal(buffer: Buffer): SDeleteTheme { 
	const reader = new BufferReader(buffer)
try{
	SDeleteTheme.DefaultData.key = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SDeleteTheme.DefaultData);
    }

    static Marshal(data: SDeleteTheme): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.key)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SDeleteTheme;