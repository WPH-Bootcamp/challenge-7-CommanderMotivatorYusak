// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime

// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid

// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus

// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid

import { Todo } from './types';

// Type Guard to validate if unknown data matches our Todo structure safely
export function isTodo(data: any): data is Todo {
  return (
    data &&
    typeof data.id === 'number' &&
    typeof data.task === 'string' &&
    typeof data.isCompleted === 'boolean' &&
    (data.priority === 'low' || data.priority === 'medium' || data.priority === 'high')
  );
}