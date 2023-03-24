import './Map.css'

const Map = () => {
  const row = () => {
    let r = "";
    for (let i = 0; i < 300; i++) {
      r = r + ".";
    }
    return r;
  }

  const map = () => {
    let r = "";
    for (let i = 0; i < 100; i++) {
      r = r + row() + "\n";
    }
    return r;
  }


  return(
    <div className="Map">
      {map()}
    </div>
  )
}

export default Map;
