import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';

export const getStaticProps = async () => {
  const { data } = await axios.get('http://localhost:4000/posts');
  console.log(data);

  return {
    props: {
      posts: data,
    },
  };
};

const Home = ({ posts }) => {
  return (
    <Container component="main" maxWidth="md">
      <Box display="flex" justifyContent="space-between" marginTop={10} marginBottom={5}>
        <Typography variant="h5">All Blogs</Typography>
        <Link href="/json-server-blog/create" passHref>
          <Button variant="contained" color="secondary">
            Add Blog
          </Button>
        </Link>
      </Box>
      {posts &&
        posts.map((post) => (
          // <pre>{JSON.stringify(post, null, 4)}</pre>
          <Card key={post.id} style={{marginTop: '24px'}}>
            <CardContent>
              <Typography variant="h5">{post.title}</Typography>
              <Typography variant="body1">{post.body}</Typography>
              <Link href={`/json-server-blog/${post.id}`}>Read more...</Link>
            </CardContent>
          </Card>
        ))}
    </Container>
  );
};

export default Home;
