
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetEquipChestInfo {
	chestID : number;
}

class CGetEquipChestInfo {
    static DefaultData: CGetEquipChestInfo = {
	chestID : 0,
    }

    static Unmarshal(buffer: Buffer): CGetEquipChestInfo { 
	const reader = new BufferReader(buffer)
try{
	CGetEquipChestInfo.DefaultData.chestID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetEquipChestInfo.DefaultData);
    }

    static Marshal(data: CGetEquipChestInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.chestID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetEquipChestInfo;