
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeScrollSceneState {
	id : number;
}

class CChangeScrollSceneState {
    static DefaultData: CChangeScrollSceneState = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CChangeScrollSceneState { 
	const reader = new BufferReader(buffer)
try{
	CChangeScrollSceneState.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeScrollSceneState.DefaultData);
    }

    static Marshal(data: CChangeScrollSceneState): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeScrollSceneState;