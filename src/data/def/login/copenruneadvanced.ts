
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenRuneAdvanced {
	roleId : number;
}

class COpenRuneAdvanced {
    static DefaultData: COpenRuneAdvanced = {
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): COpenRuneAdvanced { 
	const reader = new BufferReader(buffer)
try{
	COpenRuneAdvanced.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenRuneAdvanced.DefaultData);
    }

    static Marshal(data: COpenRuneAdvanced): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenRuneAdvanced;