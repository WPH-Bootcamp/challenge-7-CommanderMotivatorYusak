// TODO: Import tipe-tipe yang sudah didefinisikan di types.ts

// TODO: Import fungsi storage untuk baca/tulis file

// TODO: Buat fungsi untuk menambahkan To-Do baru
// - Generate id yang unik (bisa pakai timestamp atau counter)
// - Pastikan text tidak kosong
// - Set default status sebagai active

// TODO: Buat fungsi untuk menandai To-Do sebagai selesai
// - Cari To-Do berdasarkan id
// - Ubah statusnya menjadi completed
// - Handle kasus jika id tidak ditemukan

// TODO: Buat fungsi untuk menghapus To-Do
// - Filter To-Do berdasarkan id
// - Handle kasus jika id tidak ditemukan

// TODO: Buat fungsi untuk menampilkan semua To-Do
// - Tampilkan dengan format yang rapi
// - Tambahkan status [ACTIVE] atau [DONE] di depan setiap To-Do
// - Berikan nomor urut untuk memudahkan user memilih

// TODO: Buat fungsi untuk mencari To-Do berdasarkan keyword

import { Todo, Priority } from './types';
import { readStorage, writeStorage } from './storage';

// 1. Create a new task item
export function addTodo(task: string, priority: Priority): void {
  const todos = readStorage();
  const newTodo: Todo = {
    id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
    task,
    isCompleted: false,
    priority
  };
  todos.push(newTodo);
  writeStorage(todos);
  console.log(`Sukses menambahkan tugas: "${task}" [${priority.toUpperCase()}]`);
}

// 2. Read and view items
export function listTodos(): void {
  const todos = readStorage();
  if (todos.length === 0) {
    console.log("Semua tugas selesai! Tidak ada data item ditemukan.");
    return;
  }
  console.log("\n=== DAFTAR TO-DO LIST ===");
  todos.forEach(t => {
    console.log(`[${t.isCompleted ? '✓' : ' '}] ID: ${t.id} | ${t.task} (${t.priority})`);
  });
}

// 3. Update completion state
export function toggleTodo(id: number): void {
  const todos = readStorage();
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.isCompleted = !todo.isCompleted;
    writeStorage(todos);
    console.log(`Status ID ${id} diubah menjadi: ${todo.isCompleted ? 'Selesai' : 'Belum Selesai'}`);
  } else {
    console.error(`Error: Tugas dengan ID ${id} tidak valid.`);
  }
}

// 4. Delete item from records
export function deleteTodo(id: number): void {
  const todos = readStorage();
  const filtered = todos.filter(t => t.id !== id);
  if (todos.length === filtered.length) {
    console.error(`Error: Gagal menghapus, ID ${id} tidak ada.`);
    return;
  }
  writeStorage(filtered);
  console.log(`Sukses menghapus tugas dengan ID: ${id}`);
}