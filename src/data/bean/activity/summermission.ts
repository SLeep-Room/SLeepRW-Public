
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SummerMission {
	ID : number;
	value : number;
	isFinish : number;
}

class SummerMission {
    static DefaultData: SummerMission = {
	ID : 0,
	value : 0,
	isFinish : 0,
    }

    static Unmarshal(buffer: BufferReader): SummerMission { 
	const reader = buffer
try{
	SummerMission.DefaultData.ID = reader.readInt32()
	SummerMission.DefaultData.value = reader.readInt32()
	SummerMission.DefaultData.isFinish = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SummerMission.DefaultData);
    }

    static Marshal(data: SummerMission): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.ID)
	buffer.writeInt32(data.value)
	buffer.writeInt32(data.isFinish)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SummerMission;