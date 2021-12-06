import noImage from "../assets/no-image.jpg";
interface images {
  image?: string;
  img?: string;
}

export const validateImages = ({ image, img }: images): string => {
  let imageToShow: string;
  if (img) {
    imageToShow = img;
  } else if (image && !img) {
    imageToShow = image;
  } else {
    imageToShow = noImage;
  }
  return imageToShow;
};
