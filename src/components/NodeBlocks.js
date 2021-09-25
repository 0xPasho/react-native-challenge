import React from "react";
import { ProgressCircle, BodyText } from "material-bread";
import PropTypes from "prop-types";
import { StyleSheet } from 'react-native';
import NodeBlock from './NodeBlock';
import colors from "../constants/colors";

const NodeBlocks = ({ blocks, error, loading }) => {
  if (error) {
    return (
      <BodyText
        type={2}
        text={"Something went wrong. Try again later."}
      />
    );
  }

  if (loading) {
    return <ProgressCircle color={colors.primary} size={25} style={styles.progress}/>;
  }

  return blocks.map(item => {
    return <NodeBlock block={item} />;
  });
};

NodeBlocks.propTypes = {
  blocks: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.error
};

const styles = StyleSheet.create({
  progress: {
    alignSelf: 'center'
  },
});

export default NodeBlocks;
