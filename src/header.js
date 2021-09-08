import { useHistory } from "react-router-dom"

export default function Header(){
  const history = useHistory();
    return(
        <nav>
            <button onClick={()=>history.push('/')}>counter</button>
            <button onClick={()=>history.push('/class')}>clock in class</button>
            <button onClick={()=>history.push('/func')}>clock in function</button>
        </nav>
    )
}