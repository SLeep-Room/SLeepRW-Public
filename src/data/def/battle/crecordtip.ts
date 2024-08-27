
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRecordTip {
	id : number;
	kind : number;
}

class CRecordTip {
    static DefaultData: CRecordTip = {
	id : 0,
	kind : 0,
    }

    static Unmarshal(buffer: Buffer): CRecordTip { 
	const reader = new BufferReader(buffer)
try{
	CRecordTip.DefaultData.id = reader.readInt32()
	CRecordTip.DefaultData.kind = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRecordTip.DefaultData);
    }

    static Marshal(data: CRecordTip): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.kind)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRecordTip;