
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import construction from '../../bean/activity/summerconstruction';

interface SUpdateSummerConstruction {
	result : number;
	construction : typeof construction.DefaultData;
}

class SUpdateSummerConstruction {
    static DefaultData: SUpdateSummerConstruction = {
	result : 0,
	construction : construction.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SUpdateSummerConstruction { 
	const reader = new BufferReader(buffer)
try{
	SUpdateSummerConstruction.DefaultData.result = reader.readInt32()
	SUpdateSummerConstruction.DefaultData.construction = construction.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUpdateSummerConstruction.DefaultData);
    }

    static Marshal(data: SUpdateSummerConstruction): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)
	buffer.writeBuffer(construction.Marshal(data.construction))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUpdateSummerConstruction;