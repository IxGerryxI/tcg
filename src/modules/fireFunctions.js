import { getFunctions, httpsCallable, connectFunctionsEmulator } from 'firebase/functions';
import { app } from '@/modules/firebase';


export {
    call
}
// connectFunctionsEmulator(functions, "127.0.0.1", 5001);
function call(functionName, ...params) {
    const functions = getFunctions(app, "europe-west3");
    const func = httpsCallable(functions, functionName);
    return func(...params);
}