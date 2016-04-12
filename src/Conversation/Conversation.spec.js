import React from 'react';
import {sinon} from 'sinon';
import Conversation from './Conversation';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

describe('<Conversation />', () => {
  it('renders one p element', () => {
    const wrapper = shallow(<Conversation />);
    expect(wrapper.find('p')).to.have.length(1);
    expect(wrapper.find('p').text()).to.equal('Hello World!');
  });
});
