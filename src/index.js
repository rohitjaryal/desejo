function create(options) {
  const desejo = (url, options) => {
    return fetch(url, { method: options.method });
  };
  desejo.get = (url, options) => {
    desejo(url, { method: "get", ...options });
  };
  desejo.create = create;
  return desejo;
}

export { create };
export default create();
