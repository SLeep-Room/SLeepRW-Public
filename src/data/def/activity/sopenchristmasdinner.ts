
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenChristmasDinner {
	isOpen : number;
	leftTime : bigint;
	waiter : number;
	snack : number;
	used : number;
}

class SOpenChristmasDinner {
    static DefaultData: SOpenChristmasDinner = {
	isOpen : 0,
	leftTime : 0n,
	waiter : 0,
	snack : 0,
	used : 0,
    }

    static Unmarshal(buffer: Buffer): SOpenChristmasDinner { 
	const reader = new BufferReader(buffer)
try{
	SOpenChristmasDinner.DefaultData.isOpen = reader.readInt32()
	SOpenChristmasDinner.DefaultData.leftTime = reader.readInt64()
	SOpenChristmasDinner.DefaultData.waiter = reader.readInt32()
	SOpenChristmasDinner.DefaultData.snack = reader.readInt32()
	SOpenChristmasDinner.DefaultData.used = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenChristmasDinner.DefaultData);
    }

    static Marshal(data: SOpenChristmasDinner): Buffer { 
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


export default SOpenChristmasDinner;