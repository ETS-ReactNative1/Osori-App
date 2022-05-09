import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IcBack from "assets/images/svgs/IcBack.svg";
import Space from "utils/styledSpace";
import normalize from "utils/normalize";

const HeaderM = ({ title }) => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: normalize(20) }}
        >
          <IcBack />
        </TouchableOpacity>
        <TitleText>{title}</TitleText>
        <Space w={20} />
      </Container>
      <BottomLineContainer>
        <BottomLine />
      </BottomLineContainer>
    </>
  );
};

export default HeaderM;

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: ${normalize(4)}px ${normalize(16)}px;
`;

const TitleText = styled.Text`
  font-family: "GmarketSansTTFMedium";
  font-style: normal;
  font-size: 20px;

  color: #000000;
`;

const BottomLineContainer = styled.View`
  align-items: center;
  margin-top: ${normalize(8)}px;
  margin-bottom: ${normalize(12)}px;
`;

const BottomLine = styled.View`
  width: ${normalize(284)}px;
  height: 1px;
  background-color: #c2c2c2;
`;
