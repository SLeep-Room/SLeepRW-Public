
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface GoodInfo {
	goodid : number;
	price : number;
	goodtype : number;
	magatama : number;
	present : number;
	show : number;
	leftday : number;
}

class GoodInfo {
    static DefaultData: GoodInfo = {
	goodid : 0,
	price : 0,
	goodtype : 0,
	magatama : 0,
	present : 0,
	show : 0,
	leftday : 0,
    }

    static Unmarshal(buffer: BufferReader): GoodInfo { 
	const reader = buffer
try{
	GoodInfo.DefaultData.goodid = reader.readInt32()
	GoodInfo.DefaultData.price = reader.readInt32()
	GoodInfo.DefaultData.goodtype = reader.readInt32()
	GoodInfo.DefaultData.magatama = reader.readInt32()
	GoodInfo.DefaultData.present = reader.readInt32()
	GoodInfo.DefaultData.show = reader.readInt32()
	GoodInfo.DefaultData.leftday = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},GoodInfo.DefaultData);
    }

    static Marshal(data: GoodInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.goodid)
	buffer.writeInt32(data.price)
	buffer.writeInt32(data.goodtype)
	buffer.writeInt32(data.magatama)
	buffer.writeInt32(data.present)
	buffer.writeInt32(data.show)
	buffer.writeInt32(data.leftday)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default GoodInfo;