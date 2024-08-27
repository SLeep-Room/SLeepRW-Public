
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CActivityDramaPassed {
	dramaType : number;
	activity : number;
	battleID : number;
}

class CActivityDramaPassed {
    static DefaultData: CActivityDramaPassed = {
	dramaType : 0,
	activity : 0,
	battleID : 0,
    }

    static Unmarshal(buffer: Buffer): CActivityDramaPassed { 
	const reader = new BufferReader(buffer)
try{
	CActivityDramaPassed.DefaultData.dramaType = reader.readInt32()
	CActivityDramaPassed.DefaultData.activity = reader.readInt32()
	CActivityDramaPassed.DefaultData.battleID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CActivityDramaPassed.DefaultData);
    }

    static Marshal(data: CActivityDramaPassed): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.dramaType)
	buffer.writeInt32(data.activity)
	buffer.writeInt32(data.battleID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CActivityDramaPassed;