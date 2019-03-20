import { Component, Listen } from '@stencil/core';

@Component({
  tag: 'cta-link',
  styleUrl: 'cta-link.scss',
  shadow: true
})
export class MyName {
  render() {
    return (
      <div>
        <a href="https://google.com">Anchor Click</a>
        <cta-button title="shadow button" di-class="shadow-hydrated" di-type="button" di-id="shadow dom button click"></cta-button>       
      </div>
    );
  }

  @Listen('onToggle')
  log(event) {
    console.log(event);
  }
}
