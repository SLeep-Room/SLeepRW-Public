
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Point {
	x : number;
	y : number;
	dir : number;
}

class Point {
    static DefaultData: Point = {
	x : 0,
	y : 0,
	dir : 0,
    }

    static Unmarshal(buffer: BufferReader): Point { 
	const reader = buffer
try{
	Point.DefaultData.x = reader.readInt32()
	Point.DefaultData.y = reader.readInt32()
	Point.DefaultData.dir = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Point.DefaultData);
    }

    static Marshal(data: Point): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.x)
	buffer.writeInt32(data.y)
	buffer.writeInt32(data.dir)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Point;