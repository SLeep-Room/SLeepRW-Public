
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRecordLowFrameBattle {
	fps : number;
	roles : string;
	effect : string;
}

class CRecordLowFrameBattle {
    static DefaultData: CRecordLowFrameBattle = {
	fps : 0,
	roles : "",
	effect : "",
    }

    static Unmarshal(buffer: Buffer): CRecordLowFrameBattle { 
	const reader = new BufferReader(buffer)
try{
	CRecordLowFrameBattle.DefaultData.fps = reader.readFloat32()
	CRecordLowFrameBattle.DefaultData.roles = reader.readString()
	CRecordLowFrameBattle.DefaultData.effect = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRecordLowFrameBattle.DefaultData);
    }

    static Marshal(data: CRecordLowFrameBattle): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeFloat32(data.fps)
	buffer.writeString(data.roles)
	buffer.writeString(data.effect)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRecordLowFrameBattle;