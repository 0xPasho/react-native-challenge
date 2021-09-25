import React from "react";
import { View, StyleSheet } from 'react-native';
import { Overline, BodyText } from 'material-bread';
import colors from './../constants/colors';
import PropTypes from "prop-types";

const NodeBlock = ({ block }) => {

  return (
    <View style={styles.blockContainer}>
      <Overline style={styles.id} text={block.id.padStart(3, 0)} />
      <BodyText styles={styles.bodyText} type={2} text={block.attributes.data} />
    </View>
  );
};

NodeBlock.propTypes = {
  block: PropTypes.object
};

const styles = StyleSheet.create({
  blockContainer: {
    backgroundColor: colors.subContentBackground,
    padding: 7,
    marginBottom: 5,
    borderRadius: 3
  },
  id: {
    color: colors.subContentTitle,
    fontWeight: 'bold',
    marginBottom: 10
  },
  bodyText: {
    color: 'black'
  }
});

export default NodeBlock;
