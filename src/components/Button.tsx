import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from "react-native";
import { BarIndicator } from "react-native-indicators";
import { COLORS, FONTS, FONT_SIZES, h } from "../constants";
interface Props extends TouchableOpacityProps {
  title?: string;
  regularBtn?: boolean;
  gradientBtn?: boolean;
  errorButton?: boolean;
  loading?: boolean;
  colors?: [] | any;
  textStyle?: any;
  textColor?: string;
}

const Button: React.FC<Props> = ({
  title,
  regularBtn,
  gradientBtn,
  errorButton,
  loading,
  colors,
  textColor,
  textStyle,
  style,
  ...rest
}) => {
  const touchprops = {
    activeOpacity: 0.8,
    ...rest,
  };
  return (
    <View>
      {regularBtn ? (
        <TouchableOpacity {...touchprops} disabled={loading || rest.disabled}>
          <View style={[{ ...styles.btnView }, style]}>
            <View style={{ flexDirection: "row" }}>
              {loading ? (
                <BarIndicator
                  count={6}
                  color={COLORS.primary1}
                  size={FONT_SIZES.large}
                />
              ) : (
                <Text style={styles.txtSignIn}>{title}</Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
      ) : gradientBtn ? (
        <TouchableOpacity {...touchprops}>
          <View style={[{ ...styles.btnView }, style]}>
            <View style={{ flexDirection: "row" }}>
              {loading ? (
                <BarIndicator
                  count={6}
                  color={COLORS.white}
                  size={FONT_SIZES.large}
                />
              ) : (
                <Text
                  style={[
                    styles.txtSignIn,
                    { color: textColor ? textColor : COLORS.white },
                    textStyle,
                  ]}
                >
                  {title}
                </Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
      ) : errorButton ? (
        <TouchableOpacity {...touchprops}>
          <View style={[{ ...styles.btnView }, style]}>
            <View style={{ flexDirection: "row" }}>
              {loading ? (
                <BarIndicator
                  count={6}
                  color={COLORS.white}
                  size={FONT_SIZES.large}
                />
              ) : (
                <Text style={[styles.txtSignIn, { color: COLORS.white }]}>
                  {title}
                </Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export { Button };

const styles = StyleSheet.create({
  btnView: {
    // backgroundColor: COLORS.primary1,
    alignItems: "center",
    borderRadius: 10,
    padding: h("1.2%"),
  },
  txtSignIn: {
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.regular,
    color: COLORS.black,
  },
});

{
  /* // <>
    //   {regularBtn ? (
    //     <TouchableOpacity {...touchprops} disabled={loading}>
    // <View style={{ flexDirection: "row" }}>
    //   {loading ? (
    //     <BarIndicator
    //       count={6}
    //       color={COLORS.white}
    //       size={FONT_SIZES.large}
    //     />
    //   ) : (
    //     <Text style={styles.txtSignIn}>{title}</Text>
    //   )}
    // </View>
    //     </TouchableOpacity>
    //   ) : null}
    </> */
}
