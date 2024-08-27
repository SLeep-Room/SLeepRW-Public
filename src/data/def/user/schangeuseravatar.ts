
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeUserAvatar {
	avatarId : number;
}

class SChangeUserAvatar {
    static DefaultData: SChangeUserAvatar = {
	avatarId : 0,
    }

    static Unmarshal(buffer: Buffer): SChangeUserAvatar { 
	const reader = new BufferReader(buffer)
try{
	SChangeUserAvatar.DefaultData.avatarId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeUserAvatar.DefaultData);
    }

    static Marshal(data: SChangeUserAvatar): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.avatarId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeUserAvatar;