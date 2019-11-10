import { handleActions, createAction } from 'redux-actions';

// Initial state
export const initialState = {
    config: {
        hostname: '',
        username: '',
        password: '',
        port: '',
        mode: 'record',
    },
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
const SET_CONFIG = 'proxy/settings/SET_CONFIG';
const SET_KEYWORDS = 'proxy/settings/SET_KEYWORDS';
const SET_SELECTED_KEYWORDS = 'proxy/settings/SET_SELECTED_KEYWORDS';

// Action Creators
export const setConfig = createAction(SET_CONFIG);
export const setKeywords = createAction(SET_KEYWORDS);
export const setSelectedKeywords = createAction(SET_SELECTED_KEYWORDS);

export const loadConfig = () => {
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
        const promises = [dispatch(loadConfig()), dispatch(loadKeywords())];
        await Promise.all(promises);
    };
};

export const setConfigAndSave = values => {
    return async (dispatch, getState) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch(setConfig(values));
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
        [SET_CONFIG]: (state, action) => ({
            ...state,
            config: {
                ...state.config,
                ...action.payload,
            },
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
