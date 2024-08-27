
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUpdateUISortType {
	key : number;
	Showtype : number;
}

class CUpdateUISortType {
    static DefaultData: CUpdateUISortType = {
	key : 0,
	Showtype : 0,
    }

    static Unmarshal(buffer: Buffer): CUpdateUISortType { 
	const reader = new BufferReader(buffer)
try{
	CUpdateUISortType.DefaultData.key = reader.readInt32()
	CUpdateUISortType.DefaultData.Showtype = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUpdateUISortType.DefaultData);
    }

    static Marshal(data: CUpdateUISortType): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.key)
	buffer.writeInt32(data.Showtype)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUpdateUISortType;