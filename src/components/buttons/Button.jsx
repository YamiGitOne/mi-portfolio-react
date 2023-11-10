
const Button = ({url, text}) => {
    return (
        <div className="text-center">
            <a href={url}><button  className="rounded-none bg-gray-500 p-2 mt-5">{text}</button></a>
        </div>  
    )
}

export default Button;