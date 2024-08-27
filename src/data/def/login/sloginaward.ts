
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import totalSign from '../../bean/login/totalsign';

interface SLoginAward {
	totalSign : typeof totalSign.DefaultData;
}

class SLoginAward {
    static DefaultData: SLoginAward = {
	totalSign : totalSign.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SLoginAward { 
	const reader = new BufferReader(buffer)
try{
	SLoginAward.DefaultData.totalSign = totalSign.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLoginAward.DefaultData);
    }

    static Marshal(data: SLoginAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(totalSign.Marshal(data.totalSign))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLoginAward;