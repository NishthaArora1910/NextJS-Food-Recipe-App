import Skeleton from '@mui/material/Skeleton';

export default function Loading() {
  return (
    <div className="w-full bg-black min-h-screen">
      <Skeleton variant="rectangular" width="100%" height="100vh" />
    </div>
  );
}
