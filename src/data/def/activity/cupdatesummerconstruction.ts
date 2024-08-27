
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUpdateSummerConstruction {
	ID : number;
	vertical : number;
	abscissa : number;
}

class CUpdateSummerConstruction {
    static DefaultData: CUpdateSummerConstruction = {
	ID : 0,
	vertical : 0,
	abscissa : 0,
    }

    static Unmarshal(buffer: Buffer): CUpdateSummerConstruction { 
	const reader = new BufferReader(buffer)
try{
	CUpdateSummerConstruction.DefaultData.ID = reader.readInt32()
	CUpdateSummerConstruction.DefaultData.vertical = reader.readInt32()
	CUpdateSummerConstruction.DefaultData.abscissa = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUpdateSummerConstruction.DefaultData);
    }

    static Marshal(data: CUpdateSummerConstruction): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.ID)
	buffer.writeInt32(data.vertical)
	buffer.writeInt32(data.abscissa)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUpdateSummerConstruction;