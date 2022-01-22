import { Functions, HttpsCallableResult } from 'firebase/functions';
export declare type HttpsCallableHook<RequestData = unknown, ResponseData = unknown> = [
    (data?: RequestData) => Promise<HttpsCallableResult<ResponseData> | unknown>,
    boolean,
    Error | undefined
];
declare const _default: <RequestData = unknown, ResponseData = unknown>(functions: Functions, name: string) => HttpsCallableHook<RequestData, ResponseData>;
export default _default;
