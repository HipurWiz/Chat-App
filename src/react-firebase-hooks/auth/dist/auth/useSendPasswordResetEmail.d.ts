import { Auth, AuthError } from 'firebase/auth';
export declare type SendPasswordResetEmailHook = [
    (email: string) => Promise<void>,
    boolean,
    AuthError | Error | undefined
];
declare const _default: (auth: Auth) => SendPasswordResetEmailHook;
export default _default;
