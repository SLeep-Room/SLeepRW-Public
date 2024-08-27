
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeUserAvatar {
	avatarId : number;
}

class CChangeUserAvatar {
    static DefaultData: CChangeUserAvatar = {
	avatarId : 0,
    }

    static Unmarshal(buffer: Buffer): CChangeUserAvatar { 
	const reader = new BufferReader(buffer)
try{
	CChangeUserAvatar.DefaultData.avatarId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeUserAvatar.DefaultData);
    }

    static Marshal(data: CChangeUserAvatar): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.avatarId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeUserAvatar;