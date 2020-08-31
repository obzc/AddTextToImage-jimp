const Jimp = require("jimp");

const ORIGINAL_IMAGE =
  "https://i.pinimg.com/564x/e9/1d/07/e91d07b1b027e66ba878c9e5d02a0f6d.jpg";

const LOGO = "https://seeklogo.com/images/I/istanbul-gedik-universitesi-logo-19DE1BA437-seeklogo.com.png";

const LOGO_MARGIN_PERCENTAGE = 5;

const FILENAME = "test.jpg";

const main = async () => {
  const [image, logo] = await Promise.all([
    Jimp.read(ORIGINAL_IMAGE),
    
    Jimp.read(LOGO),

  ]);



  logo.resize(100, Jimp.AUTO);

  const xMargin = (image.bitmap.width * LOGO_MARGIN_PERCENTAGE) / 500;
  const yMargin = (image.bitmap.width * LOGO_MARGIN_PERCENTAGE) / 500;

  const X = image.bitmap.width - logo.bitmap.width - xMargin;
  const Y = image.bitmap.height - logo.bitmap.height - yMargin;

  return image.composite(logo, X, Y, [
    {
      mode: Jimp.BLEND_SCREEN,
      opacitySource: 0.1,
      opacityDest: 1
    }
  ]);
};

main().then(image => image.write(FILENAME));