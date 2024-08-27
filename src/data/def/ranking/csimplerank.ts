
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSimpleRank {
	rankType : number;
	rankId : number;
}

class CSimpleRank {
    static DefaultData: CSimpleRank = {
	rankType : 0,
	rankId : 0,
    }

    static Unmarshal(buffer: Buffer): CSimpleRank { 
	const reader = new BufferReader(buffer)
try{
	CSimpleRank.DefaultData.rankType = reader.readInt32()
	CSimpleRank.DefaultData.rankId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSimpleRank.DefaultData);
    }

    static Marshal(data: CSimpleRank): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rankType)
	buffer.writeInt32(data.rankId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSimpleRank;