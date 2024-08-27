
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRougeTowerResetType {
	resetType : number;
}

class CRougeTowerResetType {
    static DefaultData: CRougeTowerResetType = {
	resetType : 0,
    }

    static Unmarshal(buffer: Buffer): CRougeTowerResetType { 
	const reader = new BufferReader(buffer)
try{
	CRougeTowerResetType.DefaultData.resetType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRougeTowerResetType.DefaultData);
    }

    static Marshal(data: CRougeTowerResetType): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.resetType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRougeTowerResetType;