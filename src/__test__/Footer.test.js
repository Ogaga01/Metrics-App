import renderer from 'react-test-renderer';
import Footer from '../Components/Footer';

it('renders correctly', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
