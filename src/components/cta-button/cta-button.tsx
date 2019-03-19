import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';

@Component({
  tag: 'cta-button',
  styleUrl: 'cta-button.scss',
  shadow: true
})
export class Dropdown {
  @Prop() title: string = '';
  @Prop({mutable:true}) @State() toggle: boolean = false;
  @Event() onToggle: EventEmitter;

  toggleClick() {
    
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.toggleClick()} di-class="dxp-component" di-type="button" di-id="Click here to view" title="shadow button Click">
          {this.title}
        </button>

        <div class={this.toggle ? 'show-div': 'hide-div'}>
          <span>Show ME</span>
        </div>
      </div>
    )
  }
}