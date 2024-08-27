
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeThemeName {
	name : string;
	key : number;
}

class CChangeThemeName {
    static DefaultData: CChangeThemeName = {
	name : "",
	key : 0,
    }

    static Unmarshal(buffer: Buffer): CChangeThemeName { 
	const reader = new BufferReader(buffer)
try{
	CChangeThemeName.DefaultData.name = reader.readString()
	CChangeThemeName.DefaultData.key = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeThemeName.DefaultData);
    }

    static Marshal(data: CChangeThemeName): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.name)
	buffer.writeInt32(data.key)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeThemeName;