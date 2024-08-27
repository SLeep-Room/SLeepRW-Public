
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import roles from '../../bean/yard/roletofloor';

interface CRecoveryEnergy {
	roles : typeof roles.DefaultData[];
}

class CRecoveryEnergy {
    static DefaultData: CRecoveryEnergy = {
	roles : [],
    }

    static Unmarshal(buffer: Buffer): CRecoveryEnergy { 
	const reader = new BufferReader(buffer)
try{
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    CRecoveryEnergy.DefaultData.roles.push(roles.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRecoveryEnergy.DefaultData);
    }

    static Marshal(data: CRecoveryEnergy): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.roles).length);
	data.roles.forEach((value) => {
		buffer.writeBuffer(roles.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRecoveryEnergy;