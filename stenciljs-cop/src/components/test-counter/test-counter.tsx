import { Component, Host, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'test-counter',
  styleUrl: 'test-counter.css',
  shadow: true,
})
export class TestCounter {
  @State() count: number = 0;

  @Listen('buttonClicked', {target: 'body'})
  buttonClickedHandler(e) {
    if (e.detail.id === 'add-button') {
      this.count++;
    } else if (e.detail.id === 'subtract-button') {
      this.count--;
    }
  }

  render() {
    return (
      <Host>
        <div><slot>Count: </slot>{this.count}</div>
        <test-button buttonId={'add-button'} color={'green'}>Add</test-button>
        <test-button buttonId={'subtract-button'} color={'red'}>Subtract</test-button>
      </Host>
    );
  }

}
