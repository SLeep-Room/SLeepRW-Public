
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import point from '../../bean/yard/point';

interface FurniturePosition {
	itemId : number;
	point : typeof point.DefaultData;
}

class FurniturePosition {
    static DefaultData: FurniturePosition = {
	itemId : 0,
	point : point.DefaultData,
    }

    static Unmarshal(buffer: BufferReader): FurniturePosition { 
	const reader = buffer
try{
	FurniturePosition.DefaultData.itemId = reader.readInt32()
	FurniturePosition.DefaultData.point = point.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},FurniturePosition.DefaultData);
    }

    static Marshal(data: FurniturePosition): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.itemId)
	buffer.writeBuffer(point.Marshal(data.point))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default FurniturePosition;