
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import passiveskill from '../../bean/login/passiveskill';

interface SRoleUpdateBreakLv {
	roleId : number;
	breakLv : number;
	passiveskill : typeof passiveskill.DefaultData[];
	gainSkin : number;
	breakType : number;
}

class SRoleUpdateBreakLv {
    static DefaultData: SRoleUpdateBreakLv = {
	roleId : 0,
	breakLv : 0,
	passiveskill : [],
	gainSkin : 0,
	breakType : 0,
    }

    static Unmarshal(buffer: Buffer): SRoleUpdateBreakLv { 
	const reader = new BufferReader(buffer)
try{
	SRoleUpdateBreakLv.DefaultData.roleId = reader.readInt32()
	SRoleUpdateBreakLv.DefaultData.breakLv = reader.readInt16()
	const passiveskillLength = reader.readCompactUInt32();

	for (let i = 0; i < passiveskillLength; i++) {
	    SRoleUpdateBreakLv.DefaultData.passiveskill.push(passiveskill.Unmarshal(reader));
	}
	SRoleUpdateBreakLv.DefaultData.gainSkin = reader.readInt32()
	SRoleUpdateBreakLv.DefaultData.breakType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRoleUpdateBreakLv.DefaultData);
    }

    static Marshal(data: SRoleUpdateBreakLv): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt16(data.breakLv)
	buffer.writeCompactInt32(Object.keys(data.passiveskill).length);
	data.passiveskill.forEach((value) => {
		buffer.writeBuffer(passiveskill.Marshal(value))
	});
	buffer.writeInt32(data.gainSkin)
	buffer.writeInt32(data.breakType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRoleUpdateBreakLv;