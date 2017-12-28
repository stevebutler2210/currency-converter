import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Keyboard, Animated, Platform } from "react-native";

import styles from "./styles";

const ANIMATION_DURATION = 250;

class Logo extends Component {
  static PropTypes = {
    tintColor: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
    this.imageOffset = new Animated.Value(styles.$largeImageOffset);
  }

  componentDidMount() {
    let showListener = "keyboardWillShow";
    let hideListener = "keyboardWillHide";

    if (Platform.OS === "android") {
      showListener = "keyboardDidShow";
      hideListener = "keyboardDidHide";
    }

    this.keyboardShowListener = Keyboard.addListener(
      showListener,
      this.keyboardShow
    );
    this.keyboardHideListener = Keyboard.addListener(
      hideListener,
      this.keyboardHide
    );
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.imageOffset, {
        toValue: styles.$smallImageOffset,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.imageOffset, {
        toValue: styles.$largeImageOffset,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth }
    ];

    const imageStyle = [
      styles.image,
      {
        width: this.imageWidth,
        top: this.imageOffset
      },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null
    ];

    return (
      <View style={styles.container}>
        <Animated.Image
          resizeMode="contain"
          style={containerImageStyle}
          source={require("./images/background.png")}
        />
        <Animated.Image
          resizeMode="contain"
          style={imageStyle}
          source={require("./images/logo.png")}
        />
        <Text style={styles.text}>Steve's Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
