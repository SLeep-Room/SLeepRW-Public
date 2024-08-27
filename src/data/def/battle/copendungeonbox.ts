
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenDungeonBox {
	boxId : number;
}

class COpenDungeonBox {
    static DefaultData: COpenDungeonBox = {
	boxId : 0,
    }

    static Unmarshal(buffer: Buffer): COpenDungeonBox { 
	const reader = new BufferReader(buffer)
try{
	COpenDungeonBox.DefaultData.boxId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenDungeonBox.DefaultData);
    }

    static Marshal(data: COpenDungeonBox): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.boxId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenDungeonBox;