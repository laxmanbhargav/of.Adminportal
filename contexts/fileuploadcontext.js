import { createContext, useReducer, useContext } from 'react';
import * as CONSTANTS from './Reducers/contextconstants';

const FileUploadContext = createContext();

const FileUploadProvider = ({ children }) => {

    const [state, dispatch] = useReducer(
        (prevState, action) => {         
            const payload = action.payload
            switch (action.type) {
                case CONSTANTS.FILE_UPLOAD_BEGIN:
                    return {
                        ...prevState,
                        loading: true,
                    };
                case CONSTANTS.FILE_UPLOAD_SUCCESS:
                    return {
                        ...prevState,
                        loading: false,
                    };
                case CONSTANTS.FILE_UPLOAD_FAILED:
                    return {
                        loading: false,
                        error: payload.error,
                    };
                default: return {
                    ...prevState
                }
            }
        },
        {
            loading: false,
            error: null
        }
    );

    return (
        <FileUploadContext.Provider
            value={{state, dispatch}}
        >
            {children}
        </FileUploadContext.Provider>
    );
};

function useFileUploadContext() {
    const context = useContext(FileUploadContext);
    if (context === undefined) {
        throw new Error(
            "useFileUploadContext must be used within a FileUploadProvider"
        );
    }
    return {state: context.state, dispatch: context.dispatch};
}

export { FileUploadProvider, useFileUploadContext };
