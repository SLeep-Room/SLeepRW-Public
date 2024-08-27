
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SProfessionRune {
	roleId : number;
	professionRune : number;
}

class SProfessionRune {
    static DefaultData: SProfessionRune = {
	roleId : 0,
	professionRune : 0,
    }

    static Unmarshal(buffer: Buffer): SProfessionRune { 
	const reader = new BufferReader(buffer)
try{
	SProfessionRune.DefaultData.roleId = reader.readInt32()
	SProfessionRune.DefaultData.professionRune = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SProfessionRune.DefaultData);
    }

    static Marshal(data: SProfessionRune): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.professionRune)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SProfessionRune;