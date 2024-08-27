
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import furniture from '../../bean/yard/furnitureposition';

interface CAddTheme {
	name : string;
	furniture : typeof furniture.DefaultData[];
}

class CAddTheme {
    static DefaultData: CAddTheme = {
	name : "",
	furniture : [],
    }

    static Unmarshal(buffer: Buffer): CAddTheme { 
	const reader = new BufferReader(buffer)
try{
	CAddTheme.DefaultData.name = reader.readString()
	const furnitureLength = reader.readCompactUInt32();

	for (let i = 0; i < furnitureLength; i++) {
	    CAddTheme.DefaultData.furniture.push(furniture.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAddTheme.DefaultData);
    }

    static Marshal(data: CAddTheme): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.name)
	buffer.writeCompactInt32(Object.keys(data.furniture).length);
	data.furniture.forEach((value) => {
		buffer.writeBuffer(furniture.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAddTheme;