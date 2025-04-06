export default function imageLoader({ src }) {
  return src.startsWith('/') ? `${process.env.NEXT_PUBLIC_BASE_PATH}${src}` : src;
}
