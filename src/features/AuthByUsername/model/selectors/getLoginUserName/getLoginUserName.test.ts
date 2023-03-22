import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName.test.ts', () => {
    test('should return username 123123', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123123',
            },
        };
        expect(getLoginUserName(state as StateSchema)).toEqual('123123');
    });
    test('should work with empty username state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUserName(state as StateSchema)).toEqual('');
    });
});
