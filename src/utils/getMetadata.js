import ExifReader from 'exifreader'

const getMetadata = imageDataArrayBuffer => {
  return ExifReader.load(imageDataArrayBuffer, { expanded: true }) || null
}

export default getMetadata