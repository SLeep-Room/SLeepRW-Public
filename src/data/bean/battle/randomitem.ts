
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface RandomItem {
	id : number;
	key : number;
	x : number;
	z : number;
	status : number;
}

class RandomItem {
    static DefaultData: RandomItem = {
	id : 0,
	key : 0,
	x : 0,
	z : 0,
	status : 0,
    }

    static Unmarshal(buffer: BufferReader): RandomItem { 
	const reader = buffer
try{
	RandomItem.DefaultData.id = reader.readInt32()
	RandomItem.DefaultData.key = reader.readInt32()
	RandomItem.DefaultData.x = reader.readInt32()
	RandomItem.DefaultData.z = reader.readInt32()
	RandomItem.DefaultData.status = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},RandomItem.DefaultData);
    }

    static Marshal(data: RandomItem): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.key)
	buffer.writeInt32(data.x)
	buffer.writeInt32(data.z)
	buffer.writeInt32(data.status)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default RandomItem;