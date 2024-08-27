
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import roleInfo from '../../bean/chat/supportroleforshow';
import userInfo from '../../bean/chat/otheruserinfo';

interface StrangerSupportRoleForShow {
	roleInfo : typeof roleInfo.DefaultData;
	userInfo : typeof userInfo.DefaultData;
}

class StrangerSupportRoleForShow {
    static DefaultData: StrangerSupportRoleForShow = {
	roleInfo : roleInfo.DefaultData,
	userInfo : userInfo.DefaultData,
    }

    static Unmarshal(buffer: BufferReader): StrangerSupportRoleForShow { 
	const reader = buffer
try{
	StrangerSupportRoleForShow.DefaultData.roleInfo = roleInfo.Unmarshal(reader)
	StrangerSupportRoleForShow.DefaultData.userInfo = userInfo.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},StrangerSupportRoleForShow.DefaultData);
    }

    static Marshal(data: StrangerSupportRoleForShow): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(roleInfo.Marshal(data.roleInfo))
	buffer.writeBuffer(userInfo.Marshal(data.userInfo))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default StrangerSupportRoleForShow;