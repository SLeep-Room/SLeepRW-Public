
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import point from '../../bean/yard/point';

interface Furniture {
	key : number;
	itemId : number;
	point : typeof point.DefaultData;
}

class Furniture {
    static DefaultData: Furniture = {
	key : 0,
	itemId : 0,
	point : point.DefaultData,
    }

    static Unmarshal(buffer: BufferReader): Furniture { 
	const reader = buffer
try{
	Furniture.DefaultData.key = reader.readInt32()
	Furniture.DefaultData.itemId = reader.readInt32()
	Furniture.DefaultData.point = point.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Furniture.DefaultData);
    }

    static Marshal(data: Furniture): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.key)
	buffer.writeInt32(data.itemId)
	buffer.writeBuffer(point.Marshal(data.point))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Furniture;