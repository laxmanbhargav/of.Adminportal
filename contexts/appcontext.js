import { useEffect, useReducer, createContext, useContext } from 'react';
import combineReducers from 'react-combine-reducers';
import AgentReducer from './Reducers/agentreducer';
import LandReducer from './Reducers/landreducer';
import ProductCategoryReducer from './Reducers/productcategoryreducer';
import ProductReducer from './Reducers/productreducer';
import FutureInventoryReducer from './Reducers/futureinventoryreducer';
import AvailableInventoryReducer from './Reducers/availableinventoryreducer';
import CropReducer from './Reducers/cropreducer';
import { initialLandState, initialProductCategoryState, initialProductState, initialFutureInventoryState, initialAvailableInventoryState, initialAgentState, initialCropState } from './state/appstate';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [appReducer, initialAppState] = combineReducers({
        agents: [AgentReducer, initialAgentState],
        land: [LandReducer, initialLandState],
        productcategory: [ProductCategoryReducer, initialProductCategoryState],
        product: [ProductReducer, initialProductState],
        futureinventory: [FutureInventoryReducer, initialFutureInventoryState],
        availableinventory: [AvailableInventoryReducer, initialAvailableInventoryState],
        crop: [CropReducer, initialCropState]
    });
    const [state, dispatch] = useReducer(appReducer, initialAppState);

    useEffect(() => {
        console.log(state);
    })
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
