const Jimp = require("jimp");

const FILENAME = "test2.jpg";

const main = async () => {
  Jimp.read(
    "https://i.pinimg.com/564x/9e/05/f3/9e05f3df5d9835ee0aafeb04e1857c0a.jpg"
  ).then(function (image) {
    image.cover(800, 1200);
    
    //image.color([{apply:'mix', params: ['black', 60]}]) 
    image.color([{ apply: 'darken', params: [30] }]);



    image.write("test2.jpg");

    Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(function (font) {
        image.print(font, 0, 400, {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER
        }, 800, 1200);
       


      image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        image.write("test2.jpg");
      });
    });
  });
};

main().then((image) => image.write(FILENAME));
