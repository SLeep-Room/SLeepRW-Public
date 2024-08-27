
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetActivityBattleList {
	activityId : number;
}

class CGetActivityBattleList {
    static DefaultData: CGetActivityBattleList = {
	activityId : 0,
    }

    static Unmarshal(buffer: Buffer): CGetActivityBattleList { 
	const reader = new BufferReader(buffer)
try{
	CGetActivityBattleList.DefaultData.activityId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetActivityBattleList.DefaultData);
    }

    static Marshal(data: CGetActivityBattleList): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetActivityBattleList;