import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";

const Container = styled.div``;
const Section = styled.div`
  margin-bottom: 30px;
`;
const Name = styled.h2`
  font-weight: 600;
  margin-bottom: 10px;
`;
const Description = styled.h2`
  margin-bottom: 10px;
  ${props => (props.exist ? "" : "font-size: 8px; color:red;")}
`;

const SLink = styled.a`
  margin-bottom: 10px;
  text-decoration: underline;
`;
const ExchangesPresenter = ({ exchanges, error, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {exchanges &&
        exchanges.length > 0 &&
        exchanges.map(market => (
          <Section>
            <Name>{market.name}</Name>
            <Description exist={market.description}>
              {market.description
                ? `${market.description.substring(0, 100)}...`
                : "No description!"}
            </Description>
            <SLink href={market.links.website}>{market.links.website}</SLink>
          </Section>
        ))}
    </Container>
  );
};

ExchangesPresenter.proTypes = {
  exchanges: PropTypes.array,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};
export default ExchangesPresenter;
