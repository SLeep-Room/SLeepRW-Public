
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import beanList from '../../bean/battle/battleverifyinfo';

interface VerifyInfoListBean {
	beanList : typeof beanList.DefaultData[];
}

class VerifyInfoListBean {
    static DefaultData: VerifyInfoListBean = {
	beanList : [],
    }

    static Unmarshal(buffer: BufferReader): VerifyInfoListBean { 
	const reader = buffer
try{
	const beanListLength = reader.readCompactUInt32();

	for (let i = 0; i < beanListLength; i++) {
	    VerifyInfoListBean.DefaultData.beanList.push(beanList.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},VerifyInfoListBean.DefaultData);
    }

    static Marshal(data: VerifyInfoListBean): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.beanList).length);
	data.beanList.forEach((value) => {
		buffer.writeBuffer(beanList.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default VerifyInfoListBean;