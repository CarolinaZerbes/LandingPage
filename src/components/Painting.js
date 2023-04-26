export default function Painting(props) {
    return (
        <div className="painting">
            <img src={`../../images/${props.item.name}`} className="painting-image" />
        </div>
    )
}