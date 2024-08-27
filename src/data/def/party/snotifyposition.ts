
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SNotifyPosition {
	userId : bigint;
	position : number;
}

class SNotifyPosition {
    static DefaultData: SNotifyPosition = {
	userId : 0n,
	position : 0,
    }

    static Unmarshal(buffer: Buffer): SNotifyPosition { 
	const reader = new BufferReader(buffer)
try{
	SNotifyPosition.DefaultData.userId = reader.readInt64()
	SNotifyPosition.DefaultData.position = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SNotifyPosition.DefaultData);
    }

    static Marshal(data: SNotifyPosition): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))
	buffer.writeInt32(data.position)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SNotifyPosition;