import "./HeaderOptions.css"
export default function HeaderOptions({title,Icon}){
    return(
        <div className="headerOptions">
            {Icon && <Icon className="HeaderOptions__icon"/>}
            <h3 className="HeaderOptions__title">{title}</h3>
        </div>
    )
}