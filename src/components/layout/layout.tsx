import { Alert } from '_components/layout/alert';
import { Footer } from '_components/layout/footer';
import { Meta } from '_components/layout/meta';

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
