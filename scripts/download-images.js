const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1',
    name: 'hero-bg.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
    name: 'escalier.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311',
    name: 'garde-corps.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1558346547-4439467bd1d5',
    name: 'portail.jpg'
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
