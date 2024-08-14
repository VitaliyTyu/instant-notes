import {GetAllNotes} from '#preload';
import {Note} from '../../preload/src/database';
import './App.css';
import {useEffect, useState} from 'react';

function NoteCard() {
  return <div style={{padding: '8px'}}>Note Card</div>;
}

function NotesList() {
  return (
    <div style={{display: 'flex', flexFlow: 'column', width: '200px'}}>
      <div style={{padding: '8px'}}>Notes List</div>
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </div>
  );
}

function NoteView() {
  return <div style={{width: '100%'}}>Note View</div>;
}

function App() {
  const [notes, setNotes] = useState<Note[]>();

  useEffect(() => {
    const data = GetAllNotes();
    setNotes(data);
  }, []);

  return (
    <div>
      <div style={{display: 'flex', flexFlow: 'row'}}>
        <NotesList />
        <NoteView />
      </div>
      {notes &&
        notes.map(note => (
          <p key={note.id}>
            title: {note.title} value: {note.value}
          </p>
        ))}
    </div>
  );
}

export default App;
