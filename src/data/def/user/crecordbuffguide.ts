
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRecordBuffGuide {
	buffType : number;
}

class CRecordBuffGuide {
    static DefaultData: CRecordBuffGuide = {
	buffType : 0,
    }

    static Unmarshal(buffer: Buffer): CRecordBuffGuide { 
	const reader = new BufferReader(buffer)
try{
	CRecordBuffGuide.DefaultData.buffType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRecordBuffGuide.DefaultData);
    }

    static Marshal(data: CRecordBuffGuide): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.buffType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRecordBuffGuide;