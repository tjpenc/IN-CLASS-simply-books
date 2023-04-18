import { useState, useEffect } from 'react';
import { getAuthors } from '../api/authorData';
import AuthorCard from '../components/AuthorCard';

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  const uid = 'h6scZdy2Xqcg4e2509O8zavwycW2';
  const getAllAuthors = () => getAuthors(uid).then(setAuthors);

  useEffect(() => {
    getAllAuthors();
  }, []);

  return (
    <>
      {authors.map((author) => <AuthorCard authorData={author} />)}
    </>
  );
}
