const Jimp = require("jimp");

const FILENAME = "test2.jpg";
const DIR = "images/";
const IMAGE =
  "https://i.pinimg.com/564x/9e/05/f3/9e05f3df5d9835ee0aafeb04e1857c0a.jpg";
const W = 800;
const H = 1200;

const main = async () => {
  Jimp.read(IMAGE)
    .then((image) => {
      
    image.cover(W, H).quality(60);

    //image.color([{apply:'mix', params: ['black', 60]}])
    image.color([{ apply: "darken", params: [30] }]);

    Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(function (font) {
      image.print(
        font,
        0,
        400,
        {
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        },
        W,
        H
      );

      image.getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
        image.write(DIR + FILENAME);
        console.log("image uploaded: " + DIR + FILENAME);
      });

      /*image.getBase64(Jimp.AUTO, function(err, data) {  // Add err
        console.log(data); 
      });*/
    });
    })
    .catch((err) => {
      // Handle an exception.
    });
};

main()
  .then((image) => {
    (image) => image.write(FILENAME);
  })
  .catch((err) => {
    // Handle an exception.
  });
