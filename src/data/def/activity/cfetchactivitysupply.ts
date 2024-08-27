
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CFetchActivitySupply {
	activityId : number;
	supply : number;
}

class CFetchActivitySupply {
    static DefaultData: CFetchActivitySupply = {
	activityId : 0,
	supply : 0,
    }

    static Unmarshal(buffer: Buffer): CFetchActivitySupply { 
	const reader = new BufferReader(buffer)
try{
	CFetchActivitySupply.DefaultData.activityId = reader.readInt32()
	CFetchActivitySupply.DefaultData.supply = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CFetchActivitySupply.DefaultData);
    }

    static Marshal(data: CFetchActivitySupply): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeInt32(data.supply)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CFetchActivitySupply;