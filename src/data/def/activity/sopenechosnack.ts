
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenEchoSnack {
	isOpen : number;
	leftTime : bigint;
	waiter : number;
	snack : number;
	used : number;
}

class SOpenEchoSnack {
    static DefaultData: SOpenEchoSnack = {
	isOpen : 0,
	leftTime : 0n,
	waiter : 0,
	snack : 0,
	used : 0,
    }

    static Unmarshal(buffer: Buffer): SOpenEchoSnack { 
	const reader = new BufferReader(buffer)
try{
	SOpenEchoSnack.DefaultData.isOpen = reader.readInt32()
	SOpenEchoSnack.DefaultData.leftTime = reader.readInt64()
	SOpenEchoSnack.DefaultData.waiter = reader.readInt32()
	SOpenEchoSnack.DefaultData.snack = reader.readInt32()
	SOpenEchoSnack.DefaultData.used = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenEchoSnack.DefaultData);
    }

    static Marshal(data: SOpenEchoSnack): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.isOpen)
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeInt32(data.waiter)
	buffer.writeInt32(data.snack)
	buffer.writeInt32(data.used)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenEchoSnack;