import { handleActions, createAction } from 'redux-actions';

// Initial state
export const initialState = {
    database: {
        hostname: '',
        username: '',
        password: '',
        port: '',
    },
    mode: 'record',
    keywords: [
        { id: 1, text: 'UPDATEXML' },
        { id: 2, text: 'PROCEDURE ANALYSE' },
        { id: 3, text: 'JSON_KEYS\\(' },
        { id: 4, text: 'ORD\\(MID\\(' },
        { id: 5, text: 'INFORMATION_SCHEMA\\.' },
        { id: 6, text: 'JSON_STORAGE_FREE' },
        { id: 7, text: 'SESSION_USER\\(' },
    ],
    selectedKeywords: [2, 4],
};

// Actions
const SET_DATABASE = 'proxy/settings/SET_DATABASE';
const SET_MODE = 'proxy/settings/SET_MODE';
const SET_KEYWORDS = 'proxy/settings/SET_KEYWORDS';
const SET_SELECTED_KEYWORDS = 'proxy/settings/SET_SELECTED_KEYWORDS';

// Action Creators
export const setDatabase = createAction(SET_DATABASE);
export const setMode = createAction(SET_MODE);
export const setKeywords = createAction(SET_KEYWORDS);
export const setSelectedKeywords = createAction(SET_SELECTED_KEYWORDS);

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

export const loadKeywords = () => {
    return async (dispatch, getState) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
    };
};

export const loadData = () => {
    return async (dispatch, getState) => {
        const promises = [dispatch(loadDatabase()), dispatch(loadMode()), dispatch(loadKeywords())];
        await Promise.all(promises);
    };
};

export const setDatabaseAndSave = values => {
    return async (dispatch, getState) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch(setDatabase(values));
    };
};

export const setModeAndSave = value => {
    return async (dispatch, getState) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch(setMode(value));
    };
};

export const setSelectedKeywordsAndSave = value => {
    return async (dispatch, getState) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch(setSelectedKeywords(value));
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
        [SET_KEYWORDS]: (state, action) => ({
            ...state,
            keywords: action.payload,
        }),
        [SET_SELECTED_KEYWORDS]: (state, action) => ({
            ...state,
            selectedKeywords: action.payload,
        }),
    },
    initialState
);
