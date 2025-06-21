import './App.css'

function AppJSX() {
  const name = 'jeong';
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
      <>
        <h1 className='orange'>{`Hello ${name}`}</h1>
        <h2>Hello!</h2>
        <p>{name}</p>
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
        <img
            style={{width: '200px'}}
            src="https://images.unsplash.com/photo-1748280816879-89b9ca0d4aa0?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="nature"/>
      </>

      )


}

export default AppJSX
