
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import position from '../../bean/battle/point';

interface CRoleMove {
	sceneid : number;
	position : typeof position.DefaultData;
}

class CRoleMove {
    static DefaultData: CRoleMove = {
	sceneid : 0,
	position : position.DefaultData,
    }

    static Unmarshal(buffer: Buffer): CRoleMove { 
	const reader = new BufferReader(buffer)
try{
	CRoleMove.DefaultData.sceneid = reader.readInt32()
	CRoleMove.DefaultData.position = position.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRoleMove.DefaultData);
    }

    static Marshal(data: CRoleMove): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.sceneid)
	buffer.writeBuffer(position.Marshal(data.position))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRoleMove;