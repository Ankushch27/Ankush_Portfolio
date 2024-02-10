import { Container, Typography } from '@mui/material';
import axios from 'axios';

export const getStaticPaths = async () => {
  const { data } = await axios.get(`http://localhost:4000/posts`);
  const paths = data.map((post) => ({ params: { postId: `${post.id}` } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { data } = await axios.get(`http://localhost:4000/posts/${params.postId}`);

  return {
    props: { post: data },
  };
};

const Details = ({ post }) => {
  return (
    <Container maxWidth="md">
      <Typography variant="h5">{post.title}</Typography>
      <Typography variant="body1">{post.body}</Typography>
    </Container>
  );
};

export default Details;
