
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import magicTree from '../../bean/yard/magictree';

interface SRefreshMagicTree {
	magicTree : typeof magicTree.DefaultData;
}

class SRefreshMagicTree {
    static DefaultData: SRefreshMagicTree = {
	magicTree : magicTree.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SRefreshMagicTree { 
	const reader = new BufferReader(buffer)
try{
	SRefreshMagicTree.DefaultData.magicTree = magicTree.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshMagicTree.DefaultData);
    }

    static Marshal(data: SRefreshMagicTree): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(magicTree.Marshal(data.magicTree))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshMagicTree;