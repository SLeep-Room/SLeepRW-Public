
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import cavernTask from '../../bean/yard/caverntask';

interface SRefreshCavernTaskActive {
	nums : number;
	cavernTask : typeof cavernTask.DefaultData;
	leftRefreshTime : bigint;
}

class SRefreshCavernTaskActive {
    static DefaultData: SRefreshCavernTaskActive = {
	nums : 0,
	cavernTask : cavernTask.DefaultData,
	leftRefreshTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SRefreshCavernTaskActive { 
	const reader = new BufferReader(buffer)
try{
	SRefreshCavernTaskActive.DefaultData.nums = reader.readInt32()
	SRefreshCavernTaskActive.DefaultData.cavernTask = cavernTask.Unmarshal(reader)
	SRefreshCavernTaskActive.DefaultData.leftRefreshTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshCavernTaskActive.DefaultData);
    }

    static Marshal(data: SRefreshCavernTaskActive): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.nums)
	buffer.writeBuffer(cavernTask.Marshal(data.cavernTask))
	buffer.writeInt64(BigInt(data.leftRefreshTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshCavernTaskActive;