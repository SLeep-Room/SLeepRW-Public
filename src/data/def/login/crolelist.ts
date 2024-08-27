
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRoleList {
}

class CRoleList {
    static DefaultData: CRoleList = {
    }

    static Unmarshal(buffer: Buffer): CRoleList { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRoleList.DefaultData);
    }

    static Marshal(data: CRoleList): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRoleList;