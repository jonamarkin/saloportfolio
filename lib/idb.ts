export const initDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('ImageCacheDB', 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains('images')) {
        request.result.createObjectStore('images');
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const setCachedImage = async (key: string, data: string): Promise<boolean> => {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('images', 'readwrite');
      const store = tx.objectStore('images');
      store.put(data, key);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  } catch (e) {
    console.error('Failed to cache image', e);
    return false;
  }
};

export const getCachedImage = async (key: string): Promise<string | null> => {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('images', 'readonly');
      const store = tx.objectStore('images');
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch (e) {
    console.error('Failed to get cached image', e);
    return null;
  }
};
