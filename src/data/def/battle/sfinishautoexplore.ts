
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import battleResult from '../../bean/battle/battleresult';

interface SFinishAutoExplore {
	dungeonType : number;
	battleResult : typeof battleResult.DefaultData;
}

class SFinishAutoExplore {
    static DefaultData: SFinishAutoExplore = {
	dungeonType : 0,
	battleResult : battleResult.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SFinishAutoExplore { 
	const reader = new BufferReader(buffer)
try{
	SFinishAutoExplore.DefaultData.dungeonType = reader.readInt32()
	SFinishAutoExplore.DefaultData.battleResult = battleResult.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SFinishAutoExplore.DefaultData);
    }

    static Marshal(data: SFinishAutoExplore): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.dungeonType)
	buffer.writeBuffer(battleResult.Marshal(data.battleResult))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SFinishAutoExplore;