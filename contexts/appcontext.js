import { useEffect, useReducer, createContext, useContext } from 'react';
import combineReducers from 'react-combine-reducers';
import { parseCookies } from "nookies";
import LandReducer from './Reducers/landreducer';
import ProductCategoryReducer from './Reducers/productcategoryreducer';
import ProductReducer from './Reducers/productreducer';
import FutureInventoryReducer from './Reducers/futureinventoryreducer';
import AvailableInventoryReducer from './Reducers/availableinventoryreducer';
import { initialLandState, initialProductCategoryState, initialProductState, initialFutureInventoryState, initialAvailableInventoryState } from './state/appstate';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const { token } = parseCookies();

    const [appReducer, initialAppState] = combineReducers({
        land: [LandReducer, initialLandState],
        productCategory: [ProductCategoryReducer, initialProductCategoryState],
        product: [ProductReducer, initialProductState],
        futureinventory: [FutureInventoryReducer, initialFutureInventoryState],
        availableinventory: [AvailableInventoryReducer, initialAvailableInventoryState]
    });
    const [state, dispatch] = useReducer(appReducer, initialAppState);

   /* useEffect(() => {
        const loadData = async () => {
            await getLanguagesAction(token, dispatch)
        }
        loadData();
    }, [])*/

    useEffect(() => {
        console.log(state);
    }, [state])

    return (
        <AppContext.Provider
            value={{ state, dispatch }}
        >
            {children}
        </AppContext.Provider>
    );
};

function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error(
            "useAppContext must be used within a AppContextProvider"
        );
    }
    return { state: context.state, dispatch: context.dispatch };
}

export { AppContextProvider, useAppContext };
