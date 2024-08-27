
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReqChargeHistory {
	page : number;
}

class CReqChargeHistory {
    static DefaultData: CReqChargeHistory = {
	page : 0,
    }

    static Unmarshal(buffer: Buffer): CReqChargeHistory { 
	const reader = new BufferReader(buffer)
try{
	CReqChargeHistory.DefaultData.page = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReqChargeHistory.DefaultData);
    }

    static Marshal(data: CReqChargeHistory): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.page)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReqChargeHistory;