import { ValOptions } from './helpers';
import { ObjectHook, ObjectValHook } from './types';
import { Query } from 'firebase/database';
export declare const useObject: (query?: Query | null | undefined) => ObjectHook;
export declare const useObjectVal: <T, KeyField extends string = "", RefField extends string = "">(query?: Query | null | undefined, options?: ValOptions<T> | undefined) => ObjectValHook<T, KeyField, RefField>;
