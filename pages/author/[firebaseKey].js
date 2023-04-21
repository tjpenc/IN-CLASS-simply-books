import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import BookCard from '../../components/BookCard';
import { viewAuthorDetails } from '../../api/mergedData';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});

  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column" />
        <div className="text-white ms-5 details">
          <h5>
            {authorDetails.first_name} {authorDetails.last_name}s Books
          </h5>
          <p>{authorDetails.email}</p>
          <p>{authorDetails.favorite ? 'favorite author' : ''}</p>
          <hr />
          <h1 style={{ color: 'black' }}>
            {authorDetails?.books?.map((book) => (
              <BookCard key={book.firebaseKey} bookObj={book[0]} />
            ))}
          </h1>
        </div>
      </div>
    </>
  );
}
