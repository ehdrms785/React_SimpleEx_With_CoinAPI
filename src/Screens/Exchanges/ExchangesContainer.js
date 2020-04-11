import React from "react";
import ExchangesPresenter from "./ExchangesPresenter";
import { apiControler } from "../../api";
export default class extends React.Component {
  state = {
    exchanges: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const { data: exchanges } = await apiControler.exchanges();
      this.setState({
        exchanges
      });
    } catch {
      this.setState({
        error: "Can not find exchanges info"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    const { exchanges, error, loading } = this.state;
    return (
      <ExchangesPresenter
        exchanges={exchanges}
        error={error}
        loading={loading}
      />
    );
  }
}
