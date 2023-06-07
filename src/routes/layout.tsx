import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

export default component$(() => {
  
  return (
    <div class="layout">

      <Header />

      <main>
        <section class="page">
          <Slot />
        </section>
      </main>

      <Footer />
      
    </div>
  );
});
