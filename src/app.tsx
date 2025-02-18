import { useAlert } from './context/alert.context'

export default function Page() {

    const {
        alert
    } = useAlert()
    
    return <div>

        <button
            onClick={() => alert('error', {
                message: '',
                title: 'Sucesso ao cadastrar usuario',
                callback: () => {
                    console.log('fim')
                }
            })}
        >Chamar</button>
    </div>
}