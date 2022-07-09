import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
} from "react-native";
import { Copyright } from "../Copyright";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export function Options({ title, image, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>Title</Text>
      <Copyright />
    </TouchableOpacity>
  );
}
