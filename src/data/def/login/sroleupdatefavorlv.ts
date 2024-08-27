
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRoleUpdateFavorLv {
	id : number;
	favorLv : number;
	exp : bigint;
	favorAwardStatus : [number,number][];
}

class SRoleUpdateFavorLv {
    static DefaultData: SRoleUpdateFavorLv = {
	id : 0,
	favorLv : 0,
	exp : 0n,
	favorAwardStatus : [],
    }

    static Unmarshal(buffer: Buffer): SRoleUpdateFavorLv { 
	const reader = new BufferReader(buffer)
try{
	SRoleUpdateFavorLv.DefaultData.id = reader.readInt32()
	SRoleUpdateFavorLv.DefaultData.favorLv = reader.readInt16()
	SRoleUpdateFavorLv.DefaultData.exp = reader.readInt64()
	const favorAwardStatusLength = reader.readCompactUInt32();

	for (let i = 0; i < favorAwardStatusLength; i++) {
	    SRoleUpdateFavorLv.DefaultData.favorAwardStatus.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRoleUpdateFavorLv.DefaultData);
    }

    static Marshal(data: SRoleUpdateFavorLv): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt16(data.favorLv)
	buffer.writeInt64(BigInt(data.exp))
	buffer.writeCompactInt32(Object.keys(data.favorAwardStatus).length);
	data.favorAwardStatus.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRoleUpdateFavorLv;