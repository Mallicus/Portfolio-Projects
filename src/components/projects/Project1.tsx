import ImageSlider from "./ImageSlider";
import image1 from "./images/hus.jpg";
import image2 from "./images/koala.jpg";
import image3 from "./images/bird.jpeg";

const project1Images = [
    { src: image1 },
    { src: image2 },
    { src: image3 }
];

const Project1 = () => {
  return (
    <div>
      <ImageSlider images={project1Images} />
    </div>
  );
};

export default Project1;
