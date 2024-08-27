
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CJumpToScene {
	sceneId : number;
}

class CJumpToScene {
    static DefaultData: CJumpToScene = {
	sceneId : 0,
    }

    static Unmarshal(buffer: Buffer): CJumpToScene { 
	const reader = new BufferReader(buffer)
try{
	CJumpToScene.DefaultData.sceneId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CJumpToScene.DefaultData);
    }

    static Marshal(data: CJumpToScene): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.sceneId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CJumpToScene;