
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Train {
	id : number;
	status : number;
	roleId : number;
	leftTime : bigint;
}

class Train {
    static DefaultData: Train = {
	id : 0,
	status : 0,
	roleId : 0,
	leftTime : 0n,
    }

    static Unmarshal(buffer: BufferReader): Train { 
	const reader = buffer
try{
	Train.DefaultData.id = reader.readInt32()
	Train.DefaultData.status = reader.readInt32()
	Train.DefaultData.roleId = reader.readInt32()
	Train.DefaultData.leftTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Train.DefaultData);
    }

    static Marshal(data: Train): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.status)
	buffer.writeInt32(data.roleId)
	buffer.writeInt64(BigInt(data.leftTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Train;