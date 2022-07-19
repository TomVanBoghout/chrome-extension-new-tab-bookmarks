import {createChromeStorageStateHookSync} from 'use-chrome-storage';

export const useCounterStore = createChromeStorageStateHookSync('COUNTER', 0);