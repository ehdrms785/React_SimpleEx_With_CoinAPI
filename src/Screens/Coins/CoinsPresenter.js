import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";

const Container = styled.div``;

const Section = styled.ul``;

const Rank = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 0 5px;
`;

const Li = styled.li`
  display: flex;
  padding: 5px 0;
`;

const Item = styled.div``;

const CoinsPresenter = ({ coins, error, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Section>
        {coins &&
          coins.length > 0 &&
          coins.map((coin, index) => (
            <Li>
              <Rank>{`#${index + 1} `}</Rank>
              <Item>{`${coin.name}/${coin.symbol}`}</Item>
            </Li>
          ))}
      </Section>
    </Container>
  );
};

CoinsPresenter.propTypes = {
  coins: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};
export default CoinsPresenter;
