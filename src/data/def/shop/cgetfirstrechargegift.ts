
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetFirstRechargeGift {
	gainGiftID : number;
}

class CGetFirstRechargeGift {
    static DefaultData: CGetFirstRechargeGift = {
	gainGiftID : 0,
    }

    static Unmarshal(buffer: Buffer): CGetFirstRechargeGift { 
	const reader = new BufferReader(buffer)
try{
	CGetFirstRechargeGift.DefaultData.gainGiftID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetFirstRechargeGift.DefaultData);
    }

    static Marshal(data: CGetFirstRechargeGift): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.gainGiftID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetFirstRechargeGift;