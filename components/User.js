// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function User({ user }) {
  return (
    <>
      <div style={{ color: 'white' }}>
        <Card.Img variant="top" src={user.photoURL} alt="Profile" style={{ height: '200px', width: '200px', margin: '0 0 0 350px' }} />
        <h6>{user.email}</h6>
        <h6>{user.displayName}</h6>
        <h6>{user.metadata.lastSignInTime}</h6>
      </div>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    photoURL: PropTypes.string,
    displayName: PropTypes.string,
    email: PropTypes.string,
    metadata: PropTypes.shape({
      lastSignInTime: PropTypes.string,
    }),
  }),
};

User.defaultProps = {
  user: {
    photoURL: 'Photo Here',
    displayName: 'Name Here',
    email: 'Email',
    metadata: {
      lastSignInTime: 'Last sign in time',
    },
  },
};
