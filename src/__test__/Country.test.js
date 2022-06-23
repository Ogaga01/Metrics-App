import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../Redux/ConfigureStore';
import Country from '../Pages/Country';

const Countryprovider = () => {
  <Provider store={store}>
    <Country />
  </Provider>;
};

it('renders correctly', () => {
  const Country = renderer.create(<Countryprovider />).toJSON();
  expect(Country).toMatchSnapshot();
});
