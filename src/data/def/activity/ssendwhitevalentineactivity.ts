
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendWhiteValentineActivity {
	state : number;
	id : number;
	rewardState : number;
	roleId : number;
}

class SSendWhiteValentineActivity {
    static DefaultData: SSendWhiteValentineActivity = {
	state : 0,
	id : 0,
	rewardState : 0,
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): SSendWhiteValentineActivity { 
	const reader = new BufferReader(buffer)
try{
	SSendWhiteValentineActivity.DefaultData.state = reader.readInt32()
	SSendWhiteValentineActivity.DefaultData.id = reader.readInt32()
	SSendWhiteValentineActivity.DefaultData.rewardState = reader.readInt32()
	SSendWhiteValentineActivity.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendWhiteValentineActivity.DefaultData);
    }

    static Marshal(data: SSendWhiteValentineActivity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.state)
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.rewardState)
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendWhiteValentineActivity;