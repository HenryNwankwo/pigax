import ClipLoader from 'react-spinners/ClipLoader';

function Loader({ loading }) {
  return (
    <>
      <ClipLoader
        color={'orange'}
        loading={loading}
        size={40}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </>
  );
}

export default Loader;
