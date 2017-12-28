import React, { Component } from "react";
import PropTypes from "prop-types";
import { StatusBar, KeyboardAvoidingView } from "react-native";

import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";
import { LastConverted } from "../components/Text";

const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBP";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "79.74";
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };
  handlePressBaseCurrency = () => {
    console.log("pressed base");
    this.props.navigation.navigate("CurrencyList", { title: "Base Currency" });
  };

  handlePressQuoteCurrency = () => {
    console.log("pressed quote");
    this.props.navigation.navigate("CurrencyList", { title: "Quote Currency" });
  };

  handlePressSettings = () => {
    console.log("pressed settings");
    this.props.navigation.navigate("Options", { title: "Options" });
  };

  handleTextChange = text => {
    console.log("Change text", text);
  };

  handleSwapCurrency = () => {
    console.log("pressed swap currency");
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handlePressSettings} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            defaultValue={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            date={TEMP_CONVERSION_DATE}
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
