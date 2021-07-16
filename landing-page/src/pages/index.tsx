import { NextSeo } from 'next-seo';
import Page from 'components/page';
import Header from 'components/header';
import Home from 'pages/home/index';
import Footer from 'components/footer';

export default function MainPage() {
  return (
    <Page>
      <NextSeo title="Tuning Car" description="The best place to tune your car!" />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </Page>
  );
}
