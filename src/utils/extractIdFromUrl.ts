const extractIdFromUrl = (url: string) => {
  const match = url.match(/\/(\d+)\/?$/);
  return match ? match[1] : null;
};

export default extractIdFromUrl;
