
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import lampStand from '../../bean/yard/lampstand';

interface SRefreshLampStand {
	lampStand : typeof lampStand.DefaultData;
}

class SRefreshLampStand {
    static DefaultData: SRefreshLampStand = {
	lampStand : lampStand.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SRefreshLampStand { 
	const reader = new BufferReader(buffer)
try{
	SRefreshLampStand.DefaultData.lampStand = lampStand.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshLampStand.DefaultData);
    }

    static Marshal(data: SRefreshLampStand): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(lampStand.Marshal(data.lampStand))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshLampStand;