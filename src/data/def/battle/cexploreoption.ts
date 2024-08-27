
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CExploreOption {
	instanceid : number;
	id : number;
}

class CExploreOption {
    static DefaultData: CExploreOption = {
	instanceid : 0,
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CExploreOption { 
	const reader = new BufferReader(buffer)
try{
	CExploreOption.DefaultData.instanceid = reader.readInt32()
	CExploreOption.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CExploreOption.DefaultData);
    }

    static Marshal(data: CExploreOption): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.instanceid)
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CExploreOption;