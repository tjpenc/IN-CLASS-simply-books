import { PropTypes } from 'prop-types';

export default function AuthorCard({ authorData }) {
  return (
    <div className="user-info">
      <h6 style={{ color: 'white' }}>{authorData.email}</h6>
      <h1>{authorData.first_name}</h1>
      <h1>{authorData.last_name}</h1>
      <h1>{authorData.favorite}</h1>
    </div>
  );
}

AuthorCard.propTypes = {
  authorData: PropTypes.shape({
    email: PropTypes.string,
    firebaseKey: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    image: PropTypes.string,
    favorite: PropTypes.bool,
    uid: PropTypes.string,
  }),
};

AuthorCard.defaultProps = {
  authorData: {
    email: 'Email Here',
    firebaseKey: 'Firebase Key Here',
    first_name: 'First Name',
    last_name: 'Last Name',
    image: 'Url',
    favorite: 'Boolean',
    uid: 'User ID',
  },
};
