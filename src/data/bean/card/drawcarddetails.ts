
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import ssr from '../../bean/card/rolepool';
import sr from '../../bean/card/rolepool';
import r from '../../bean/card/rolepool';
import ur from '../../bean/card/rolepool';

interface DrawCardDetails {
	upRoles : [number,number][];
	ssr : typeof ssr.DefaultData;
	sr : typeof sr.DefaultData;
	r : typeof r.DefaultData;
	ur : typeof ur.DefaultData;
}

class DrawCardDetails {
    static DefaultData: DrawCardDetails = {
	upRoles : [],
	ssr : ssr.DefaultData,
	sr : sr.DefaultData,
	r : r.DefaultData,
	ur : ur.DefaultData,
    }

    static Unmarshal(buffer: BufferReader): DrawCardDetails { 
	const reader = buffer
try{
	const upRolesLength = reader.readCompactUInt32();

	for (let i = 0; i < upRolesLength; i++) {
	    DrawCardDetails.DefaultData.upRoles.push([reader.readInt32(),reader.readInt32()]);
	}
	DrawCardDetails.DefaultData.ssr = ssr.Unmarshal(reader)
	DrawCardDetails.DefaultData.sr = sr.Unmarshal(reader)
	DrawCardDetails.DefaultData.r = r.Unmarshal(reader)
	DrawCardDetails.DefaultData.ur = ur.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},DrawCardDetails.DefaultData);
    }

    static Marshal(data: DrawCardDetails): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.upRoles).length);
	data.upRoles.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeBuffer(ssr.Marshal(data.ssr))
	buffer.writeBuffer(sr.Marshal(data.sr))
	buffer.writeBuffer(r.Marshal(data.r))
	buffer.writeBuffer(ur.Marshal(data.ur))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default DrawCardDetails;