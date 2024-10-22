import { openDB } from "idb";

export const initDB = async () => {
  return openDB("myDatabase", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("bookstore")) {
        db.createObjectStore("bookstore", {
          keyPath: "id",
          autoIncrement: false,
        });
      }
      if (!db.objectStoreNames.contains("imageStore")) {
        db.createObjectStore("imageStore", {
          keyPath: "id",
          autoIncrement: true,
        });
      }
      if (!db.objectStoreNames.contains("layoutStore")) {
        db.createObjectStore("layoutStore", {
          keyPath: "id",
          autoIncrement: false,
        });
      }
      if (!db.objectStoreNames.contains("textStore")) {
        db.createObjectStore("textStore", {
          keyPath: "id",
          autoIncrement: false,
        });
      }
    },
  });
};

export const clearBookstore = async () => {
  const db = await initDB();
  await db.clear("bookstore");
};

export const saveBook = async (book) => {
  const db = await initDB();
  await db.clear("bookstore");
  await db.put("bookstore", book);
};

export const getBook = async () => {
  const db = await initDB();
  const getData = await db.getAll("bookstore");
  return getData;
};

export const clearImageStore = async () => {
  const db = await initDB();
  await db.clear("imageStore");
};

export const addImage = async (image) => {
  const db = await initDB();
  await db.add("imageStore", image);
};

export const getAllImages = async () => {
  const db = await initDB();
  const allImages = await db.getAll("imageStore");
  return allImages;
};

export const getImage = async (id) => {
  const db = await initDB();
  const image = await db.get("imageStore", id);
  return image;
};

export const updateImage = async (id, newImage) => {
  const db = await initDB();
  const getImage = await db.get("imageStore", id);
  if (!getImage) return console.log("Image not found!");
  const updatedImage = { ...getImage, ...newImage };
  await db.put("imageStore", updatedImage);
};
