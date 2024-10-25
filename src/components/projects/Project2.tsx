import ImageSlider from "./ImageSlider";
import image4 from "./images/cat.jpg";
import image5 from "./images/dog.jpg";
import image6 from "./images/elephant.jpg";

const project2Images = [
    { src: image4 },
    { src: image5 },
    { src: image6 }
];

const Project2 = () => {
    return (
        <div>
            <ImageSlider images={project2Images} />
        </div>
    );
};

export default Project2;

