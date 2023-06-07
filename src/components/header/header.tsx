import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <title>Decimal Pointe | An Incremental Game</title>
      <div class="logo">
        
          <h3><a href="/">Decimal Pointe</a></h3>
        
      </div>
      <ul>
        <li>
          <a href="/page1" >
            Page 1
          </a>
        </li>
        <li>
          <a href="/page2">
            Page 2
          </a>
        </li>
        <li>
          <a href="/page3">
            Page 3
          </a>
        </li>
      </ul>
    </header>
  );
});
