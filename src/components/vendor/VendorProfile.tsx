import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import MeetArtisan from './MeetArtisan';

const VendorProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <Navigate to="/" />;
  return <MeetArtisan />;
};

export default VendorProfile;