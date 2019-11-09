import { handleActions, createAction } from 'redux-actions';

// Initial state
export const initialState = {
    database: {
        hostname: '',
        username: '',
        password: '',
        port: ''
    },
    mode: 'record',
    words: [],
    selectedWords: [],
};

// Actions
const SET_DATABASE = 'proxy/settings/SET_DATABASE';
const SET_MODE = 'proxy/settings/SET_MODE';
const SET_WORDS = 'proxy/settings/SET_WORDS';
const SET_SELECTED_WORDS = 'proxy/settings/SET_SELECTED_WORDS';

// Action Creators
export const setDatabase = createAction(SET_DATABASE);
export const setMode = createAction(SET_MODE);
export const setWords = createAction(SET_WORDS);
export const setSelectedWords = createAction(SET_SELECTED_WORDS);

export const loadDatabase = () => {
    return async (dispatch, getState) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
    };
};

export const loadMode = () => {
    return async (dispatch, getState) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
    };
};

export const loadWords = () => {
    return async (dispatch, getState) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
    };
};

export const loadData = () => {
    return async (dispatch, getState) => {
        const promises = [dispatch(loadDatabase()), dispatch(loadMode()), dispatch(loadWords())];
        await Promise.all(promises);
    };
};

export const setDatabaseAndSave = (values) => {
    return async (dispatch, getState) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch(setDatabase(values));
    };
};

// Reducer
export default handleActions(
    {
        [SET_DATABASE]: (state, action) => ({
            ...state,
            database: action.payload,
        }),
        [SET_MODE]: (state, action) => ({
            ...state,
            mode: action.payload,
        }),
        [SET_WORDS]: (state, action) => ({
            ...state,
            words: action.payload,
        }),
        [SET_SELECTED_WORDS]: (state, action) => ({
            ...state,
            selectedWords: action.payload,
        }),
    },
    initialState
);
