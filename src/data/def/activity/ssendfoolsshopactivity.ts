
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendFoolsShopActivity {
	state : number;
}

class SSendFoolsShopActivity {
    static DefaultData: SSendFoolsShopActivity = {
	state : 0,
    }

    static Unmarshal(buffer: Buffer): SSendFoolsShopActivity { 
	const reader = new BufferReader(buffer)
try{
	SSendFoolsShopActivity.DefaultData.state = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendFoolsShopActivity.DefaultData);
    }

    static Marshal(data: SSendFoolsShopActivity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.state)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendFoolsShopActivity;