
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDeleteTheme {
	key : number;
}

class CDeleteTheme {
    static DefaultData: CDeleteTheme = {
	key : 0,
    }

    static Unmarshal(buffer: Buffer): CDeleteTheme { 
	const reader = new BufferReader(buffer)
try{
	CDeleteTheme.DefaultData.key = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDeleteTheme.DefaultData);
    }

    static Marshal(data: CDeleteTheme): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.key)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDeleteTheme;