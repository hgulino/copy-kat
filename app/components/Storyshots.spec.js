import initStoryshots from '@storybook/addon-storyshots';
import { createSerializer } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

initStoryshots({
  renderer: mount,
  snapshotSerializers: [createSerializer()]
});
