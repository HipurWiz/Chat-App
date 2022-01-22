import { Auth, AuthError } from 'firebase/auth';
declare type Profile = {
    displayName?: string | null;
    photoURL?: string | null;
};
export declare type UpdateUserHook<M> = [M, boolean, AuthError | Error | undefined];
export declare type UpdateEmailHook = UpdateUserHook<(email: string) => Promise<void>>;
export declare type UpdatePasswordHook = UpdateUserHook<(password: string) => Promise<void>>;
export declare type UpdateProfileHook = UpdateUserHook<(profile: Profile) => Promise<void>>;
export declare const useUpdateEmail: (auth: Auth) => UpdateEmailHook;
export declare const useUpdatePassword: (auth: Auth) => UpdatePasswordHook;
export declare const useUpdateProfile: (auth: Auth) => UpdateProfileHook;
export {};