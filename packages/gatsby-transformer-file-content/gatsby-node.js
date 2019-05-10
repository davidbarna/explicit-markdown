exports.onCreateNode = async function onCreateNode({
  node,
  loadNodeContent,
  actions,
}) {
  if (
    node.internal.type === 'File' &&
    node.internal.mediaType.indexOf('image') === -1
  ) {
    const { createNodeField } = actions;
    const textContent = await loadNodeContent(node);
    createNodeField({
      node,
      name: `content`,
      value: textContent,
    });
  }
};
