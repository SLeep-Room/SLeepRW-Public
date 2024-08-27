
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenSideQuestPanel {
}

class COpenSideQuestPanel {
    static DefaultData: COpenSideQuestPanel = {
    }

    static Unmarshal(buffer: Buffer): COpenSideQuestPanel { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenSideQuestPanel.DefaultData);
    }

    static Marshal(data: COpenSideQuestPanel): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenSideQuestPanel;