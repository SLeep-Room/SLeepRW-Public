import { CmdID } from "./CmdID";
import Config from '../../config.json'; // JSON文件使用默认导入
import TextMap from './TextMapCN.json';
import * as fs from 'fs';
import { promisify } from 'util';
import { stringify } from 'json-bigint';
// 同步处理cmdid
let reverseMapping = {};
function buildCmdIDMapping(): void {
    for (const group in CmdID) {
        if (CmdID.hasOwnProperty(group)) {
            for (const key in CmdID[group]) {
                if (CmdID[group].hasOwnProperty(key)) {
                    const value = CmdID[group][key];
                    reverseMapping[value] = `${group}.${key}`;
                }
            }
        }
    }
}

// 获取cmdid
function GetProtocolType(value: number): string {
    const protocolName = reverseMapping[value];
    return protocolName ? protocolName.replace('.', '_') : undefined;
}

const writeFileAsync = promisify(fs.writeFile);

async function writeJson(filename: string, jsonData: any): Promise<void> {
  try {
      const data = stringify(jsonData);
      await writeFileAsync(filename, data);
  } catch (error) {
      console.error('[Error] writing to the JSON file:', error);
      throw error;
  }
}

// 初始化CmdID映射
buildCmdIDMapping();

// 导出GetProtocolType
export { Config, GetProtocolType , TextMap  , writeJson };