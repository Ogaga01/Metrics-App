import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Home from '../Pages/Home';
import store from '../Redux/ConfigureStore';

const HomeProvider = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

it('renders correctly', () => {
  const Home = renderer.create(<HomeProvider />).toJSON();
  expect(Home).toMatchSnapshot();
});
