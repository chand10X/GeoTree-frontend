export interface User {
  id: string;
  name: string;
  email: string;
  mobile?: string;
}

export interface Plantation {
  id: string;
  plantName: string;
  height: number;
  prePlantationImage: string;
  plantationImage: string;
  landOwnership?: string;
  userId?: string;
  userName?: string;
  userMobile?: string;
  event?: string;
  createdAt: string;
  location: {
    latitude: number;
    longitude: number;
  };
}