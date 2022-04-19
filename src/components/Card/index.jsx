import './style.css'

export function Card(props){ //props sendo desestruturado em 'name' e 'time'
  return(
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}