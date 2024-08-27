
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import product from '../../bean/yard/production';
import roles from '../../bean/yard/role';

interface CavernTask {
	statue : number;
	Id : number;
	cavernId : number;
	product : typeof product.DefaultData[];
	progress : number;
	leftReceiveTime : bigint;
	roles : typeof roles.DefaultData[];
	leftDeadline : bigint;
	exploreTimes : number;
}

class CavernTask {
    static DefaultData: CavernTask = {
	statue : 0,
	Id : 0,
	cavernId : 0,
	product : [],
	progress : 0,
	leftReceiveTime : 0n,
	roles : [],
	leftDeadline : 0n,
	exploreTimes : 0,
    }

    static Unmarshal(buffer: BufferReader): CavernTask { 
	const reader = buffer
try{
	CavernTask.DefaultData.statue = reader.readInt32()
	CavernTask.DefaultData.Id = reader.readInt32()
	CavernTask.DefaultData.cavernId = reader.readInt32()
	const productLength = reader.readCompactUInt32();

	for (let i = 0; i < productLength; i++) {
	    CavernTask.DefaultData.product.push(product.Unmarshal(reader));
	}
	CavernTask.DefaultData.progress = reader.readInt32()
	CavernTask.DefaultData.leftReceiveTime = reader.readInt64()
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    CavernTask.DefaultData.roles.push(roles.Unmarshal(reader));
	}
	CavernTask.DefaultData.leftDeadline = reader.readInt64()
	CavernTask.DefaultData.exploreTimes = reader.readInt16()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CavernTask.DefaultData);
    }

    static Marshal(data: CavernTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.statue)
	buffer.writeInt32(data.Id)
	buffer.writeInt32(data.cavernId)
	buffer.writeCompactInt32(Object.keys(data.product).length);
	data.product.forEach((value) => {
		buffer.writeBuffer(product.Marshal(value))
	});
	buffer.writeInt32(data.progress)
	buffer.writeInt64(BigInt(data.leftReceiveTime))
	buffer.writeCompactInt32(Object.keys(data.roles).length);
	data.roles.forEach((value) => {
		buffer.writeBuffer(roles.Marshal(value))
	});
	buffer.writeInt64(BigInt(data.leftDeadline))
	buffer.writeInt16(data.exploreTimes)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CavernTask;