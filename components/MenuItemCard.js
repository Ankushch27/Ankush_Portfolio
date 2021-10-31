import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Image from 'next/image';

const MenuItemCard = ({ desc, img, price, title }) => {
  return (
    <Card>
      {/* <CardMedia image={img} style={{height:"200px"}} /> */}
      <CardMedia style={{height:"200px", position:"relative"}}>
        <Image
          src={img}
          // height={200}
          // width={200}
          layout="fill"
          objectFit="cover"
          // placeholder="blur"
          // blurDataURL={img}
        />
      </CardMedia>
      <CardContent>
        {/* <Image src={img} height={200} width={200} /> */}
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h5">{price}</Typography>
        <Typography variant="body1">{desc}</Typography>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
