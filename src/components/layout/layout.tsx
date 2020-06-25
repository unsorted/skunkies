import { Alert } from '@/components/layout/alert';
import { Footer } from '@/components/layout/footer';
import { Meta } from '@/components/layout/meta';

type Props = {
  preview?: boolean;
};

export const Layout: React.FC<Props> = ({ children, preview }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
