const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913',
    name: 'slide1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3',
    name: 'slide2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5',
    name: 'slide3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
    name: 'service1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1578500339042-8059fcd23a76',
    name: 'service2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1584622781867-1c5a540d0f49',
    name: 'service3.jpg'
  }
];

const imagesDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

images.forEach(image => {
  const file = fs.createWriteStream(path.join(imagesDir, image.name));
  https.get(image.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${image.name}`);
    });
  }).on('error', err => {
    fs.unlink(path.join(imagesDir, image.name));
    console.error(`Error downloading ${image.name}: ${err.message}`);
  });
});
