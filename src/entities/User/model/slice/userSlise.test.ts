import { counterReducer, counterActions } from './userSlice';
import { UserSchema } from '../types/userSchema';

describe('counterSlise', () => {
    test('should be less', () => {
        const state: UserSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.decrement()),
        ).toEqual({ value: 9 });
    });

    test('should be more', () => {
        const state: UserSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.increment()),
        ).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment()),
        ).toEqual({ value: 1 });
    });
});
