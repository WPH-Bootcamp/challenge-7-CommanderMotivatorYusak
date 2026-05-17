// TODO: Import readline untuk membaca input dari command line

// TODO: Import fungsi-fungsi dari todoService

// TODO: Import fungsi-fungsi dari utils (termasuk type guards)

// TODO: Buat fungsi untuk menampilkan menu utama
// Tampilkan opsi seperti:
// 1. Add new todo
// 2. Mark todo as complete
// 3. Delete todo
// 4. List all todos
// 5. Search todos
// 6. Exit

// TODO: Buat fungsi untuk handle input dari user
// Gunakan readline.question untuk menerima input

// TODO: Buat fungsi main yang akan menjalankan aplikasi secara loop
// Hint: Gunakan recursive function atau while loop

// TODO: Jalankan fungsi main
console.log('Welcome to TypeScript To-Do App!');
console.log('Start building your app here...');

import { addTodo, listTodos, toggleTodo, deleteTodo } from './todoService';

console.log("--- Menjalankan Sistem To-Do App TypeScript ---");

// Eksekusi testing pipeline
addTodo("Belajar C++ Memory Management", "high");
addTodo("Beli keperluan setup streaming OBS", "medium");
listTodos();

// Test modifikasi status data
toggleTodo(1);
listTodos();

// ... (your existing code above)

console.log("\n--- Menghapus Tugas ID 2 ---");
deleteTodo(2);

// Tampilkan lagi untuk memastikan ID 2 sudah terhapus
listTodos();