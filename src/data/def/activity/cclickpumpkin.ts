
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CClickPumpkin {
	pumpkinId : number;
}

class CClickPumpkin {
    static DefaultData: CClickPumpkin = {
	pumpkinId : 0,
    }

    static Unmarshal(buffer: Buffer): CClickPumpkin { 
	const reader = new BufferReader(buffer)
try{
	CClickPumpkin.DefaultData.pumpkinId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CClickPumpkin.DefaultData);
    }

    static Marshal(data: CClickPumpkin): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.pumpkinId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CClickPumpkin;