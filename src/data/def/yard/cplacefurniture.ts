
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import furniture from '../../bean/yard/furniture';

interface CPlaceFurniture {
	floorId : number;
	furniture : typeof furniture.DefaultData[];
}

class CPlaceFurniture {
    static DefaultData: CPlaceFurniture = {
	floorId : 0,
	furniture : [],
    }

    static Unmarshal(buffer: Buffer): CPlaceFurniture { 
	const reader = new BufferReader(buffer)
try{
	CPlaceFurniture.DefaultData.floorId = reader.readInt32()
	const furnitureLength = reader.readCompactUInt32();

	for (let i = 0; i < furnitureLength; i++) {
	    CPlaceFurniture.DefaultData.furniture.push(furniture.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CPlaceFurniture.DefaultData);
    }

    static Marshal(data: CPlaceFurniture): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.floorId)
	buffer.writeCompactInt32(Object.keys(data.furniture).length);
	data.furniture.forEach((value) => {
		buffer.writeBuffer(furniture.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CPlaceFurniture;