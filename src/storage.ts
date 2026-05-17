import * as fs from 'fs';
import * as path from 'path';

// TODO: Definisikan path file untuk menyimpan data To-Do

// TODO: Buat fungsi untuk membaca To-Do dari file
// Hint: Gunakan try-catch untuk handle error saat membaca file

// TODO: Buat fungsi untuk menyimpan To-Do ke file
// Hint: Jangan lupa konversi ke JSON string sebelum disimpan

// TODO: Buat fungsi untuk inisialisasi storage (buat file kosong jika belum ada)

// import * as fs from 'fs';
// import * as path from 'path';
import { Todo } from './types';
import { isTodo } from './utils';

const FILE_PATH = path.join(__dirname, '../data.json');

// Safely read and parse the local database file
export function readStorage(): Todo[] {
  try {
    if (!fs.existsSync(FILE_PATH)) {
      return [];
    }
    const rawData = fs.readFileSync(FILE_PATH, 'utf-8');
    const parsedData = JSON.parse(rawData);

    if (Array.isArray(parsedData)) {
      // Validate every single item inside the array using our Type Guard
      return parsedData.filter(isTodo);
    }
    return [];
  } catch (error) {
    console.error("Gagal membaca storage file data safely:", error);
    return [];
  }
}

// Write tasks array back down into hard storage
export function writeStorage(todos: Todo[]): void {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2), 'utf-8');
  } catch (error) {
    console.error("Gagal menulis data ke storage:", error);
  }
}