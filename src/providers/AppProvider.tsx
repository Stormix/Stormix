import { uniq } from 'lodash';
import React, { createContext, useReducer } from 'react';

type Action =
  | { type: 'toggleKeyword'; payload: string }
  | { type: 'selectKeyword'; payload: string }
  | { type: 'unselectKeyword'; payload: string }
  | { type: 'reset' };

type Dispatch = (action: Action) => void;
type State = { selectedKeywords: string[] };
type AppProviderProps = { children: React.ReactNode };
type AppContextType = {
  state: State;
  dispatch: Dispatch;
  selectKeyword: (keyword: string) => void;
  unselectKeyword: (keyword: string) => void;
  toggleKeyword: (keyword: string) => void;
  isSelected: (keyword: string) => boolean;
};

const AppStateContext = createContext<AppContextType | undefined>(undefined);
const initialState: State = { selectedKeywords: [] };

const appReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'toggleKeyword': {
      if (state.selectedKeywords.includes(action.payload)) {
        return { ...state, selectedKeywords: state.selectedKeywords.filter((keyword) => keyword !== action.payload) };
      } else {
        return { ...state, selectedKeywords: uniq([...state.selectedKeywords, action.payload]) };
      }
    }
    case 'selectKeyword': {
      return { ...state, selectedKeywords: uniq([...state.selectedKeywords, action.payload]) };
    }
    case 'unselectKeyword': {
      return { ...state, selectedKeywords: state.selectedKeywords.filter((keyword) => keyword !== action.payload) };
    }
    case 'reset': {
      return initialState;
    }
    default: {
      throw new Error(`Unhandled action type: ${JSON.stringify(action)}`);
    }
  }
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const selectKeyword = (keyword: string) => dispatch({ type: 'selectKeyword', payload: keyword });
  const unselectKeyword = (keyword: string) => dispatch({ type: 'unselectKeyword', payload: keyword });
  const toggleKeyword = (keyword: string) => dispatch({ type: 'toggleKeyword', payload: keyword });
  const isSelected = (keyword: string) => state.selectedKeywords.includes(keyword);

  const value = { state, dispatch, selectKeyword, unselectKeyword, toggleKeyword, isSelected };
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

const useApp = () => {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};

export { AppProvider, useApp };
