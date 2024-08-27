
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SGetFirstRechargeGiftState {
	statue : number;
	giftsState : [number,number][];
}

class SGetFirstRechargeGiftState {
    static DefaultData: SGetFirstRechargeGiftState = {
	statue : 0,
	giftsState : [],
    }

    static Unmarshal(buffer: Buffer): SGetFirstRechargeGiftState { 
	const reader = new BufferReader(buffer)
try{
	SGetFirstRechargeGiftState.DefaultData.statue = reader.readInt32()
	const giftsStateLength = reader.readCompactUInt32();

	for (let i = 0; i < giftsStateLength; i++) {
	    SGetFirstRechargeGiftState.DefaultData.giftsState.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetFirstRechargeGiftState.DefaultData);
    }

    static Marshal(data: SGetFirstRechargeGiftState): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.statue)
	buffer.writeCompactInt32(Object.keys(data.giftsState).length);
	data.giftsState.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetFirstRechargeGiftState;