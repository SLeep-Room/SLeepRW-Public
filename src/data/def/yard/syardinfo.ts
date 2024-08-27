
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import magicTree from '../../bean/yard/magictree';
import cavern from '../../bean/yard/cavern';
import lampStand from '../../bean/yard/lampstand';
import alchemy from '../../bean/yard/alchemy';
import room from '../../bean/yard/witchroom';
import trainRoom from '../../bean/yard/trainroom';
import music from '../../bean/yard/music';

interface SYardInfo {
	magicTree : typeof magicTree.DefaultData;
	cavern : typeof cavern.DefaultData;
	lampStand : typeof lampStand.DefaultData;
	alchemy : typeof alchemy.DefaultData;
	room : typeof room.DefaultData;
	trainRoom : typeof trainRoom.DefaultData;
	music : typeof music.DefaultData;
}

class SYardInfo {
    static DefaultData: SYardInfo = {
	magicTree : magicTree.DefaultData,
	cavern : cavern.DefaultData,
	lampStand : lampStand.DefaultData,
	alchemy : alchemy.DefaultData,
	room : room.DefaultData,
	trainRoom : trainRoom.DefaultData,
	music : music.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SYardInfo { 
	const reader = new BufferReader(buffer)
try{
	SYardInfo.DefaultData.magicTree = magicTree.Unmarshal(reader)
	SYardInfo.DefaultData.cavern = cavern.Unmarshal(reader)
	SYardInfo.DefaultData.lampStand = lampStand.Unmarshal(reader)
	SYardInfo.DefaultData.alchemy = alchemy.Unmarshal(reader)
	SYardInfo.DefaultData.room = room.Unmarshal(reader)
	SYardInfo.DefaultData.trainRoom = trainRoom.Unmarshal(reader)
	SYardInfo.DefaultData.music = music.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SYardInfo.DefaultData);
    }

    static Marshal(data: SYardInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(magicTree.Marshal(data.magicTree))
	buffer.writeBuffer(cavern.Marshal(data.cavern))
	buffer.writeBuffer(lampStand.Marshal(data.lampStand))
	buffer.writeBuffer(alchemy.Marshal(data.alchemy))
	buffer.writeBuffer(room.Marshal(data.room))
	buffer.writeBuffer(trainRoom.Marshal(data.trainRoom))
	buffer.writeBuffer(music.Marshal(data.music))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SYardInfo;