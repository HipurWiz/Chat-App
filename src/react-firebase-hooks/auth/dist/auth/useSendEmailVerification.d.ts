import { Auth, AuthError } from 'firebase/auth';
export declare type SendEmailVerificationHook = [
    () => Promise<void>,
    boolean,
    AuthError | Error | undefined
];
declare const _default: (auth: Auth) => SendEmailVerificationHook;
export default _default;