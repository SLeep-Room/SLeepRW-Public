import { CmdID } from '../../../data/CmdID';
import { UserData } from '../../../db/UserData';
import CConfirmentries from '../../../data/def/activity/cconfirmentries';
import SConfirmentries from '../../../data/def/activity/sconfirmentries';
import CentryConfig from "../../../data/excel/dungeonselect/centryconfig.json"
import e from 'express';

export default async function(socket: any, rawData: Buffer) {
    try {
        const client_message = CConfirmentries.Unmarshal(rawData);
        const User = new UserData(socket.userData);

        let entriesIndex = User.ActivityInfo.undrChallengeInfo.entries;

        const newEntries = client_message.entries.slice(-(client_message.entries.length-entriesIndex));
        //console.log("entriesIndex",entriesIndex,client_message.entries.length,entriesIndex)
        Object.assign(User.ActivityInfo.undrChallengeInfo,{
            entries:client_message.entries.length
        });

        const AllEntry = {
            score: 0,
            buff: [] as { id: number, num: number }[]
        };

        const entrySet = new Set<number>();
        const EntryConfig = Object.values(CentryConfig.Data);
        newEntries.forEach(data => {
            if (!entrySet.has(data)) {
                entrySet.add(data);
                const Entry = EntryConfig.find(item => item.id === data);
                if (Entry) {
                    AllEntry.score += Entry.bonusPoints;
                    AllEntry.buff.push({
                        id: parseInt(Entry.buffid),
                        num: 1,
                    });
                    
                } else {
                    console.error(`Entry with id ${data} not found in config`);
                }
            } else {
                console.error(`Duplicate entry detected: ${data}`);
            }
        });

        socket.send(CmdID.activity.sconfirmentries,
            SConfirmentries.Marshal({
                score: AllEntry.score,
            })
        );

        if(AllEntry.score>4700){
            console.log("error",AllEntry,newEntries,client_message.entries)
            AllEntry.score = 0;
            AllEntry.buff = [];
        }

        User.ActivityInfo.undrChallengeInfo.buffs = AllEntry.buff;
        User.ActivityInfo.undrChallengeInfo.score = AllEntry.score;

        socket.userData = User;
    } catch (error) {
        console.error('Error processing activity confirmation entries:', error);
    }
}


