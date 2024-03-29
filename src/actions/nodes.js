import * as types from "../constants/actionTypes";

const MINIMAL_ERROR_CODE = 400;

const checkNodeStatusStart = node => {
  return {
    type: types.CHECK_NODE_STATUS_START,
    node
  };
};

const checkNodeStatusSuccess = (node, res) => {
  return {
    type: types.CHECK_NODE_STATUS_SUCCESS,
    node,
    res
  };
};

const checkNodeStatusFailure = node => {
  return {
    type: types.CHECK_NODE_STATUS_FAILURE,
    node
  };
};

const checkNodeBlocksStart = node => {
  return {
    type: types.CHECK_NODE_BLOCKS_START,
    node
  };
};

const checkNodeBlocksSuccess = (node, res) => {
  return {
    type: types.CHECK_NODE_BLOCKS_SUCCESS,
    node,
    res
  };
};

const checkNodeBlocksFailure = node => {
  return {
    type: types.CHECK_NODE_BLOCKS_FAILURE,
    node
  };
};
export function checkNodeStatus(node) {
  return async dispatch => {
    try {
      dispatch(checkNodeStatusStart(node));
      const res = await fetch(`${node.url}/api/v1/status`);

      if (res.status >= MINIMAL_ERROR_CODE) {
        dispatch(checkNodeStatusFailure(node));
      }

      const json = await res.json();

      dispatch(checkNodeStatusSuccess(node, json));
    } catch (err) {
      dispatch(checkNodeStatusFailure(node));
    }
  };
}

export function retrieveNodeBlocks(node) {
  return async dispatch => {
    try {
      dispatch(checkNodeBlocksStart(node));
      const res = await fetch(`${node.url}/api/v1/blocks`);

      if (res.status >= MINIMAL_ERROR_CODE) {
        dispatch(checkNodeBlocksFailure(node));
      }

      const json = await res.json();

      dispatch(checkNodeBlocksSuccess(node, json));
    } catch (err) {
      dispatch(checkNodeBlocksFailure(node));
    }
  };
}


export function checkNodeStatuses(list) {
  return dispatch => {
    list.forEach(node => {
      dispatch(checkNodeStatus(node));
    });
  };
} 
