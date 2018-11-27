import React, { ChangeEvent } from "react";
import axios from "../axios-yahoo";
import { Button, Input } from "antd";
import { IOptionUnderlying } from "../objects/OptionUnderlying";

interface ISymbolEntryState {
  Symbol: string;
  OptionUnderlying: IOptionUnderlying | null;
  Loading: boolean;
}

export class SymbolEntryComponent extends React.PureComponent<{}, ISymbolEntryState> {
  public state: ISymbolEntryState = {
    Symbol: "",
    OptionUnderlying: null,
    Loading: false
  };

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Ticker symbol:</label>
        <Input placeholder="Enter ticker symbol" value={this.state.Symbol} onChange={this.symbolChanged} />
        <Button type="primary" onClick={this.handleSubmit}>
          Load
        </Button>
        <label>
          {this.state.OptionUnderlying !== null ? this.state.OptionUnderlying.Symbol : "Enter ticker symbol"}
        </label>
      </form>
    );
  }

  private handleSubmit = () => {
    axios
      .get("amd")
      .then(data => {
        const root = data.data.optionChain.result[0];
        const optionUnderlying: IOptionUnderlying = {
          Symbol: root.underlyingSymbol,
          ExpirationDates: root.expirationDates,
          LastPrice: root.quote.regularMarketPrice,
          Strikes: root.strikes
        };

        this.setState({
          OptionUnderlying: optionUnderlying
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  private symbolChanged = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      Symbol: event.currentTarget.value
    });
  };
}
