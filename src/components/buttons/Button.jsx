
const Button = ({url}) => {
    return (
        <div className="text-center">
            <a href={url}><button  class="rounded-none bg-gray-500 p-2">Boton</button></a>
        </div>  
    )
}

export default Button;