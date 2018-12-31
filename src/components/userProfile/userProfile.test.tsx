import 'src/setupTests';
import { mockup } from 'src/setupTests';
import * as React from 'react';
import { UserProfile } from './userProfile';
import { shallow } from 'enzyme';

describe("UserProfile", () => {
    const props = {
        user: mockup.user,
        getUser: jest.fn()
    };
    const userProfile = shallow(<UserProfile {...props}/>);
    const { firstName, lastName, city, country } = mockup.user;

    it('renders without crashing', () => {
        expect(userProfile).toMatchSnapshot();
    });
    
    it('includes a Modal', () => {
        expect(userProfile.find("Modal").exists()).toBe(true);
    });
    
    it('includes a connected Like', () => {
        expect(userProfile.find("Connect(Like)").exists()).toBe(true);
    });

    it('includes a connected Follow', () => {
        expect(userProfile.find("Connect(Follow)").exists()).toBe(true);
    });

    it("renders correct first and last name", () => {
        expect(userProfile.find('.name').text()).toEqual(firstName + " " + lastName + "<Connect(Like) />");
    });

    it("renders correct city, country", () => {
        expect(userProfile.find('.location').text()).toEqual(city + ", " + country);
    });

})
