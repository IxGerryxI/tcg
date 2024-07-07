import { getFunctions, httpsCallable } from 'firebase/functions';
import { app } from '@/modules/firebase';


export {
    call
}

function call(functionName, ...params) {
    const functions = getFunctions();
    const func = httpsCallable(functions, functionName);
    return func(...params);
}