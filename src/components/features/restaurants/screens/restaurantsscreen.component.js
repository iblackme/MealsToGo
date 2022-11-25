import React from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Searchbar } from "react-native-paper";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SerchBarStyled = styled.View`
  padding: 16px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const BodyContiner = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
  margin-top: -10px;
`;

const CardContiner = styled(RestaurantInfoCard)``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SerchBarStyled>
      <Searchbar />
    </SerchBarStyled>
    <BodyContiner>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
        ]}
        renderItem={() => <CardContiner />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 2 }}
      />
    </BodyContiner>
  </SafeArea>
);
