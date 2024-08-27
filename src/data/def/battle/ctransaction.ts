
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import eventInitPoint from '../../bean/battle/point';

interface CTransaction {
	kind : number;
	value : number;
	eventInitPoint : typeof eventInitPoint.DefaultData;
}

class CTransaction {
    static DefaultData: CTransaction = {
	kind : 0,
	value : 0,
	eventInitPoint : eventInitPoint.DefaultData,
    }

    static Unmarshal(buffer: Buffer): CTransaction { 
	const reader = new BufferReader(buffer)
try{
	CTransaction.DefaultData.kind = reader.readInt32()
	CTransaction.DefaultData.value = reader.readInt32()
	CTransaction.DefaultData.eventInitPoint = eventInitPoint.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CTransaction.DefaultData);
    }

    static Marshal(data: CTransaction): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.kind)
	buffer.writeInt32(data.value)
	buffer.writeBuffer(eventInitPoint.Marshal(data.eventInitPoint))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CTransaction;