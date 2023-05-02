import Painting from "./Painting"
import realisticWatercolorsData from "./../data/realisticWatercolors"

const Paintings = () => {
    const realisticPaintings = realisticWatercolorsData.map(item => {
        return (
        <Painting
            key={item.id}
            item={item}
        />
        )
    }) 

    return(
        <div>
            <h2>Art</h2>
            <p>Here are my paintings! </p>
            <h2>My Watercolors</h2>
            <h3>Realistic Watercolors</h3>
            <div className="paintings">
                {realisticPaintings}
            </div>

            <hr/>     
        </div>
    )
}

export default <Paintings />;