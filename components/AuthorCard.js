import { PropTypes } from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteSingleAuthor } from '../api/authorData';

export default function AuthorCard({ authorData, onUpdate }) {
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorData.first_name}?`)) {
      deleteSingleAuthor(authorData.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title>{authorData.first_name} {authorData.last_name}</Card.Title>
          {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
          <Link href={`/author/${authorData.firebaseKey}`} passHref>
            <Button>VIEW</Button>
          </Link>
          {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
          <Button variant="info">EDIT</Button>
          <Button variant="danger" onClick={deleteThisAuthor}>DELETE</Button>
        </Card.Body>
      </Card>
    </>

  );
}

AuthorCard.propTypes = {
  authorData: PropTypes.shape({
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    image: PropTypes.string,
    favorite: PropTypes.bool,
    uid: PropTypes.string,
  }),
  onUpdate: PropTypes.func.isRequired,
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
