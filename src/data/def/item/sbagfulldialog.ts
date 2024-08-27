
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SBagFullDialog {
	bagtype : number;
}

class SBagFullDialog {
    static DefaultData: SBagFullDialog = {
	bagtype : 0,
    }

    static Unmarshal(buffer: Buffer): SBagFullDialog { 
	const reader = new BufferReader(buffer)
try{
	SBagFullDialog.DefaultData.bagtype = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBagFullDialog.DefaultData);
    }

    static Marshal(data: SBagFullDialog): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.bagtype)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBagFullDialog;