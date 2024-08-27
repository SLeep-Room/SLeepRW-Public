
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CStartAlchemy {
	formulaId : number;
	formulaNum : number;
}

class CStartAlchemy {
    static DefaultData: CStartAlchemy = {
	formulaId : 0,
	formulaNum : 0,
    }

    static Unmarshal(buffer: Buffer): CStartAlchemy { 
	const reader = new BufferReader(buffer)
try{
	CStartAlchemy.DefaultData.formulaId = reader.readInt32()
	CStartAlchemy.DefaultData.formulaNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CStartAlchemy.DefaultData);
    }

    static Marshal(data: CStartAlchemy): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.formulaId)
	buffer.writeInt32(data.formulaNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CStartAlchemy;