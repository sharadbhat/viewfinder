import ExifReader from 'exifreader'

const getXMP = imageDataArrayBuffer => {
  return ExifReader.load(imageDataArrayBuffer, { expanded: true }).xmp || null
}

export default getXMP