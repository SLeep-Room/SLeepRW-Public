
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CEnterMainCity {
	enterCityType : number;
}

class CEnterMainCity {
    static DefaultData: CEnterMainCity = {
	enterCityType : 0,
    }

    static Unmarshal(buffer: Buffer): CEnterMainCity { 
	const reader = new BufferReader(buffer)
try{
	CEnterMainCity.DefaultData.enterCityType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CEnterMainCity.DefaultData);
    }

    static Marshal(data: CEnterMainCity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.enterCityType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CEnterMainCity;