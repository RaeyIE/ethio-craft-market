import React from 'react';
import { useParams } from 'react-router-dom';
import { artisans } from '../../lib/data';
import MeetArtisan from '../../components/vendor/MeetArtisan';

const VendorProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  return <MeetArtisan />;
};

export default VendorProfilePage;