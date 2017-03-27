import React from 'react';
import {shallow} from 'enzyme';
import Icon from './'
import * as icons from './icons'

describe('<Icon />',()=>{

  it('should throw when no icon is passed',()=>{
    try{
      const wrapper = shallow(<Icon />);
    } catch(error){
      expect(error.message).toEqual('icon is not passed')
    }
  })

  it('should render an <svg> ',()=>{
    const wrapper = shallow(<Icon>{icons.image}</Icon>);
    expect(wrapper.name()).toEqual('svg');
  })
  it('should have children when passed as children',()=>{
    const wrapper = shallow(<Icon>{icons.image}</Icon>);
    expect(wrapper.find('svg').contains(icons.image)).toEqual(true);
  })
  it('should have children when passed as prop',()=>{
    const wrapper = shallow(<Icon icon={icons.image} />);
    expect(wrapper.find('svg').contains(icons.image)).toEqual(true);
  })
  it('should have default props configured',()=>{
    const wrapper = shallow(<Icon icon={icons.image} />);
    const props = wrapper.props();
    expect(props.height).toEqual("24");
    expect(props.width).toEqual("24");
    expect(props.fill).toEqual('#cccccc');
  })
  it('should accept size prop',()=>{
    const wrapper = shallow(<Icon size={48} icon={icons.image} />);
    const props = wrapper.props();
    expect(props.height).toEqual("48");
    expect(props.width).toEqual("48");
  })
  it('should accept size color',()=>{
    const color="rgba(0,0,0.65)";
    const wrapper = shallow(<Icon color={color} icon={icons.image} />);
    const props = wrapper.props();
    expect(props.fill).toEqual(color);
  })
})
