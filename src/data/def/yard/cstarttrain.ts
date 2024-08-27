
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CStartTrain {
	index : number;
	roleId : number;
}

class CStartTrain {
    static DefaultData: CStartTrain = {
	index : 0,
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): CStartTrain { 
	const reader = new BufferReader(buffer)
try{
	CStartTrain.DefaultData.index = reader.readInt32()
	CStartTrain.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CStartTrain.DefaultData);
    }

    static Marshal(data: CStartTrain): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.index)
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CStartTrain;