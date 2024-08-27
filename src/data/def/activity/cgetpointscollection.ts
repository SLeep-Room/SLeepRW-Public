
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetPointsCollection {
	activityID : number;
}

class CGetPointsCollection {
    static DefaultData: CGetPointsCollection = {
	activityID : 0,
    }

    static Unmarshal(buffer: Buffer): CGetPointsCollection { 
	const reader = new BufferReader(buffer)
try{
	CGetPointsCollection.DefaultData.activityID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetPointsCollection.DefaultData);
    }

    static Marshal(data: CGetPointsCollection): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetPointsCollection;