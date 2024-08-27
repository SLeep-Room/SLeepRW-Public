
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeThemeName {
	name : string;
	key : number;
}

class SChangeThemeName {
    static DefaultData: SChangeThemeName = {
	name : "",
	key : 0,
    }

    static Unmarshal(buffer: Buffer): SChangeThemeName { 
	const reader = new BufferReader(buffer)
try{
	SChangeThemeName.DefaultData.name = reader.readString()
	SChangeThemeName.DefaultData.key = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeThemeName.DefaultData);
    }

    static Marshal(data: SChangeThemeName): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.name)
	buffer.writeInt32(data.key)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeThemeName;