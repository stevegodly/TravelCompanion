import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip ,Rating} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const PlaceCard = ({ place}) => {
  if (!place) return null;
  return (
    <Card elevation={6}>
      <div className="flex justify-center">
        <CardMedia
          component="img"
          className="h-[368px] w-[256px] object-cover object-center"
          image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          title={place.name}
        />
      </div>
      <CardContent className="bg-gray-200">
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} style={{margin: '5px 5px 5px 0',}}/>
        ))}
        {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px'}}>
            <LocationOnIcon />{place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>  
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        {place.website && <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>}
      </CardActions> 
    </Card>
  );
};

export default PlaceCard;
