import VisStyle from '../Style';

export default {
  create() {
    return {
      currentQuery: '',
      metaTypeInstances: {},
      visStyle: VisStyle,
      visFacade: undefined,
      currentKeyspace: null,
      selectedNodes: null,
      loadingQuery: false,
      graknSession: undefined,
      canvasData: { entities: 0, attributes: 0, relationships: 0 },
      contextMenu: { show: false, x: null, y: null },
    };
  },
};
