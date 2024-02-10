import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';

const MenuItemCard = ({ desc, img, price, title }) => {
  return (
    <Card>
      <CardMedia sx={{ height: "200px", position: "relative" }}>
        <Image
          src={img}
          alt={title}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </CardMedia>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h5">{price}</Typography>
        <Typography variant="body1">{desc}</Typography>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
