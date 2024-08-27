
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRoleGetFavorAward {
	id : number;
}

class CRoleGetFavorAward {
    static DefaultData: CRoleGetFavorAward = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CRoleGetFavorAward { 
	const reader = new BufferReader(buffer)
try{
	CRoleGetFavorAward.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRoleGetFavorAward.DefaultData);
    }

    static Marshal(data: CRoleGetFavorAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRoleGetFavorAward;