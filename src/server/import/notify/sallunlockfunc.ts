import { CmdID } from '../../../data/CmdID';
import Serializable  from '../../../util/buffer/Serializable';
import SAllUnlockFunc from '../../../data/def/notify/sallunlockfunc';

export default async function(socket:any) { 
    socket.send(CmdID.notify.sallunlockfunc,
        SAllUnlockFunc.Marshal(
            {
                funcLisk:[
                    { funId: 1, sortId: 1 },
                    { funId: 2, sortId: 2 },
                    { funId: 4, sortId: 3 },
                    { funId: 5, sortId: 4 },
                    { funId: 6, sortId: 5 },
                    { funId: 7, sortId: 6 },
                    { funId: 11, sortId: 11 },
                    { funId: 12, sortId: 12 },
                    { funId: 13, sortId: 13 },
                    { funId: 14, sortId: 14 },
                    { funId: 15, sortId: 15 },
                    { funId: 16, sortId: 16 },
                    { funId: 18, sortId: 18 },
                    { funId: 23, sortId: 23 },
                    { funId: 24, sortId: 24 },
                    { funId: 25, sortId: 25 },
                    { funId: 26, sortId: 26 },
                    { funId: 27, sortId: 27 },
                    { funId: 28, sortId: 28 },
                    { funId: 29, sortId: 29 },
                    { funId: 30, sortId: 30 },
                    { funId: 31, sortId: 31 },
                    { funId: 32, sortId: 32 },
                    { funId: 33, sortId: 33 },
                    { funId: 34, sortId: 34 },
                    { funId: 35, sortId: 35 },
                    { funId: 36, sortId: 36 },
                    { funId: 37, sortId: 37 },
                    { funId: 38, sortId: 38 },
                    { funId: 39, sortId: 39 },
                    { funId: 40, sortId: 40 },
                    { funId: 41, sortId: 41 },
                    { funId: 42, sortId: 42 },
                    { funId: 43, sortId: 43 },
                    { funId: 44, sortId: 44 },
                    { funId: 45, sortId: 45 },
                    { funId: 46, sortId: 46 },
                    { funId: 47, sortId: 47 },
                    { funId: 48, sortId: 48 },
                    { funId: 49, sortId: 49 },

                    { funId: 1001, sortId: 1001 },
                    { funId: 1003, sortId: 1003 },
                    { funId: 1005, sortId: 1005 },
                    { funId: 1007, sortId: 1007 },
                    { funId: 1008, sortId: 1008 },
                    { funId: 1009, sortId: 1009 },
                    { funId: 1010, sortId: 1010 },
                    { funId: 1011, sortId: 1011 },
                    { funId: 1012, sortId: 1012 }
                ],
            }
        )
    );
    
}