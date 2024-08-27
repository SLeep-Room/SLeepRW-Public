
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CShareActivity {
	bannerId : number;
}

class CShareActivity {
    static DefaultData: CShareActivity = {
	bannerId : 0,
    }

    static Unmarshal(buffer: Buffer): CShareActivity { 
	const reader = new BufferReader(buffer)
try{
	CShareActivity.DefaultData.bannerId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CShareActivity.DefaultData);
    }

    static Marshal(data: CShareActivity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.bannerId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CShareActivity;