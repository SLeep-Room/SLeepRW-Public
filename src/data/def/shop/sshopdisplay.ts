
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SShopDisplay {
	shopType : number;
	isMask : number;
}

class SShopDisplay {
    static DefaultData: SShopDisplay = {
	shopType : 0,
	isMask : 0,
    }

    static Unmarshal(buffer: Buffer): SShopDisplay { 
	const reader = new BufferReader(buffer)
try{
	SShopDisplay.DefaultData.shopType = reader.readInt32()
	SShopDisplay.DefaultData.isMask = reader.readByte()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SShopDisplay.DefaultData);
    }

    static Marshal(data: SShopDisplay): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.shopType)
	buffer.writeByte(data.isMask)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SShopDisplay;