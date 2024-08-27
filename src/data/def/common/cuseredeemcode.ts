
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUseRedeemCode {
	code : string;
}

class CUseRedeemCode {
    static DefaultData: CUseRedeemCode = {
	code : "",
    }

    static Unmarshal(buffer: Buffer): CUseRedeemCode { 
	const reader = new BufferReader(buffer)
try{
	CUseRedeemCode.DefaultData.code = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUseRedeemCode.DefaultData);
    }

    static Marshal(data: CUseRedeemCode): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.code)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUseRedeemCode;