
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenSnackShop {
	isOpen : number;
	leftTime : bigint;
	waiter : number;
	snack : number;
	used : number;
}

class SOpenSnackShop {
    static DefaultData: SOpenSnackShop = {
	isOpen : 0,
	leftTime : 0n,
	waiter : 0,
	snack : 0,
	used : 0,
    }

    static Unmarshal(buffer: Buffer): SOpenSnackShop { 
	const reader = new BufferReader(buffer)
try{
	SOpenSnackShop.DefaultData.isOpen = reader.readInt32()
	SOpenSnackShop.DefaultData.leftTime = reader.readInt64()
	SOpenSnackShop.DefaultData.waiter = reader.readInt32()
	SOpenSnackShop.DefaultData.snack = reader.readInt32()
	SOpenSnackShop.DefaultData.used = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenSnackShop.DefaultData);
    }

    static Marshal(data: SOpenSnackShop): Buffer { 
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


export default SOpenSnackShop;