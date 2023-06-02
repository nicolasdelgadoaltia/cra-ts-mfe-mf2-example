import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton, styled } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const StyledIconButton = styled(IconButton)`
  color: #ff3100;
  font-size: 16px;
  font-weight: bold;
  text-indent: 4px;
`;

const VotingCard = ({ children }: Props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>{children}</CardContent>
      <CardActions>
        <StyledIconButton color="primary">
          <FavoriteIcon /> {Math.round(Math.random() * 1000)}
        </StyledIconButton>
      </CardActions>
    </Card>
  );
};

export default VotingCard;
