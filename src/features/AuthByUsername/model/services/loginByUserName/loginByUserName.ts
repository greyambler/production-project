import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAG_KEY } from 'shared/const/localstorage';
import axios from 'axios';

interface LoginByUserNameProps{
    username: string;
    password: string;
}
export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, {rejectValue: string}>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>(
                'http://localhost:8000/login',
                authData,
            );

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAG_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
