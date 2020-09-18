import { Alert } from '@/components/layout/alert';
import { Footer } from '@/components/layout/footer';
import { Meta } from '@/components/layout/meta';
import { useSession } from 'next-auth/client';
import { Nav } from '@/components/layout/nav';

type Props = {
  preview?: boolean;
};

export const AuthLayout: React.FC<Props> = ({ children, preview }) => {
  const [session, loading] = useSession();
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Nav />
        <main>{session ? children : <h1>please authenticate</h1>}</main>
      </div>
      <Footer />
    </>
  );
};
