
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import zones from '../../bean/activity/shatteredzone';

interface SGetShatteredZonesInfo {
	zones : typeof zones.DefaultData[];
	zonesClearReward : [number,number][];
	reloadInfoTime : bigint;
}

class SGetShatteredZonesInfo {
    static DefaultData: SGetShatteredZonesInfo = {
	zones : [],
	zonesClearReward : [],
	reloadInfoTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SGetShatteredZonesInfo { 
	const reader = new BufferReader(buffer)
try{
	const zonesLength = reader.readCompactUInt32();

	for (let i = 0; i < zonesLength; i++) {
	    SGetShatteredZonesInfo.DefaultData.zones.push(zones.Unmarshal(reader));
	}
	const zonesClearRewardLength = reader.readCompactUInt32();

	for (let i = 0; i < zonesClearRewardLength; i++) {
	    SGetShatteredZonesInfo.DefaultData.zonesClearReward.push([reader.readInt32(),reader.readInt32()]);
	}
	SGetShatteredZonesInfo.DefaultData.reloadInfoTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetShatteredZonesInfo.DefaultData);
    }

    static Marshal(data: SGetShatteredZonesInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.zones).length);
	data.zones.forEach((value) => {
		buffer.writeBuffer(zones.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.zonesClearReward).length);
	data.zonesClearReward.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt64(BigInt(data.reloadInfoTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetShatteredZonesInfo;