
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRefreshSupportRoleList {
}

class CRefreshSupportRoleList {
    static DefaultData: CRefreshSupportRoleList = {
    }

    static Unmarshal(buffer: Buffer): CRefreshSupportRoleList { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRefreshSupportRoleList.DefaultData);
    }

    static Marshal(data: CRefreshSupportRoleList): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRefreshSupportRoleList;