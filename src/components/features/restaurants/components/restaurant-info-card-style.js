import styled from "styled-components";
import { Card, Title, Paragraph } from "react-native-paper";

export const CardContiner = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const CardContentContiner = styled(Card.Content)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CardTitle = styled(Title)`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const CardPharagrap = styled(Paragraph)`
  color: ${(props) => props.theme.colors.text.secondary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const OpenorNot = styled.View``;

export const RatingContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const TemporarlyText = styled.Text`
  color: red;
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
