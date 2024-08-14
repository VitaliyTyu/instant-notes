import path from 'path';
import {JSONFilePreset} from 'lowdb/node';

export interface Note {
  id: string;
  title: string;
  value: string;
}

export interface DbSchema {
  notes: Note[];
}

// Read or create db.json
const defaultData: DbSchema = {notes: []};
const databaseFile = path.join(__dirname, './data/database.json');
const db = await JSONFilePreset(databaseFile, defaultData);

await db.data.notes.push({
  id: 'f7d41a0b-e63b-4e55-ad9e-4cf236ced675',
  title: 'first note',
  value: 'value of the first note',
});
await db.write();

export function GetAllNotes() {
  const notes = db.data.notes;
  return notes;
}
