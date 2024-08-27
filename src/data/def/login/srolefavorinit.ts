
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import favor from '../../bean/login/favor';

interface SRoleFavorInit {
	id : number;
	favor : typeof favor.DefaultData;
}

class SRoleFavorInit {
    static DefaultData: SRoleFavorInit = {
	id : 0,
	favor : favor.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SRoleFavorInit { 
	const reader = new BufferReader(buffer)
try{
	SRoleFavorInit.DefaultData.id = reader.readInt32()
	SRoleFavorInit.DefaultData.favor = favor.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRoleFavorInit.DefaultData);
    }

    static Marshal(data: SRoleFavorInit): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeBuffer(favor.Marshal(data.favor))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRoleFavorInit;