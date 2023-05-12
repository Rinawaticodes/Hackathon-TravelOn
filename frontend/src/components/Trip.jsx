import trip from "../assets/maldive_beach.jpeg";
import italie from "../assets/italie.jpeg";
import santorini from "../assets/santorini.jpeg";

function Trip() {
  return (
    <div className="trip">
      <div className="triptext">
        <h1>Ville Populaire</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
          necessitatibus illum ducimus excepturi molestias, quasi culpa quisquam
          sunt incidunt, ex quo veritatis eos nihil aliquid esse harum at
          tenetur maxime?
        </p>
      </div>
      <div className="tripCard">
        <div className="tripBox">
          <img src={trip} alt="" />
          <h2>Maldives</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, omnis
            eos magni neque est quo! Atque totam voluptate illum! Veniam sint
            eaque enim officiis reiciendis, beatae vero nulla voluptatem
            deleniti?
          </p>
        </div>
        <div className="tripBox1">
          <img src={italie} alt="" />
          <h2>Italie</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, omnis
            eos magni neque est quo! Atque totam voluptate illum! Veniam sint
            eaque enim officiis reiciendis, beatae vero nulla voluptatem
            deleniti?
          </p>
        </div>
        <div className="tripBox2">
          <img src={santorini} alt="" />
          <h2>Greek</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, omnis
            eos magni neque est quo! Atque totam voluptate illum! Veniam sint
            eaque enim officiis reiciendis, beatae vero nulla voluptatem
            deleniti?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trip;
