
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import role from '../../bean/card/role';

interface SLookCardBaseAttr {
	role : typeof role.DefaultData;
}

class SLookCardBaseAttr {
    static DefaultData: SLookCardBaseAttr = {
	role : role.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SLookCardBaseAttr { 
	const reader = new BufferReader(buffer)
try{
	SLookCardBaseAttr.DefaultData.role = role.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLookCardBaseAttr.DefaultData);
    }

    static Marshal(data: SLookCardBaseAttr): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(role.Marshal(data.role))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLookCardBaseAttr;