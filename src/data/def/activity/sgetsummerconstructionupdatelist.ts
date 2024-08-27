
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SGetSummerConstructionUpdateList {
	constructionList : number[];
	unusedconstruction : number[];
}

class SGetSummerConstructionUpdateList {
    static DefaultData: SGetSummerConstructionUpdateList = {
	constructionList : [],
	unusedconstruction : [],
    }

    static Unmarshal(buffer: Buffer): SGetSummerConstructionUpdateList { 
	const reader = new BufferReader(buffer)
try{
	const constructionListLength = reader.readCompactUInt32();

	for (let i = 0; i < constructionListLength; i++) {
	    SGetSummerConstructionUpdateList.DefaultData.constructionList.push(reader.readInt32());
	}
	const unusedconstructionLength = reader.readCompactUInt32();

	for (let i = 0; i < unusedconstructionLength; i++) {
	    SGetSummerConstructionUpdateList.DefaultData.unusedconstruction.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetSummerConstructionUpdateList.DefaultData);
    }

    static Marshal(data: SGetSummerConstructionUpdateList): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.constructionList).length);
	data.constructionList.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.unusedconstruction).length);
	data.unusedconstruction.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetSummerConstructionUpdateList;