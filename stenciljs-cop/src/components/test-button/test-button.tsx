import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'test-button',
  styleUrl: 'test-button.css',
  shadow: true,
})
export class TestButton {
  @Prop() buttonId: string;
  @Prop() color: 'red' | 'green' = undefined;
  @Event() buttonClicked: EventEmitter;

  private handleButtonClicked(e) {
    this.buttonClicked.emit({ event: e, id: this.buttonId });
  }

  render() {
    return (
      <Host>
        <button onClick={event => this.handleButtonClicked(event)}
                id={this.buttonId}
                class={this.color ? 'button-'+ this.color : 'button-default'}>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
