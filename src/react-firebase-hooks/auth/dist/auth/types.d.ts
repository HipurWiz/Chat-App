import { ActionCodeSettings, AuthError, CustomParameters, UserCredential } from 'firebase/auth';
export declare type AuthActionHook<M> = [
    M,
    UserCredential | undefined,
    boolean,
    AuthError | undefined
];
export declare type CreateUserOptions = {
    emailVerificationOptions?: ActionCodeSettings;
    sendEmailVerification?: boolean;
};
export declare type EmailAndPasswordActionHook = AuthActionHook<(email: string, password: string) => Promise<void>>;
export declare type SignInWithPopupHook = AuthActionHook<(scopes?: string[], customOAuthParameters?: CustomParameters) => Promise<void>>;
