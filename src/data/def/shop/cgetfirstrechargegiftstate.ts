
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetFirstRechargeGiftState {
}

class CGetFirstRechargeGiftState {
    static DefaultData: CGetFirstRechargeGiftState = {
    }

    static Unmarshal(buffer: Buffer): CGetFirstRechargeGiftState { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetFirstRechargeGiftState.DefaultData);
    }

    static Marshal(data: CGetFirstRechargeGiftState): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetFirstRechargeGiftState;