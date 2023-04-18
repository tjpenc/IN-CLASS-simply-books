import PropTypes from 'prop-types';

export default function User({ user }) {
  return (
    <>
      <div style={{ color: 'white' }}>
        <h1>{user.photoURL}</h1>
        <h1>{user.displayName}</h1>
        <h1>{user.email}</h1>
        <h1>{user.metadata.lastSignInTime}</h1>
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
