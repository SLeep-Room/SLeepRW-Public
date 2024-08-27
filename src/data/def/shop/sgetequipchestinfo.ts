
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SGetEquipChestInfo {
	chestID : number;
	realBox : number;
	currencyType : number;
	price : number;
	ddlTime : bigint;
	remainChance : number;
}

class SGetEquipChestInfo {
    static DefaultData: SGetEquipChestInfo = {
	chestID : 0,
	realBox : 0,
	currencyType : 0,
	price : 0,
	ddlTime : 0n,
	remainChance : 0,
    }

    static Unmarshal(buffer: Buffer): SGetEquipChestInfo { 
	const reader = new BufferReader(buffer)
try{
	SGetEquipChestInfo.DefaultData.chestID = reader.readInt32()
	SGetEquipChestInfo.DefaultData.realBox = reader.readInt32()
	SGetEquipChestInfo.DefaultData.currencyType = reader.readInt32()
	SGetEquipChestInfo.DefaultData.price = reader.readInt32()
	SGetEquipChestInfo.DefaultData.ddlTime = reader.readInt64()
	SGetEquipChestInfo.DefaultData.remainChance = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetEquipChestInfo.DefaultData);
    }

    static Marshal(data: SGetEquipChestInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.chestID)
	buffer.writeInt32(data.realBox)
	buffer.writeInt32(data.currencyType)
	buffer.writeInt32(data.price)
	buffer.writeInt64(BigInt(data.ddlTime))
	buffer.writeInt32(data.remainChance)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetEquipChestInfo;