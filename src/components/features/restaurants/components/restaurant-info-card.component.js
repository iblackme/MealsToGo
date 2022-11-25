import React from "react";
import { Image } from "react-native";
import { Text } from "../../../typography/text.component";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import open from "../../../../../assets/open";

import {
  CardContiner,
  CardContentContiner,
  CardTitle,
  CardPharagrap,
  Rating,
  RatingContainer,
  TemporarlyText,
  OpenorNot,
} from "./restaurant-info-card-style";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaruant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000",
    ],
    addres = "100 ega sefer",
    openingHours = true,
    rating = 5,
    isCloseTemporarily = true,
    isOpenNow = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <CardContiner>
      <Card.Cover
        source={{
          uri: `${photos}`,
        }}
        key={name}
      />
      <CardContentContiner>
        <CardTitle>{name}</CardTitle>

        <RatingContainer>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} key={Math.random()} />
            ))}
          </Rating>

          {isCloseTemporarily && (
            <TemporarlyText>CLOSED TEMPORARLY</TemporarlyText>
          )}

          <OpenorNot>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </OpenorNot>

          <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
        </RatingContainer>

        <CardPharagrap>{addres}</CardPharagrap>
      </CardContentContiner>
    </CardContiner>
  );
};
