import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

interface WithLoadingProps {
    isLoading: boolean;
  }

const WithSpinner = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const spinner: React.FC<P & WithLoadingProps> = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ): <WrappedComponent {...otherProps as P}/>
    }
    return spinner;
}

export default WithSpinner;