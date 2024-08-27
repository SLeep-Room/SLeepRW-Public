
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenResetShopPanel {
	shopType : number;
}

class COpenResetShopPanel {
    static DefaultData: COpenResetShopPanel = {
	shopType : 0,
    }

    static Unmarshal(buffer: Buffer): COpenResetShopPanel { 
	const reader = new BufferReader(buffer)
try{
	COpenResetShopPanel.DefaultData.shopType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenResetShopPanel.DefaultData);
    }

    static Marshal(data: COpenResetShopPanel): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.shopType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenResetShopPanel;