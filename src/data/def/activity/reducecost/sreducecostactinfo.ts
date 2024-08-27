
import {Buffer} from 'buffer'
import BufferWriter from '../../../../util/buffer/BufferWriter';
import BufferReader from '../../../../util/buffer/BufferReader';

interface SReduceCostActInfo {
	endTime : bigint;
	floorList : string;
	discount : number;
}

class SReduceCostActInfo {
    static DefaultData: SReduceCostActInfo = {
	endTime : 0n,
	floorList : "",
	discount : 0,
    }

    static Unmarshal(buffer: Buffer): SReduceCostActInfo { 
	const reader = new BufferReader(buffer)
try{
	SReduceCostActInfo.DefaultData.endTime = reader.readInt64()
	SReduceCostActInfo.DefaultData.floorList = reader.readString()
	SReduceCostActInfo.DefaultData.discount = reader.readFloat32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReduceCostActInfo.DefaultData);
    }

    static Marshal(data: SReduceCostActInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.endTime))
	buffer.writeString(data.floorList)
	buffer.writeFloat32(data.discount)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReduceCostActInfo;