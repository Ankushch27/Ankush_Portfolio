import { Container, Grid, Typography } from '@material-ui/core';
import MenuItemCard from '../components/MenuItemCard';
import { menu } from '../data/menu-item';

const menuFilter = () => {
  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h2" align="center">
        Menu
      </Typography>
      <Grid container spacing={3}>
        {menu.map((m) => (
          <Grid item key={m.id} xs={12} sm={6}>
            <MenuItemCard desc={m.desc} img={m.img} price={m.price} title={m.title} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default menuFilter;
