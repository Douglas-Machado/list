import React, { useState, useEffect } from 'react'

import './style.css'

import { Card } from '../../components/Card'

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''});

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setStudents(prevState => [...prevState, newStudent])
  };

  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch('https://api.github.com/users/Douglas-Machado')
        const data = await response.json()
        setUser({
          name: data.name,
          avatar: data.avatar_url
        })
      }catch(e){
        console.log(e)
      }
    }

    fetchData()
  },[])

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} />
        </div>
      </header>
     <input 
     type="text" name="name"
     placeholder="Digite o nome..."
     onChange={e => setStudentName(e.target.value)}
      />
     <button 
     type="submit"
     onClick={handleAddStudent}
     >Adicionar</button>

    {
      students.map(student => (
        <Card 
          key={student.time}
          name={student.name} 
          time={student.time} 
          />
      ))
    }
     
    </div>

  )
}

export default Home
