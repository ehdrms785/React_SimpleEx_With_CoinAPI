import React from "react";
import CoinsPresenter from "./CoinsPresenter";
import { apiControler } from "../../api";
export default class extends React.Component {
  state = {
    coins: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try{
      const { data: coins } = await apiControler.coins();
      this.setState({
        coins
      })
    } catch {
      this.setState({
        error: "Can not find coins info"
      })
    } finally {
      this.setState({
        loading: false
      })
    }

  }

  render() {
    const { coins, error, loading } = this.state;
    return <CoinsPresenter 
              coins={coins}
              error={error}
              loading={loading}
            />;
  }
}
