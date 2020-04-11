import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
const Constructor = styled.div``;
const Section = styled.div`
  margin-bottom: 10px;
`;

const PricesPresenter = ({ prices, error, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <Constructor>
      {prices &&
        prices.length > 0 &&
        prices.map(coin => (
          <Section>
            <span>
              {coin.name} / {coin.symbol} ${coin.quotes.USD.price.toFixed(8)}
            </span>
          </Section>
        ))}
    </Constructor>
  );
};

PricesPresenter.propTypes = {
  prices: PropTypes.array,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default PricesPresenter;
