import Painting from "./Painting"
import realisticWatercolorsData from "./../data/realisticWatercolors"
import abstractWatercolorsData from "./../data/abstractWatercolors"
//import realisticWatercolorsData from "./../data/realisticWatercolors"

const Paintings = () => {
    const realisticPaintings = realisticWatercolorsData.map(item => {
        return (
        <Painting
            key={item.id}
            item={item}
        />
        )
    }) 
    const abstractPaintings = abstractWatercolorsData.map(item => {
        return (
        <Painting
            key={item.id}
            item={item}
        />
        )
    }) 
    // const smallPaintings = smallWatercolorsData.map(item => {
    //     return (
    //     <Painting
    //         key={item.id}
    //         item={item}
    //     />
    //     )
    // }) 

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
            {/* <h3>Abstract Watercolors</h3>
            <div className="paintings">
                {abstractPaintings}
            </div>
            <hr/>

            <h3>Small Watercolors</h3> */}
            {/* <section className="paintings">
                {smallPaintings}
            </section> */}
             
        </div>
    )
}

export default <Paintings />;