export const saveToStore = (key: string, value: any) => {
  if (!key || !value) return;
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStoreData = (key: string) => {
  if (!key) return;
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
