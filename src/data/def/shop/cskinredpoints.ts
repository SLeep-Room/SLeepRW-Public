
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSkinRedPoints {
	looked : number;
}

class CSkinRedPoints {
    static DefaultData: CSkinRedPoints = {
	looked : 0,
    }

    static Unmarshal(buffer: Buffer): CSkinRedPoints { 
	const reader = new BufferReader(buffer)
try{
	CSkinRedPoints.DefaultData.looked = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSkinRedPoints.DefaultData);
    }

    static Marshal(data: CSkinRedPoints): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.looked)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSkinRedPoints;