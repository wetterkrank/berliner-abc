import { Component } from "react";
import styled from 'styled-components';

type InputProps = {
  initValue: string,
  submitFn: (input: string) => void,
}

type InputState = {
  value: string,
}

class InputBar extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = { value: props.initValue };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // NOTE the event type
  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    this.props.submitFn(this.state.value);
  }

  TextInput = styled.input`
    padding: 0.5em 0.6em;
    margin-bottom: 0.3em;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px #ddd;
    border-radius: 4px;
    vertical-align: middle;
    box-sizing: border-box;
    &:focus {
      outline: 0;
      border-color: #129FEA;
    }
    `;

  SubmitButton = styled.input`
    background-color: rgb(0, 120, 231);
    color: #fff;
    
    margin-bottom: 0.3em;
    line-height: normal;
    white-space: nowrap;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    user-select: none;
    box-sizing: border-box;
    ::-moz-focus-inner {
      padding: 0;
      border: 0;
    };

    font-family: inherit;
    font-size: 100%;
    padding: 0.5em 1em;
    border: none rgba(0, 0, 0, 0);
    text-decoration: none;
    border-radius: 2px;

    &:hover,
    &:focus {
      background-image: linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10));
    };
    &:focus {
      outline: 0;
    };
    &:active {
      box-shadow: 0 0 0 1px rgba(0,0,0, 0.15) inset, 0 0 6px rgba(0,0,0, 0.20) inset;
      border-color: #000;
    }
  `;

  render() {
    const focused = this.props.initValue ? false : true;
    return (
      <div className="input-bar">
        <form onSubmit={this.handleSubmit}>
          <this.TextInput type="text" value={this.state.value} onChange={this.handleChange} required={true} autoFocus={focused} />
          <span> </span>
          <this.SubmitButton type="submit" value="Let's go" />
        </form>
      </div>
    )
  }

}

export default InputBar;
