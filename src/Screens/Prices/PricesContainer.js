import React from "react";
import PricesPresenter from "./PricesPresenter";
import { apiControler } from "../../api";

export default class extends React.Component {
  state = {
    prices: null,
    exchanges: null,
    coins: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const { data: prices } = await apiControler.prices();
      this.setState({
        prices
      });
    } catch {
      this.setState({
        error: "Can not find prices info"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    const { prices, error, loading } = this.state;
    return <PricesPresenter prices={prices} error={error} loading={loading} />;
  }
}
