import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
        />
        <Carousel.Caption>
          <h3>ABCD</h3>
          <p>Texto Meramente Ilustrativo</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://abglt.org.br/wp-content/uploads/2020/10/wallpaper-pc1-scaled-1.jpg"
        />
        <Carousel.Caption>
          <h3>ABCD</h3>
          <p>Texto Meramente Ilustrativo</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.showmetech.com.br/wp-content/uploads//2017/01/outrun_wallpaper__10_-2017-01-25-0516.jpg"
        />
        <Carousel.Caption>
          <h3>ABCD</h3>
          <p>Texto Meramente Ilustrativo</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
