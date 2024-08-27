
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendSpringShopActivity {
	state : number;
}

class SSendSpringShopActivity {
    static DefaultData: SSendSpringShopActivity = {
	state : 0,
    }

    static Unmarshal(buffer: Buffer): SSendSpringShopActivity { 
	const reader = new BufferReader(buffer)
try{
	SSendSpringShopActivity.DefaultData.state = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendSpringShopActivity.DefaultData);
    }

    static Marshal(data: SSendSpringShopActivity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.state)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendSpringShopActivity;