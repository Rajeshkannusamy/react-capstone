import checkPropTypes from 'check-prop-types';
import configureStore from './../../store/configureStore';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const testStore = (initialState) => {
    return configureStore(initialState);
};