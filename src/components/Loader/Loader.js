import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import css from './Loader.module.css';

const loader = () => {
  return (
    <Loader
      className={css.Loader}
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
};
export default loader;