import React from "react";

class Pokemon extends React.Component {
  render(){
  const { pokeinfo: {name, type, image, averageWeight: { value, measurementUnit}} } = this.props;
    return(
      <div className="card">
        {/* <video autoplay muted loop id="myVideo">
<source src="https://ak.picdn.net/shutterstock/videos/1009444460/preview/stock-footage-blue-hexagon-scale-looping-background.webm" type="video/mp4" /> 
</video>  */}
          <div className="pokImg">
          <img src={image} alt={name} />
        </div> 
        <div>
        <p>{name}</p>
        <p> {type}  </p>
        <p> Average Weight: {value}{measurementUnit} </p>
        </div>
      </div>
    );
  }
}

export default Pokemon;