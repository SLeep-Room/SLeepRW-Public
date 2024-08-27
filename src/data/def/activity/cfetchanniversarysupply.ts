
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CFetchAnniversarySupply {
	supply : number;
}

class CFetchAnniversarySupply {
    static DefaultData: CFetchAnniversarySupply = {
	supply : 0,
    }

    static Unmarshal(buffer: Buffer): CFetchAnniversarySupply { 
	const reader = new BufferReader(buffer)
try{
	CFetchAnniversarySupply.DefaultData.supply = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CFetchAnniversarySupply.DefaultData);
    }

    static Marshal(data: CFetchAnniversarySupply): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.supply)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CFetchAnniversarySupply;