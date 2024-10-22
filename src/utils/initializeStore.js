import { getBook, saveBook } from "./idb";

export default async function initializeStore() {
  const bookData = await getBook();
  if (bookData.length === 0) {
    await saveBook({ id: 1, paperType: 0, color: "#fff" });
  }
}
