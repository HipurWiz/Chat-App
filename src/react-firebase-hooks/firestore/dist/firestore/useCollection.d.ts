import { DocumentData, FirestoreError, Query, QuerySnapshot } from 'firebase/firestore';
import { CollectionHook, DataOptions, OnceDataOptions, OnceOptions, Options } from './types';
export declare const useCollection: <T = DocumentData>(query?: Query<T> | null | undefined, options?: Options | undefined) => CollectionHook<T>;
export declare const useCollectionOnce: <T = DocumentData>(query?: Query<T> | null | undefined, options?: OnceOptions | undefined) => [QuerySnapshot<T> | undefined, boolean, FirestoreError | undefined, () => Promise<void>];
export declare const useCollectionData: <T = DocumentData>(query?: Query<T> | null | undefined, options?: DataOptions<T> | undefined) => [T[] | undefined, boolean, FirestoreError | undefined, QuerySnapshot<T> | undefined];
export declare const useCollectionDataOnce: <T = DocumentData>(query?: Query<T> | null | undefined, options?: OnceDataOptions<T> | undefined) => [T[] | undefined, boolean, FirestoreError | undefined, QuerySnapshot<T> | undefined, () => Promise<void>];
