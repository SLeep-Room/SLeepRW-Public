
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import favorAward from '../../bean/login/favorawardinfo';

interface Favor {
	favorLv : number;
	favorExp : bigint;
	favorAward : [number,typeof favorAward.DefaultData][];
}

class Favor {
    static DefaultData: Favor = {
	favorLv : 0,
	favorExp : 0n,
	favorAward : [],
    }

    static Unmarshal(buffer: BufferReader): Favor { 
	const reader = buffer
try{
	Favor.DefaultData.favorLv = reader.readInt16()
	Favor.DefaultData.favorExp = reader.readInt64()
	const favorAwardLength = reader.readCompactUInt32();

	for (let i = 0; i < favorAwardLength; i++) {
	    Favor.DefaultData.favorAward.push([reader.readInt32(),favorAward.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Favor.DefaultData);
    }

    static Marshal(data: Favor): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt16(data.favorLv)
	buffer.writeInt64(BigInt(data.favorExp))
	buffer.writeCompactInt32(Object.keys(data.favorAward).length);
	data.favorAward.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(favorAward.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Favor;