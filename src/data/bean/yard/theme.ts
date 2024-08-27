
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import furniturePositions from '../../bean/yard/furnitureposition';

interface Theme {
	key : number;
	name : string;
	furniturePositions : typeof furniturePositions.DefaultData[];
}

class Theme {
    static DefaultData: Theme = {
	key : 0,
	name : "",
	furniturePositions : [],
    }

    static Unmarshal(buffer: BufferReader): Theme { 
	const reader = buffer
try{
	Theme.DefaultData.key = reader.readInt32()
	Theme.DefaultData.name = reader.readString()
	const furniturePositionsLength = reader.readCompactUInt32();

	for (let i = 0; i < furniturePositionsLength; i++) {
	    Theme.DefaultData.furniturePositions.push(furniturePositions.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Theme.DefaultData);
    }

    static Marshal(data: Theme): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.key)
	buffer.writeString(data.name)
	buffer.writeCompactInt32(Object.keys(data.furniturePositions).length);
	data.furniturePositions.forEach((value) => {
		buffer.writeBuffer(furniturePositions.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Theme;